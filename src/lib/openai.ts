import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function verifyResume(resumeText: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert resume reviewer. Analyze the provided resume for grammar, spelling, completeness, professional tone, and ATS compatibility. Return a JSON object with the following structure: { grammar: { score: number, issues: [{ type: string, message: string, line: number, suggestion: string }] }, completeness: { score: number, missingSections: string[], suggestions: string[] }, ats: { score: number, missingKeywords: string[], suggestions: string[] }, readability: { score: number, feedback: string, suggestions: string[] } }",
        },
        {
          role: "user",
          content: `Please analyze this resume:

${resumeText}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 1500,
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return result;
  } catch (error) {
    console.error("Error verifying resume:", error);
    throw new Error("Failed to verify resume");
  }
}

export async function checkATSScore(resumeText: string, jobDescription: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert in ATS (Applicant Tracking System) optimization. Analyze how well the resume matches the job description. Return a JSON object with the following structure: { overallScore: number, keywordMatch: { score: number, matched: [{ keyword: string, count: number, relevance: string }], missing: [{ keyword: string, relevance: string }] }, formatting: { score: number, issues: string[] }, skillsAlignment: { score: number, matchedSkills: [{ skill: string, level: string }], missingSkills: [{ skill: string, importance: string }] } }",
        },
        {
          role: "user",
          content: `Please analyze how well this resume matches the job description:

Resume:
${resumeText}

Job Description:
${jobDescription}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 1500,
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return result;
  } catch (error) {
    console.error("Error checking ATS score:", error);
    throw new Error("Failed to check ATS score");
  }
}

export async function generateResumeSuggestions(resumeText: string, jobDescription?: string) {
  try {
    const context = jobDescription 
      ? `Resume:
${resumeText}

Target Job Description:
${jobDescription}`
      : `Resume:
${resumeText}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert resume writer and career coach. Provide specific, actionable suggestions to improve the resume. Focus on phrasing, keyword optimization, and section prioritization. Return a JSON object with the following structure: { suggestions: [{ type: string, message: string, section: string, example: string }] }",
        },
        {
          role: "user",
          content: `Please provide suggestions to improve this resume:

${context}`,
        },
      ],
      temperature: 0.5,
      max_tokens: 1500,
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return result;
  } catch (error) {
    console.error("Error generating resume suggestions:", error);
    throw new Error("Failed to generate resume suggestions");
  }
}

export async function generateResumeSummary(resumeText: string, jobDescription?: string) {
  try {
    const context = jobDescription 
      ? `Resume:
${resumeText}

Target Job Description:
${jobDescription}`
      : `Resume:
${resumeText}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert resume writer. Generate a compelling professional summary for the resume based on the provided information. The summary should be 3-4 sentences long and highlight the candidate's key qualifications and achievements.",
        },
        {
          role: "user",
          content: `Please generate a professional summary for this resume:

${context}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return response.choices[0].message.content || "";
  } catch (error) {
    console.error("Error generating resume summary:", error);
    throw new Error("Failed to generate resume summary");
  }
}

export async function extractResumeText(fileBuffer: Buffer, fileType: string) {
  try {
    // In a real implementation, you would use a library like pdf-parse or mammoth to extract text
    // For this example, we'll return a placeholder
    return "Resume text extracted from file";
  } catch (error) {
    console.error("Error extracting resume text:", error);
    throw new Error("Failed to extract resume text");
  }
}
