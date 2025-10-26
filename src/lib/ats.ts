// ATS (Applicant Tracking System) scoring and keyword matching logic

export interface KeywordMatch {
  keyword: string;
  count: number;
  relevance: 'high' | 'medium' | 'low';
}

export interface MissingKeyword {
  keyword: string;
  relevance: 'high' | 'medium' | 'low';
}

export interface KeywordMatchResult {
  score: number;
  matched: KeywordMatch[];
  missing: MissingKeyword[];
}

export interface FormattingIssue {
  type: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
}

export interface FormattingResult {
  score: number;
  issues: FormattingIssue[];
}

export interface SkillMatch {
  skill: string;
  level: string;
}

export interface MissingSkill {
  skill: string;
  importance: 'high' | 'medium' | 'low';
}

export interface SkillsAlignmentResult {
  score: number;
  matchedSkills: SkillMatch[];
  missingSkills: MissingSkill[];
}

export interface ATSScoreResult {
  overallScore: number;
  keywordMatch: KeywordMatchResult;
  formatting: FormattingResult;
  skillsAlignment: SkillsAlignmentResult;
}

// Extract keywords from text with importance scoring
function extractKeywords(text: string): { keywords: string[]; importance: Map<string, number> } {
  const commonSkills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java', 'C++',
    'HTML', 'CSS', 'SQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Azure',
    'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Agile', 'Scrum',
    'RESTful API', 'GraphQL', 'Microservices', 'Machine Learning', 'Data Science',
    'Frontend', 'Backend', 'Full-stack', 'DevOps', 'UI/UX', 'Testing'
  ];

  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2);

  const keywordCount: { [key: string]: number } = {};
  const importance = new Map<string, number>();

  // Count occurrences of common skills
  commonSkills.forEach(skill => {
    const skillLower = skill.toLowerCase();
    const count = words.filter(word => word.includes(skillLower)).length;
    if (count > 0) {
      keywordCount[skill] = count;
      importance.set(
        skill,
        skill.includes('API') || skill.includes('CI/CD') || skill.includes('Microservices') ? 3 :
        skill.includes('React') || skill.includes('Node.js') || skill.includes('TypeScript') ? 2.5 :
        skill.includes('JavaScript') || skill.includes('Python') || skill.includes('Java') ? 2 :
        skill.includes('Agile') || skill.includes('Scrum') || skill.includes('Docker') ? 1.5 :
        1
      );
    }
  });

  // Extract capitalized words (proper nouns or technologies)
  const capitalizedWords = text.match(/\b[A-Z][a-z]+\b/g) || [];
  capitalizedWords.forEach(word => {
    if (!keywordCount[word] && word.length > 3) {
      keywordCount[word] = 1;
      importance.set(word, 1);
    }
  });

  return {
    keywords: Object.keys(keywordCount),
    importance
  };
}

// Calculate keyword match score
export function calculateKeywordMatch(resumeText: string, jobDescriptionText: string): KeywordMatchResult {
  const resumeKeywords = extractKeywords(resumeText);
  const jobKeywords = extractKeywords(jobDescriptionText);

  const matched: KeywordMatch[] = [];
  const missing: MissingKeyword[] = [];

  // Matched keywords
  resumeKeywords.keywords.forEach(keyword => {
    if (jobKeywords.keywords.includes(keyword.toLowerCase())) {
      const relevance =
        (jobKeywords.importance.get(keyword) || 0) >= 3 ? 'high' :
        (jobKeywords.importance.get(keyword) || 0) >= 2 ? 'medium' : 'low';

      matched.push({
        keyword,
        count: resumeText.toLowerCase().split(keyword.toLowerCase()).length - 1,
        relevance
      });
    }
  });

  // Missing keywords
  jobKeywords.keywords.forEach(keyword => {
    if (!resumeKeywords.keywords.includes(keyword.toLowerCase())) {
      const relevance =
        (jobKeywords.importance.get(keyword) || 0) >= 3 ? 'high' :
        (jobKeywords.importance.get(keyword) || 0) >= 2 ? 'medium' : 'low';

      if (relevance !== 'low') {
        missing.push({ keyword, relevance });
      }
    }
  });

  let totalImportance = 0;
  let matchedImportance = 0;

  jobKeywords.keywords.forEach(keyword => {
    const importance = jobKeywords.importance.get(keyword) || 1;
    totalImportance += importance;

    if (resumeKeywords.keywords.includes(keyword.toLowerCase())) {
      matchedImportance += importance;
    }
  });

  const score = totalImportance > 0 ? Math.round((matchedImportance / totalImportance) * 100) : 0;

  return { score, matched, missing };
}

