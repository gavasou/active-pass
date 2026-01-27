import RunnerIcon from "./RunnerIcon";

const SolutionSection = () => {
  return (
    <section className="section-padding bg-accent/30 relative overflow-hidden">
      {/* Wave decorations */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-10 left-0 w-full h-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0 40 Q300 10 600 40 T1200 40" fill="none" className="stroke-primary/20" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-10 left-0 w-full h-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0 40 Q300 70 600 40 T1200 40" fill="none" className="stroke-secondary/20" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                O que é o <span className="text-gradient-primary">Passe Ativo</span>?
              </h2>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                O Passe Ativo é uma <strong className="text-primary">assinatura mensal</strong> que dá acesso a benefícios de bem-estar pensados para autônomos, freelancers e MEIs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Você entra, escolhe como quer cuidar de você e usa os benefícios no seu ritmo. 
                <span className="text-secondary font-medium"> Simples assim.</span>
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-sm">👤</div>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-sm">👩</div>
                  <div className="w-10 h-10 rounded-full bg-tertiary/20 border-2 border-background flex items-center justify-center text-sm">👨</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Feito por autônomos, <span className="font-medium text-foreground">para autônomos</span>
                </p>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Background shapes */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-full blur-2xl" />
                
                {/* Main visual */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-card shadow-soft border border-primary/10 flex items-center justify-center">
                  <RunnerIcon size="xl" className="w-32 h-32 sm:w-40 sm:h-40" />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-2 -right-4 px-4 py-2 bg-card rounded-full shadow-soft border border-border text-sm font-medium">
                  🏃 Movimento
                </div>
                <div className="absolute -bottom-2 -left-4 px-4 py-2 bg-card rounded-full shadow-soft border border-border text-sm font-medium">
                  🧘 Bem-estar
                </div>
                <div className="absolute top-1/2 -right-8 px-4 py-2 bg-card rounded-full shadow-soft border border-border text-sm font-medium">
                  💪 Saúde
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
