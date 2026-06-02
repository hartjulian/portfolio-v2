interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-8">
      <h2 id={id} className="text-sm font-medium uppercase tracking-widest text-accent">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
      ) : null}
    </header>
  );
}