// Check resume formatting
export function checkFormatting(resumeText: string): FormattingResult {
  const issues: FormattingIssue[] = [];

  if (resumeText.includes('|') && resumeText.includes('-')) {
    issues.push({
      type: 'table',
      message: 'Tables may not be parsed correctly by ATS systems',
      severity: 'high'
    });
  }

  const standardSections = ['Experience', 'Education', 'Skills', 'Summary', 'Projects'];
  const hasStandardSections = standardSections.some(section =>
    new RegExp(`\\b${section}\\b`, 'i').test(resumeText)
  );

  if (!hasStandardSections) {
    issues.push({
      type: 'headings',
      message: 'Use standard section headings like Experience, Education, Skills',
      severity: 'medium'
    });
  }

  const specialChars = /[^\w\s.,;:()[\]{}@#%&*+=<>'"\/|`~]/g;
  const specialCharMatches = resumeText.match(specialChars);
  if (specialCharMatches && specialCharMatches.length > 5) {
    issues.push({
      type: 'special_chars',
      message: 'Too many special characters may confuse ATS systems',
      severity: 'medium'
    });
  }

  const bulletPoints = resumeText.match(/^[\s]*[-•*]/gm);
  const hasBulletPoints = bulletPoints && bulletPoints.length > 5;
  if (!hasBulletPoints) {
    issues.push({
      type: 'bullets',
      message: 'Use bullet points to describe your experience',
      severity: 'low'
    });
  }

  let score = 100;
  issues.forEach(issue => {
    switch (issue.severity) {
      case 'high': score -= 20; break;
      case 'medium': score -= 10; break;
      case 'low': score -= 5; break;
    }
  });

  return { score: Math.max(0, score), issues };
}

// Skills alignment
export function checkSkillsAlignment(resumeText: string, jobDescriptionText: string): SkillsAlignmentResult {
  const resumeKeywords = extractKeywords(resumeText);
  const jobKeywords = extractKeywords(jobDescriptionText);

  const matchedSkills: SkillMatch[] = [];
  const missingSkills: MissingSkill[] = [];

  resumeKeywords.keywords.forEach(keyword => {
    if (jobKeywords.keywords.includes(keyword.toLowerCase())) {
      const level =
        resumeText.toLowerCase().includes(`${keyword.toLowerCase()} expert`) ||
        resumeText.toLowerCase().includes(`${keyword.toLowerCase()} senior`) ? 'Expert' :
        resumeText.toLowerCase().includes(`${keyword.toLowerCase()} advanced`) ? 'Advanced' :
        resumeText.toLowerCase().includes(`${keyword.toLowerCase()} intermediate`) ? 'Intermediate' :
        resumeText.toLowerCase().includes(`${keyword.toLowerCase()} junior`) ||
        resumeText.toLowerCase().includes(`${keyword.toLowerCase()} beginner`) ? 'Beginner' : 'Intermediate';

      matchedSkills.push({ skill: keyword, level });
    }
  });

  jobKeywords.keywords.forEach(keyword => {
    if (!resumeKeywords.keywords.includes(keyword.toLowerCase())) {
      const importance =
        (jobKeywords.importance.get(keyword) || 0) >= 3 ? 'high' :
        (jobKeywords.importance.get(keyword) || 0) >= 2 ? 'medium' : 'low';

      if (importance !== 'low') missingSkills.push({ skill: keyword, importance });
    }
  });

  let totalImportance = 0;
  let matchedImportance = 0;

  jobKeywords.keywords.forEach(keyword => {
    const importance = jobKeywords.importance.get(keyword) || 1;
    totalImportance += importance;
    if (resumeKeywords.keywords.includes(keyword.toLowerCase())) matchedImportance += importance;
  });

  const score = totalImportance > 0 ? Math.round((matchedImportance / totalImportance) * 100) : 0;

  return { score, matchedSkills, missingSkills };
}

// Overall ATS Score
export function calculateATSScore(resumeText: string, jobDescriptionText: string): ATSScoreResult {
  const keywordMatch = calculateKeywordMatch(resumeText, jobDescriptionText);
  const formatting = checkFormatting(resumeText);
  const skillsAlignment = checkSkillsAlignment(resumeText, jobDescriptionText);

  const overallScore = Math.round(
    keywordMatch.score * 0.4 +
    formatting.score * 0.3 +
    skillsAlignment.score * 0.3
  );

  return { overallScore, keywordMatch, formatting, skillsAlignment };
}
