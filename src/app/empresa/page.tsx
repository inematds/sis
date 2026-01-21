import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
    { value: "+3.830", label: "Turmas Realizadas" },
    { value: "+54.000", label: "Alunos Sisnema" },
    { value: "+150", label: "Cursos Diferentes" },
];

export default function CompanyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-28">
                <div className="container mx-auto px-4 max-w-4xl">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight">Sisnema: o saber que liberta</h1>
                        <p className="text-muted-foreground mt-2">Fundada em 1990, nossa história é marcada por inovação e pioneirismo.</p>
                    </header>
                    <div className="prose prose-invert prose-lg mx-auto mb-12">
                        <p>
                            Fundada em 1990, a Sisnema nasceu em um contexto de grandes transformações tecnológicas. Desde o início, nosso foco esteve em redes e conectividade, sendo pioneiros na implementação de soluções Novell na região. Ao longo de mais de três décadas, evoluímos com o mercado, sempre na vanguarda da educação em TI.
                        </p>
                        <p>
                            Nossa missão é capacitar profissionais e empresas a atingirem seu pleno potencial através do conhecimento. Acreditamos que a tecnologia é uma ferramenta de libertação e progresso, e nosso compromisso é fornecer o caminho para que nossos alunos e parceiros dominem essa ferramenta.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {metrics.map((metric, index) => (
                            <Card key={index} className="bg-card">
                                <CardContent className="p-8">
                                    <p className="text-4xl font-bold text-primary">{metric.value}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

// Simple prose styling for readability
const proseStyles = `
<style>
.prose { color: hsl(var(--muted-foreground)); }
.prose p { line-height: 1.7; }
</style>
`;

CompanyPage.prototype.toString = function() {
    const original = this.constructor.prototype.toString.call(this);
    return original + proseStyles;
}
