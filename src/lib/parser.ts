import pdf from 'pdf-parse';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { Buffer } from 'buffer';

// Parse PDF file to extract text
export async function parsePDF(fileBuffer: Buffer): Promise<string> {
  try {
    const data = await pdf(fileBuffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to parse PDF file');
  }
}

// Parse DOCX file to extract text
export async function parseDOCX(fileBuffer: Buffer): Promise<string> {
  try {
    // Note: In a real implementation, you would use a library like mammoth
    // For this example, we'll return a placeholder
    return 'Text extracted from DOCX file';
  } catch (error) {
    console.error('Error parsing DOCX:', error);
    throw new Error('Failed to parse DOCX file');
  }
}

// Parse resume file based on its type
export async function parseResumeFile(fileBuffer: Buffer, fileType: string): Promise<string> {
  switch (fileType) {
    case 'pdf':
      return parsePDF(fileBuffer);
    case 'docx':
      return parseDOCX(fileBuffer);
    default:
      throw new Error(`Unsupported file type: ${fileType}`);
  }
}

// Generate PDF from resume text
export async function generatePDF(resumeText: string): Promise<Buffer> {
  try {
    // Note: In a real implementation, you would use a library like puppeteer or html2pdf
    // For this example, we'll return a placeholder
    return Buffer.from('Generated PDF content');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF');
  }
}

// Generate DOCX from resume text
export async function generateDOCX(resumeText: string): Promise<Buffer> {
  try {
    // Split text by lines to create paragraphs
    const lines = resumeText.split('
').filter(line => line.trim());

    // Create document with paragraphs
    const doc = new Document({
      sections: [{
        properties: {},
        children: lines.map(line => 
          new Paragraph({
            children: [new TextRun({ text: line })]
          })
        )
      }]
    });

    // Generate buffer
    const buffer = await Packer.toBuffer(doc);
    return buffer;
  } catch (error) {
    console.error('Error generating DOCX:', error);
    throw new Error('Failed to generate DOCX');
  }
}

// Detect file type from file name or MIME type
export function detectFileType(fileName: string, mimeType?: string): string {
  if (mimeType) {
    if (mimeType === 'application/pdf') return 'pdf';
    if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'docx';
  }

  if (fileName) {
    const extension = fileName.split('.').pop()?.toLowerCase();
    if (extension === 'pdf') return 'pdf';
    if (extension === 'docx') return 'docx';
  }

  throw new Error('Unable to determine file type');
}
