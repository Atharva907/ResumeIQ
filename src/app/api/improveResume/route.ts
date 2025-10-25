import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { resumeData } = await req.json();

    if (!resumeData) {
      return NextResponse.json({ error: "Resume data is required" }, { status: 400 });
    }

    const prompt = `Improve this resume for readability and ATS optimization. Keep the JSON structure intact, but enhance the content to be more professional and impactful. Focus on:
1. Using stronger action verbs
2. Adding quantifiable achievements where possible
3. Improving clarity and conciseness
4. Ensuring ATS-friendly formatting

Resume JSON:
${JSON.stringify(resumeData, null, 2)}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "You are a professional resume writer. Your task is to improve resumes while maintaining their original structure and key information. Always return valid JSON." 
        },
        { 
          role: "user", 
          content: prompt 
        }
      ],
    });

    const improvedResume = completion.choices[0].message.content;

    // Try to parse the response as JSON
    try {
      const parsedResume = JSON.parse(improvedResume || "{}");
      return NextResponse.json({ improved: parsedResume });
    } catch (parseError) {
      // If parsing fails, return the raw text
      return NextResponse.json({ improved: improvedResume });
    }
  } catch (error) {
    console.error("Error improving resume:", error);
    return NextResponse.json(
      { error: "Failed to improve resume. Please try again." },
      { status: 500 }
    );
  }
}
