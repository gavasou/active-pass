const Footer = () => {
  return (
    <footer className="py-8 bg-foreground border-t border-primary-foreground/10">
      <div className="section-container">
        <div className="text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Passe Ativo Pass. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
