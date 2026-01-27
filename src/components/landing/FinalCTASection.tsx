import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            <span>🚨 Vagas limitadas para membros fundadores</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Estamos abrindo a primeira turma do Passe Ativo Pass.
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10">
            Quem entra agora ajuda a construir o plano e garante acesso prioritário aos próximos benefícios.
          </p>
          
          <Button variant="cta" size="xl" className="bg-primary text-primary-foreground">
            <span className="mr-2">🟢</span>
            Quero fazer parte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
