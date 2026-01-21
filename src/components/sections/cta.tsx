import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="py-20 md:py-32 px-4 bg-card">
            <div className="container mx-auto text-center relative overflow-hidden rounded-2xl p-12">
                 <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                 <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-primary/10 blur-3xl"></div>
                 <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-accent/10 blur-3xl"></div>
                
                <div className="relative z-10">
                    <h2 className="font-headline text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                        Pronto para evoluir tecnicamente?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Conheça nossos cursos, formações ou soluções corporativas e dê o próximo passo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-primary/40 transition-shadow">
                            <Link href="/contato">Falar com a SISNEMA</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="glassmorphism hover:bg-white/20 hover:text-foreground transition-colors">
                            <Link href="/calendario">Ver Calendário de Cursos</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
