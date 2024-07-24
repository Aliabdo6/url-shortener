import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Url from "@/models/Url";
import { nanoid } from "nanoid";

export async function POST(request: Request) {
  await dbConnect();

  const { url, custom } = await request.json();

  if (!url) {
    return NextResponse.json(
      { error: "URL is required" },
      { status: 400 }
    );
  }

  const shortUrl = custom || nanoid(7);

  try {
    const newUrl = await Url.create({
      originalUrl: url,
      shortUrl,
    });
    return NextResponse.json(
      { shortUrl: newUrl.shortUrl },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating short URL" },
      { status: 500 }
    );
  }
}
