const stats = [
  { value: "100+", label: "Startups Listed" },
  { value: "50+", label: "Investors" },
  { value: "Multiple", label: "Industries Covered" },
];

export function Stats() {
  return (
    <section className="container py-16">
      <div className="grid gap-6 rounded-2xl bg-brand p-10 text-white sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm text-white/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
