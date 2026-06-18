import type { SectionId } from "@/types/portfolio";

export function scrollToSection(sectionId: SectionId): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
