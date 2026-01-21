import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
    { value: "+3.800", label: "turmas realizadas" },
    { value: "+54.000", label: "alunos formados" },
    { value: "+150", label: "cursos diferentes" },
    { value: "Desde 1990", label: "no mercado" },
];

export default function AboutSection() {
    return (
        <section className="py-20 md:py-32 px-4 bg-background">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                        <h2 className="font-headline text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                            Mais de 30 anos formando profissionais de tecnologia.
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            A SISNEMA atua desde 1990 capacitando profissionais e empresas em tecnologia da informação, com foco em conhecimento prático, certificações oficiais e soluções corporativas sob medida.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:col-span-1">
                        {metrics.map((metric, index) => (
                            <Card key={index} className="bg-card text-center">
                                <CardContent className="p-6">
                                    <p className="text-3xl font-bold text-primary">{metric.value}</p>
                                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
