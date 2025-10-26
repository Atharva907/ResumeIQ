// import { NextRequest, NextResponse } from 'next/server';
// import { connectToDatabase } from '@/lib/mongodb';

// export async function POST(request: NextRequest) {
//   try {
//     const { title, content, template } = await request.json();

//     // Connect to the database
//     const db = await connectToDatabase();
//     const collection = db.collection('resumes');

//     // Create a new resume document
//     const newResume = {
//       title,
//       content,
//       template,
//       createdAt: new Date(),
//       updatedAt: new Date()
//     };

//     // Insert the resume into the database
//     const result = await collection.insertOne(newResume);

//     return NextResponse.json({ 
//       success: true, 
//       id: result.insertedId,
//       message: 'Resume saved successfully!' 
//     });
//   } catch (error) {
//     console.error('Error saving resume:', error);
//     return NextResponse.json(
//       { success: false, message: 'Error saving resume' },
//       { status: 500 }
//     );
//   }
// }





import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { title, content, template } = await request.json();

    // ✅ Validate inputs
    if (!title || !content || !template) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Connect to MongoDB
    const db = await connectToDatabase();
    const collection = db.collection("resumes");

    // ✅ Create new resume
    const newResume = {
      title,
      content,
      template,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // ✅ Insert into DB
    const result = await collection.insertOne(newResume);

    if (!result.insertedId) {
      throw new Error("Failed to insert resume");
    }

    return NextResponse.json({
      success: true,
      id: result.insertedId,
      message: "Resume saved successfully!",
    });
  } catch (error) {
    console.error("❌ Error saving resume:", error);
    return NextResponse.json(
      {
        success: false,
        message: (error as Error).message || "Error saving resume",
      },
      { status: 500 }
    );
  }
}
