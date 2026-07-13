import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Code, CreditCard, Blocks, Languages } from "lucide-react"

const features = [
  {
    icon: Blocks,
    title: "40+ ready-made components",
    description: "A full set of shadcn/ui components, accessible by default.",
  },
  {
    icon: Languages,
    title: "Modern stack",
    description: "Next.js 15, React 19, Tailwind, TypeScript out of the box.",
  },
  {
    icon: Code,
    title: "Typed forms",
    description: "React Hook Form + Zod schemas with sensible defaults.",
  },
  {
    icon: CreditCard,
    title: "Payment-ready",
    description: "Drop-in patterns for connecting any payment provider.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background" data-platform-starter="true">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6">

        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <span className="text-sm text-muted-foreground">fardino-template</span>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col justify-center py-16">
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge variant="secondary" className="font-normal">v2.0</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Fardino
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Edit this page and start building your project.
              </p>
            </div>

            <Separator />

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <feature.icon className="mb-3 h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-xs text-muted-foreground">
          Built with Next.js, TypeScript and shadcn/ui
        </footer>

      </div>
    </div>
  )
}
