import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="py-10 gradient-dark border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logoWhite} 
            alt="Passe Ativo" 
            className="h-8 opacity-70"
          />
          
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Termos</a>
            <span>•</span>
            <a href="#" className="hover:text-white/70 transition-colors">Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-white/70 transition-colors">Contato</a>
          </div>
          
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Passe Ativo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
