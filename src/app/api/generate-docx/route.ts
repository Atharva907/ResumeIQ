import { NextRequest, NextResponse } from 'next/server';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';

export async function POST(request: NextRequest) {
  try {
    const { resumeData, filename } = await request.json();

    // Parse the resume data
    const resume = JSON.parse(resumeData);

    // Create a new document
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Name and Title
            new Paragraph({
              children: [
                new TextRun({
                  text: resume.name,
                  bold: true,
                  size: 32,
                }),
              ],
              heading: HeadingLevel.TITLE,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: resume.title,
                  size: 24,
                }),
              ],
            }),

            // Contact Information
            new Paragraph({
              children: [
                new TextRun({
                  text: `Email: ${resume.contact.email} | Phone: ${resume.contact.phone} | Location: ${resume.contact.location}`,
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `LinkedIn: ${resume.contact.linkedin} | GitHub: ${resume.contact.github}`,
                  size: 20,
                }),
              ],
            }),

            // Summary
            new Paragraph({
              children: [
                new TextRun({
                  text: "Summary",
                  bold: true,
                  size: 24,
                }),
              ],
              heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: resume.summary,
                  size: 20,
                }),
              ],
            }),

            // Experience
            new Paragraph({
              children: [
                new TextRun({
                  text: "Experience",
                  bold: true,
                  size: 24,
                }),
              ],
              heading: HeadingLevel.HEADING_1,
            }),

            // Add each experience
            ...resume.experience.map((exp: any) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: exp.role,
                    bold: true,
                    size: 22,
                  }),
                ],
                heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${exp.company} | ${exp.duration}`,
                    size: 20,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: exp.description,
                    size: 20,
                  }),
                ],
              }),
              ...exp.highlights.map((highlight: string) => 
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `• ${highlight}`,
                      size: 20,
                    }),
                  ],
                })
              ),
            ]).flat(),

            // Education
            new Paragraph({
              children: [
                new TextRun({
                  text: "Education",
                  bold: true,
                  size: 24,
                }),
              ],
              heading: HeadingLevel.HEADING_1,
            }),

            // Add each education
            ...resume.education.map((edu: any) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.degree,
                    bold: true,
                    size: 22,
                  }),
                ],
                heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${edu.institution} | ${edu.duration}`,
                    size: 20,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.details,
                    size: 20,
                  }),
                ],
              }),
            ]).flat(),

            // Skills
            new Paragraph({
              children: [
                new TextRun({
                  text: "Skills",
                  bold: true,
                  size: 24,
                }),
              ],
              heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: resume.skills.join(", "),
                  size: 20,
                }),
              ],
            }),

            // Projects
            new Paragraph({
              children: [
                new TextRun({
                  text: "Projects",
                  bold: true,
                  size: 24,
                }),
              ],
              heading: HeadingLevel.HEADING_1,
            }),

            // Add each project
            ...resume.projects.map((project: any) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.name,
                    bold: true,
                    size: 22,
                  }),
                ],
                heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.duration,
                    size: 20,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.description,
                    size: 20,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Technologies: ${project.technologies.join(", ")}`,
                    size: 20,
                  }),
                ],
              }),
            ]).flat(),
          ],
        },
      ],
    });

    // Generate the DOCX file
    const buffer = await Packer.toBuffer(doc);

    // Return the DOCX as a response
    return new NextResponse(buffer.buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${filename}"`
      }
    });
  } catch (error) {
    console.error('Error generating DOCX:', error);
    return NextResponse.json(
      { success: false, message: 'Error generating DOCX' },
      { status: 500 }
    );
  }
}
