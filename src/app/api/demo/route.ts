import { z } from "zod";
import { getPlatformContext } from "@/lib/platform";

export const dynamic = "force-static";

const demoInputSchema = z.object({
  title: z.string().min(2).max(120),
  intent: z.string().min(2).max(240),
});

const demoCards = [
  {
    id: "landing",
    title: "Marketing site",
    description: "Home page, service pages, contact form, extensible content.",
  },
  {
    id: "store",
    title: "Custom storefront",
    description: "Catalog, cart, and checkout — only when you actually need them.",
  },
  {
    id: "dashboard",
    title: "Admin dashboard",
    description: "Private pages and internal APIs added on top of this shell.",
  },
];

export async function GET() {
  const platform = getPlatformContext();

  return Response.json({
    ok: true,
    context: platform,
    cards: demoCards,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = demoInputSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        error: "invalid_payload",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const platform = getPlatformContext();

  return Response.json(
    {
      ok: true,
      message: "payload_received",
      context: platform,
      draft: {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        ...parsed.data,
      },
    },
    { status: 201 },
  );
}
