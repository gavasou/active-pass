import { XCircle, ArrowRight } from "lucide-react";

const painPoints = [
  { text: "Não pode contratar Gympass ou TotalPass", icon: "🚫" },
  { text: "Trabalha como MEI ou pessoa física", icon: "📋" },
  { text: "Quer cuidar da saúde sem pagar caro", icon: "💸" },
  { text: "Não tem RH, benefícios ou plano corporativo", icon: "🏢" },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Você já percebeu isso?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A maioria dos planos de bem-estar foi feita para empresas. E você?
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card card-hover group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/8 flex items-center justify-center text-2xl">
                  {point.icon}
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">{point.text}</p>
                </div>
                <XCircle className="w-5 h-5 text-destructive/50 flex-shrink-0" />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/5 border border-primary/10">
              <ArrowRight className="w-5 h-5 text-primary" />
              <p className="text-lg font-semibold text-foreground">
                O <span className="text-primary">Passe Ativo</span> nasce exatamente pra você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
