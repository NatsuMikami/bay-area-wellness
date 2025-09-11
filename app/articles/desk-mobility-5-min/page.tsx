export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <a href="/" className="text-sm underline">← Back to home</a>
      <h1 className="mt-4 text-3xl font-semibold">Desk Relief: 5-Min Mobility You’ll Actually Do</h1>
      <p className="mt-2 text-muted-foreground">No equipment, no gym clothes—just relief.</p>
      <div className="prose prose-neutral mt-6">
        <ol>
          <li>Neck circles × 5 each way</li>
          <li>Shoulder rolls × 10</li>
          <li>Thoracic twist × 10 each side</li>
          <li>Hip hinge stretch × 30s</li>
          <li>Calf raises × 15</li>
        </ol>
      </div>
    </main>
  );
}