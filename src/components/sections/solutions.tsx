import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, ShieldCheck } from "lucide-react";

const solutions = [
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        title: "Educação Profissional",
        description: "Treinamentos presenciais e online, cursos oficiais, formações completas e capacitação contínua em TI."
    },
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        title: "Corporate & Projetos",
        description: "Soluções corporativas, projetos sob demanda, consultoria técnica e treinamentos in-company."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Licenciamento & Software",
        description: "Licenciamento oficial, consultoria em compliance e parcerias com os principais fabricantes do mercado."
    }
]

export default function SolutionsSection() {
    return (
        <section className="py-20 md:py-32 px-4 bg-card">
            <div className="container mx-auto text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-12">
                    Soluções em Educação e Tecnologia.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <Card key={index} className="bg-background border-border/50 text-center hover:border-primary/50 transition-colors duration-300">
                            <CardHeader>
                                <div className="mx-auto bg-card p-4 rounded-full w-fit mb-4">
                                    {solution.icon}
                                </div>
                                <CardTitle className="text-xl font-semibold">{solution.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{solution.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
