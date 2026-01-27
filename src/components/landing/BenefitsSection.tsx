import { Dumbbell, Brain, Percent, RefreshCw, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Acesso a parceiros de atividade física",
    emoji: "🏃",
  },
  {
    icon: Brain,
    title: "Benefícios em saúde mental e bem-estar",
    emoji: "🧘",
  },
  {
    icon: Percent,
    title: "Descontos exclusivos para membros",
    emoji: "💸",
  },
  {
    icon: RefreshCw,
    title: "Cancelamento simples, sem multa",
    emoji: "🔄",
  },
  {
    icon: Rocket,
    title: "Novos benefícios adicionados constantemente",
    emoji: "🚀",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-accent/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            O que você recebe ao entrar
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Estamos na fase inicial. Os benefícios crescem junto com a comunidade.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{benefit.emoji}</span>
                  <p className="font-medium text-foreground">{benefit.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
