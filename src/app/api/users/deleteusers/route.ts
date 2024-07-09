import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { message: "Invalid user id." },
        { status: 400 }
      );
    }
    await User.findByIdAndDelete(id);
    return NextResponse.json(
      { messgae: "The item is deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
