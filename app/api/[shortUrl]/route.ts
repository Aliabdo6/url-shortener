import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Url from "@/models/Url";

export async function GET(
  request: Request,
  { params }: { params: { shortUrl: string } }
) {
  await dbConnect();

  const { shortUrl } = params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (url) {
      url.clicks += 1;
      await url.save();
      return NextResponse.redirect(
        url.originalUrl
      );
    } else {
      return NextResponse.json(
        { error: "URL not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
