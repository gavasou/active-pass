import { Check, X } from "lucide-react";

const forYou = [
  "Trabalha por conta própria",
  "É MEI ou pessoa física",
  "Quer cuidar da saúde com flexibilidade",
  "Prefere pagar pouco e ter escolha",
];

const notForYou = [
  "Espera acesso ilimitado a tudo",
  "Quer benefícios corporativos tradicionais",
  "Não pretende usar nenhum benefício",
];

const AudienceSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Esse plano é pra você se…
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* For you */}
            <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Check className="w-6 h-6" />
                É pra você
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Not for you */}
            <div className="bg-muted rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-xl font-bold text-muted-foreground mb-6 flex items-center gap-2">
                <X className="w-6 h-6" />
                Não é pra você
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
