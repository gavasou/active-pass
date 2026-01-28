import { ExternalLink, Gift, MapPin, RefreshCw, Brain, Dumbbell, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logoDark from "@/assets/logo-dark.png";

interface Benefit {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
  link?: string;
  coupon?: string;
  isComingSoon?: boolean;
}

const digitalBenefits: Benefit[] = [
  {
    icon: Brain,
    category: "Meditação & Bem-estar",
    title: "Parceiro em Negociação",
    description: "Acesso a sessões guiadas de meditação e mindfulness.",
    isComingSoon: true,
  },
  {
    icon: Dumbbell,
    category: "Treino Online",
    title: "Parceiro em Negociação",
    description: "Treinos funcionais e de força para fazer em casa.",
    isComingSoon: true,
  },
  {
    icon: Heart,
    category: "Saúde Mental",
    title: "Atendimento Psicológico",
    description: "Sessões de terapia online com desconto exclusivo.",
    isComingSoon: true,
  },
];

const physicalBenefits: Benefit[] = [
  {
    icon: MapPin,
    category: "Academia Parceira",
    title: "Em breve na sua cidade",
    description: "Academias e estúdios parceiros com condições especiais.",
    isComingSoon: true,
  },
];

const BenefitCard = ({ benefit }: { benefit: Benefit }) => {
  const Icon = benefit.icon;
  
  return (
    <Card className={`card-hover ${benefit.isComingSoon ? 'opacity-75' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {benefit.isComingSoon && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary">
              Em breve
            </span>
          )}
        </div>
        <div className="mt-3">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {benefit.category}
          </p>
          <CardTitle className="text-lg mt-1">{benefit.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {benefit.description}
        </p>
        
        {!benefit.isComingSoon && (
          <div className="space-y-3">
            {benefit.coupon && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                <Gift className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Cupom: <code className="bg-background px-2 py-0.5 rounded">{benefit.coupon}</code></span>
              </div>
            )}
            
            {benefit.link && (
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={benefit.link} target="_blank" rel="noopener noreferrer">
                  Acessar
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
          </div>
        )}
        
        {benefit.isComingSoon && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span>Estamos fechando parceria</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const BenefitsHub = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logoDark} alt="Passe Ativo" className="h-8" />
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            Membro Fundador
          </span>
        </div>
      </header>
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Seus benefícios ativos
          </h1>
          <p className="text-muted-foreground">
            Explore e aproveite todos os benefícios do seu Passe Ativo
          </p>
        </div>
      </section>
      
      {/* Digital Benefits */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-xl">💻</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Benefícios Digitais</h2>
              <p className="text-sm text-muted-foreground">Acesse de qualquer lugar</p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {digitalBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Physical Benefits */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <span className="text-xl">📍</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Benefícios Presenciais</h2>
              <p className="text-sm text-muted-foreground">Parceiros na sua região</p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {physicalBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Updates Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="py-8 text-center">
              <RefreshCw className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                Novos benefícios chegando
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Estamos negociando com novos parceiros. Novos benefícios serão adicionados 
                conforme a comunidade cresce. Fique de olho!
              </p>
              <div className="flex justify-center gap-1 mt-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.2s" }} />
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border py-6 px-4">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>Dúvidas? Entre em contato pelo suporte.</p>
          <p className="mt-2">© 2024 Passe Ativo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
};

export default BenefitsHub;
