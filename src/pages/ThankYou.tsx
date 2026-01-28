import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoDark from "@/assets/logo-dark.png";

const ThankYou = () => {
  return (
    <main className="min-h-screen gradient-hero flex items-center justify-center px-4">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-lg w-full text-center relative z-10">
        {/* Logo */}
        <img 
          src={logoDark} 
          alt="Passe Ativo" 
          className="h-12 mx-auto mb-8"
        />
        
        {/* Success Icon */}
        <div className="relative inline-flex mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-secondary animate-pulse" />
        </div>
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          🎉 Bem-vindo(a) ao{" "}
          <span className="text-gradient-primary">Passe Ativo!</span>
        </h1>
        
        {/* Confirmation Card */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-8">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-3">
            <CheckCircle className="w-5 h-5" />
            <span>Assinatura confirmada</span>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Você faz parte da <strong className="text-foreground">fase inicial</strong> do Passe Ativo.
            <br />
            Seus benefícios já estão disponíveis!
          </p>
        </div>
        
        {/* CTA Button */}
        <Button 
          asChild
          variant="cta" 
          size="xl" 
          className="w-full sm:w-auto group"
        >
          <Link to="/beneficios">
            Acesse seus benefícios agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        
        {/* Footer note */}
        <p className="mt-6 text-sm text-muted-foreground">
          Qualquer dúvida? Entre em contato pelo nosso suporte.
        </p>
      </div>
    </main>
  );
};

export default ThankYou;
