const SolutionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            O que é o Passe Ativo Pass?
          </h2>
          
          <div className="gradient-card rounded-2xl p-8 sm:p-12 shadow-card">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
              O Passe Ativo Pass é uma <strong className="text-primary">assinatura mensal</strong> que dá acesso a benefícios de bem-estar pensados para autônomos, freelancers e MEIs.
            </p>
            <p className="text-lg text-muted-foreground">
              Você entra, escolhe como quer cuidar de você e usa os benefícios no seu ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
