import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.resolve(
    process.cwd(),
    "public",
    "svelte-app",
    "index.html",
  );

  try {
    const html = await fs.readFile(filePath, "utf8");

    return new NextResponse(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
      },
    });
  } catch (error) {
    console.error("Failed to serve Svelte app:", error);
    return new NextResponse("Unable to load Svelte application", {
      status: 500,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
      },
    });
  }
}
