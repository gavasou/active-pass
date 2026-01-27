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
    <section className="section-padding bg-accent/30 relative overflow-hidden">
      {/* Decorative waves */}
      <svg className="absolute top-0 left-0 w-full h-16 opacity-20" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0 30 Q300 0 600 30 T1200 30" fill="none" className="stroke-primary" strokeWidth="2" />
      </svg>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Esse plano é pra você?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* For You */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">É pra você se…</h3>
              </div>
              
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Not For You */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Não é pra você se…</h3>
              </div>
              
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-muted-foreground" />
                    </span>
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
