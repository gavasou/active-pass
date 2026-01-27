import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Quanto custa?
          </h2>
          
          <div className="gradient-card rounded-2xl p-8 sm:p-12 shadow-card border border-primary/20">
            {/* Price */}
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="text-3xl">💳</span>
              <span className="text-5xl sm:text-6xl font-extrabold text-primary">R$ 39</span>
              <span className="text-xl text-muted-foreground font-medium">/ mês</span>
            </div>
            
            {/* Value proposition */}
            <div className="space-y-2 mb-8">
              <p className="text-lg text-foreground">
                Menos que uma mensalidade de academia.
              </p>
              <p className="text-lg text-muted-foreground">
                Mais liberdade que qualquer plano corporativo.
              </p>
            </div>
            
            {/* CTA */}
            <Button variant="cta" size="xl">
              <span className="mr-2">🟢</span>
              Entrar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
