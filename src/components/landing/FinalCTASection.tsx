import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import RunnerIcon from "./RunnerIcon";

const FinalCTASection = () => {
  return (
    <section className="section-padding gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Animated waves */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute bottom-0 left-0 w-[200%] h-32 animate-wave" viewBox="0 0 2400 100" preserveAspectRatio="none">
          <path d="M0 50 Q300 20 600 50 T1200 50 T1800 50 T2400 50" fill="none" className="stroke-primary" strokeWidth="2" />
          <path d="M0 60 Q300 80 600 60 T1200 60 T1800 60 T2400 60" fill="none" className="stroke-secondary" strokeWidth="2" />
        </svg>
      </div>
      
      {/* Floating runner */}
      <div className="absolute top-20 right-[15%] opacity-20">
        <RunnerIcon size="lg" animate={false} />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <img 
            src={logoWhite} 
            alt="Passe Ativo" 
            className="h-12 sm:h-14 mx-auto mb-8 opacity-90"
          />
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            <span>🚨 Vagas limitadas para membros fundadores</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
            Estamos abrindo a{" "}
            <span className="text-secondary">primeira turma</span>{" "}
            do Passe Ativo.
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Quem entra agora ajuda a construir o plano e garante acesso prioritário aos próximos benefícios.
          </p>
          
          <Button 
            variant="cta" 
            size="xl" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow-secondary group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-foreground group-hover:scale-110 transition-transform" />
            Quero fazer parte
          </Button>
          
          <p className="mt-8 text-sm text-primary-foreground/60">
            Junte-se a centenas de autônomos que já estão cuidando de si mesmos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
