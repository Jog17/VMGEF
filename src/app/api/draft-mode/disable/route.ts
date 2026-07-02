import { NextResponse } from "next/server"
import { draftMode } from "next/headers"

export async function GET(request: Request) {
  (await draftMode()).disable()
  const url = new URL(request.url)
  return NextResponse.redirect(new URL("/", url.origin))
}
