import { Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black w-full py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <h3 className="text-xl font-bold text-foreground mb-4">SISNEMA</h3>
        <p className="mb-4">
          <a href="mailto:informacao@sisnema.com.br" className="hover:text-primary transition-colors">
            informacao@sisnema.com.br
          </a>
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram size={20} />
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} SISNEMA. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
            <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
        </p>
      </div>
    </footer>
  );
}
