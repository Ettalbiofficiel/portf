export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
