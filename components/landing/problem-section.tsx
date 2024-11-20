import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Surplus de données",
    description:
      "Les entreprises ont du mal à faire de la valeur des données complexes, manquant de valeur qui pourrait conduire à la croissance et à l'innovation.",
    icon: Brain,
  },
  {
    title: "Décision lente",
    description:
      "Les méthodes de traitement de données traditionnelles sont trop lentes, causant aux entreprises de se décaler derrière les changements du marché et de manquer des opportunités cruciales.",
    icon: Zap,
  },
  {
    title: "Inquiétudes de sécurité",
    description:
      "Avec l'augmentation des cyber-menaces, les entreprises ont des inquiétudes concernant la sécurité de leurs informations sensibles lors de l'adoption de nouvelles technologies.",
    icon: Shield,
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
