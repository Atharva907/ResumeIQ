import { NextRequest, NextResponse } from 'next/server';
import { verifyResume } from '@/lib/openai';
import { parseResumeFile, detectFileType } from '@/lib/parser';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Check file type
    const fileType = detectFileType(file.name, file.type);
    if (!['pdf', 'docx'].includes(fileType)) {
      return NextResponse.json(
        { error: 'Unsupported file type. Please upload a PDF or DOCX file.' },
        { status: 400 }
      );
    }

    // Parse file to extract text
    const buffer = Buffer.from(await file.arrayBuffer());
    const resumeText = await parseResumeFile(buffer, fileType);

    // Verify resume with AI
    const verificationResults = await verifyResume(resumeText);

    return NextResponse.json({
      success: true,
      results: verificationResults,
      extractedText: resumeText,
    });
  } catch (error) {
    console.error('Error verifying resume:', error);
    return NextResponse.json(
      { error: 'Failed to verify resume' },
      { status: 500 }
    );
  }
}
