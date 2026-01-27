import { Check, Shield } from "lucide-react";

const guarantees = [
  { text: "Você pode cancelar quando quiser", icon: "🔓" },
  { text: "Sem fidelidade", icon: "🤝" },
  { text: "Sem letras miúdas", icon: "📄" },
  { text: "Você testa sem risco", icon: "🛡️" },
];

const ObjectionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            E se não fizer sentido pra mim?
          </h2>
          <p className="text-muted-foreground mb-10">
            A gente entende. Por isso, zero burocracia pra entrar ou sair.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-xl">
                  {guarantee.icon}
                </div>
                <p className="text-foreground font-medium text-left">{guarantee.text}</p>
                <Check className="w-5 h-5 text-primary flex-shrink-0 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;
