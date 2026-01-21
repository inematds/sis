import { CheckCircle } from 'lucide-react';

const differentiators = [
  "Instrutores especialistas",
  "Conteúdo sempre atualizado",
  "Metodologia prática",
  "Reconhecimento no mercado corporativo"
];

export default function DifferentiatorsSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-8">
            Conhecimento que gera resultado.
          </h2>
          <ul className="space-y-4">
            {differentiators.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-card"></div>
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial from-primary/10 via-transparent to-transparent animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-bold text-foreground/20">SISNEMA</p>
            </div>
        </div>
      </div>
    </section>
  );
}
