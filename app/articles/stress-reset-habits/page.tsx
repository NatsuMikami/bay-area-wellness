"use client";
import Link from "next/link";

export default function Article() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="text-sm underline">← Back to home</Link>
      <h1 className="mt-4 text-3xl font-semibold">3 Stress-Reset Habits for Busy 30s</h1>
      <p className="mt-2 text-muted-foreground">Short, science-backed resets you can do between meetings.</p>

      <img src="/images/stress-reset.jpg" alt="Desk reset" className="mt-6 rounded-xl shadow-sm" />

      <div className="prose prose-neutral mt-6">
        <p>When time is tight, consistency beats intensity. Try these:</p>
        <ol>
          <li>Box breathing (90s): in 4, hold 4, out 4, hold 4 × 6.</li>
          <li>2-min desk mobility: neck circles, shoulder rolls, twists.</li>
          <li>Walk-call: take your next call outside (500–800 steps).</li>
        </ol>
      </div>
    </main>
  );
}
