import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-6xl font-semibold tracking-tighter text-foreground mb-6 animate-scroll-reveal" style={{ animationDelay: '0.2s' }}>
          Educação e Tecnologia para Profissionais que Constroem o Futuro.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-scroll-reveal" style={{ animationDelay: '0.4s' }}>
          Capacitação técnica, treinamentos oficiais e soluções corporativas em TI desde 1990.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-scroll-reveal" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-primary/40 transition-shadow">
            <Link href="/cursos">Ver Cursos e Calendário</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="glassmorphism hover:bg-white/20 hover:text-foreground transition-colors">
            <Link href="/corporate">Soluções Corporate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
