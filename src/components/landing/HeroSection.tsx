import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Fase inicial • Vagas limitadas</span>
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
            Passe Ativo Pass
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            O plano de bem-estar feito para quem trabalha por conta própria.
          </p>
          
          {/* Supporting text */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Acesso a benefícios de saúde, movimento e autocuidado — sem empresa, sem CLT, sem burocracia.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="cta" size="xl" className="group">
              <span className="mr-2">🟢</span>
              Quero entrar na fase inicial
            </Button>
          </div>
          
          {/* Trust indicators */}
          <p className="mt-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Cancele quando quiser • Sem fidelidade • Sem letras miúdas
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
