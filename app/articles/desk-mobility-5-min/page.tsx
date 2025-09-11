// app/articles/desk-mobility-5-min/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desk Relief: 5-Min Mobility",
  description: "Quick mobility sequence for desk tension.",
};

export default function Page() {
  return (
    <article className="prose prose-zinc max-w-none">
      <a href="/" className="text-sm underline">← Back to home</a>
      <h1>Desk Relief: 5-Minute Mobility</h1>
      <p>Relieve neck, shoulders, and hips in 5 minutes.</p>
    </article>
  );
}
