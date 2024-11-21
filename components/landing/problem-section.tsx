import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Globe, Rocket, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Manque de visibilité en ligne",
    description:
      "Les PME et commerces locaux perdent des clients faute de présence digitale efficace. Nous créons des sites web et applications sur mesure pour renforcer leur visibilité et leur crédibilité.",
    icon: Globe,
  },
  {
    title: "Outils numériques compliqués",
    description:
      "Les solutions standards ne conviennent pas toujours aux PME. Nous développons des outils simples et personnalisés pour optimiser leurs opérations, avec un support technique inclus.",
    icon: Code,
  },
  {
    title: "Retard technologique",
    description:
      "Ne pas évoluer avec les tendances digitales nuit à la compétitivité. Nous offrons des services modernes (SEO, UX/UI, optimisation mobile) pour garantir un avantage concurrentiel durable.",
    icon: Rocket,
  },
];

export default function ProblemSection() {
  return (
    <Section
      title="Problèmes"
      subtitle="Nous résolvons les problèmes suivants"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
