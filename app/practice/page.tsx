'use client';

export default function PracticePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Practice Build</h1>
      <p className="mb-6">Client component with a working button.</p>
      <button
        onClick={() => alert('Button works!')}
        className="rounded-lg border px-4 py-2"
      >
        Click me
      </button>
    </main>
  );
}
