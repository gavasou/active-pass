import { Dumbbell, Brain, Percent, RefreshCw, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Acesso a parceiros de atividade física",
    emoji: "🏃",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Benefícios em saúde mental e bem-estar",
    emoji: "🧘",
    color: "secondary",
  },
  {
    icon: Percent,
    title: "Descontos exclusivos para membros",
    emoji: "💸",
    color: "tertiary",
  },
  {
    icon: RefreshCw,
    title: "Cancelamento simples, sem multa",
    emoji: "🔄",
    color: "primary",
  },
  {
    icon: Rocket,
    title: "Novos benefícios adicionados constantemente",
    emoji: "🚀",
    color: "secondary",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  tertiary: "bg-tertiary/10 text-tertiary border-tertiary/20",
};

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              O que você recebe ao entrar
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estamos na fase inicial. Os benefícios crescem junto com a comunidade.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 shadow-card border border-border card-hover"
                >
                  <div className={`w-14 h-14 rounded-2xl ${colorClasses[benefit.color as keyof typeof colorClasses]} border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <span className="text-2xl">{benefit.emoji}</span>
                  </div>
                  <p className="font-semibold text-foreground leading-snug">{benefit.title}</p>
                </div>
              );
            })}
          </div>
          
          {/* Coming soon indicator */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.2s" }} />
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" style={{ animationDelay: "0.4s" }} />
              </span>
              <span>Mais benefícios chegando em breve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
