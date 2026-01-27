import { Check } from "lucide-react";

const guarantees = [
  "Você pode cancelar quando quiser",
  "Sem fidelidade",
  "Sem letras miúdas",
  "Você testa sem risco",
];

const ObjectionSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            E se não fizer sentido pra mim?
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium text-left">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;
