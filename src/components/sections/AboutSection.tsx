import { site } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <SectionHeading id="about-heading" title="About" />
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-foreground">
        {site.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
