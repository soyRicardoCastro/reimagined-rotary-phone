import type { ServerRuntime } from "next"
import { ImageResponse } from "@vercel/og"

import { ogImageSchema } from "@/lib/validations/og"
import { Icons } from "@/components/icons"

export const runtime: ServerRuntime = "edge"

export function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parsedValues = ogImageSchema.parse(
      Object.fromEntries(url.searchParams)
    )

    const { mode, title, description } = parsedValues
    const paint = mode === "dark" ? "#fff" : "#000"

    return new ImageResponse(
      (
        <div
          tw="h-full w-full flex items-center justify-center flex-col"
          style={{
            color: paint,
            background: "linear-gradient(to bottom, #eecda3, #ef629f)",
          }}
        >
          <div tw="flex items-center text-3xl justify-center flex-col">
            <Icons.dulcesdlissa300x300 />
          </div>
          <div
            tw="flex max-w-4xl items-center justify-center flex-col mt-10"
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            <div tw="text-5xl font-bold tracking-tight leading-tight dark:text-white px-8">
              {title}
            </div>
            <div tw="mt-5 text-3xl text-slate-200 text-center font-normal tracking-tight leading-tight px-20">
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    error instanceof Error
      ? console.log(`${error.message}`)
      : console.log(error)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
