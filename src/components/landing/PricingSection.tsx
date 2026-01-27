import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="section-padding bg-accent/20 relative overflow-hidden">
      {/* Wave pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0 50 Q300 20 600 50 T1200 50 L1200 0 L0 0 Z" className="fill-primary/10" />
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Quanto custa?
          </h2>
          
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-card rounded-3xl p-8 sm:p-12 shadow-soft border border-primary/10">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground px-4 py-1.5 text-sm font-semibold shadow-lg">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Membro Fundador
                </Badge>
              </div>
              
              {/* Price */}
              <div className="flex items-baseline justify-center gap-2 mb-6 mt-4">
                <span className="text-2xl font-semibold text-muted-foreground">R$</span>
                <span className="text-6xl sm:text-7xl font-extrabold text-gradient-primary">39</span>
                <span className="text-xl text-muted-foreground font-medium">/ mês</span>
              </div>
              
              {/* Value proposition */}
              <div className="space-y-3 mb-8">
                <p className="text-lg text-foreground font-medium">
                  Menos que uma mensalidade de academia.
                </p>
                <p className="text-muted-foreground">
                  Mais liberdade que qualquer plano corporativo.
                </p>
              </div>
              
              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Sem pegadinha</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              
              {/* CTA */}
              <Button variant="cta" size="xl" className="w-full sm:w-auto shadow-cta group">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground group-hover:scale-110 transition-transform" />
                Entrar agora
              </Button>
              
              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="text-primary">✓</span> Cartão de crédito
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-primary">✓</span> PIX
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-primary">✓</span> Pagamento seguro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
