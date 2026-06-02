import { about } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <SectionHeading id="about-heading" title="About" />
      <p className="max-w-2xl text-base leading-relaxed text-foreground">
        {about}
      </p>
    </section>
  );
}
