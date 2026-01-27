import { X } from "lucide-react";

const painPoints = [
  "Não pode contratar Gympass ou TotalPass",
  "Trabalha como MEI ou pessoa física",
  "Quer cuidar da saúde sem pagar caro",
  "Não tem RH, benefícios ou plano corporativo",
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Você já percebeu isso?
          </h2>
          
          <div className="space-y-4 mb-10">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-foreground font-medium">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-primary flex items-center justify-center gap-2">
              <span className="text-2xl">👉</span>
              O Passe Ativo Pass nasce exatamente pra você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
