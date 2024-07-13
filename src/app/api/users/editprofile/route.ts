import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request: NextRequest) {
  try {
    // Parse the request body as JSON
    const reqBody = await request.json();

    // Get the user ID from the request URL query parameters
    const id = request.nextUrl.searchParams.get('id');

    // Update user by ID with the request body
    const updatedUser = await User.findByIdAndUpdate(id, reqBody, { new: true });

    // Handle case where user is not found
    if (!updatedUser) {
      return NextResponse.json(
        {
          error: 'User not found or unable to update user details',
        },
        { status: 404 }
      );
    }

    // Respond with success message and updated user object
    return NextResponse.json({
      message: 'User updated successfully',
      success: true,
      user: updatedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
