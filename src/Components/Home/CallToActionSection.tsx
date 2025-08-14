// src/components/home/CallToActionSection.tsx
import { Button } from "@/Components/ui/button";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="mt-24 mb-12 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Enhance Your Prompts?
      </h2>

      <Button className="text-lg px-6 py-4 cursor-pointer">
        <Link href="/ToolsPage">Start Now</Link>
      </Button>
    </section>
  );
}
