import { Button } from "@/components/ui/button";
import WaveDecoration from "./WaveDecoration";
import RunnerIcon from "./RunnerIcon";
import logoDark from "@/assets/logo-dark.png";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-[5%] w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-40 left-[15%] w-40 h-40 bg-tertiary/5 rounded-full blur-2xl" />
      
      {/* Floating runner icons */}
      <div className="absolute top-32 right-[20%] opacity-20">
        <RunnerIcon size="lg" />
      </div>
      <div className="absolute bottom-40 left-[8%] opacity-15 rotate-12">
        <RunnerIcon size="md" />
      </div>
      
      <WaveDecoration position="bottom" className="opacity-60" />
      
      <div className="section-container relative z-10 pt-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-10 animate-fade-up">
            <img 
              src={logoDark} 
              alt="Passe Ativo" 
              className="h-16 sm:h-20 md:h-24 mx-auto"
            />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>Fase inicial • Vagas limitadas</span>
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.2s" }}>
            O plano de bem-estar feito para{" "}
            <span className="text-gradient-primary">quem trabalha por conta própria</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Acesso a benefícios de saúde, movimento e autocuidado — sem empresa, sem CLT, sem burocracia.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="cta" size="xl" className="group shadow-cta">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground group-hover:scale-110 transition-transform" />
              Quero entrar na fase inicial
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Cancele quando quiser
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Sem fidelidade
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Sem letras miúdas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
