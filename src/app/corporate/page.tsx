import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Handshake, Wrench, FileText, BarChart, Search, Layers, Briefcase, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    { icon: <Search />, name: "Análise Crítica do Ambiente" },
    { icon: <Handshake />, name: "Consultoria" },
    { icon: <Wrench />, name: "Implementações e Projetos" },
    { icon: <BarChart />, name: "Teste de Vulnerabilidade" },
    { icon: <FileText />, name: "Documentação" },
    { icon: <Layers />, name: "Suporte e Monitoramento" },
];

const partners = ["Microsoft", "Sophos", "Bitdefender", "Fortinet", "Khomp", "Veeam", "Dell", "AWS"];

export default function CorporatePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-28">
                <div className="container mx-auto px-4 max-w-5xl">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight">Soluções Corporate</h1>
                        <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                            Consultoria, projetos, licenciamento e treinamentos in-company para impulsionar a estratégia tecnológica da sua empresa.
                        </p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <Card className="bg-card">
                            <CardHeader>
                                <Briefcase className="w-8 h-8 text-primary mb-4" />
                                <CardTitle>Serviços e Projetos</CardTitle>
                                <CardDescription>Oferecemos consultoria, suporte remoto, on-site e de emergência, através de contratos, projetos ou chamados avulsos.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {services.map(service => (
                                        <li key={service.name} className="flex items-center gap-3">
                                            <div className="bg-background rounded-full p-1.5">{service.icon && React.cloneElement(service.icon, { className: 'w-4 h-4 text-accent' })}</div>
                                            <span className="text-foreground">{service.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-card">
                             <CardHeader>
                                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                                <CardTitle>Licenciamento de Software</CardTitle>
                                <CardDescription>Somos uma revenda certificada com consultoria qualificada para garantir conformidade e o melhor custo-benefício.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold mb-4">Principais parceiros:</p>
                                <div className="flex flex-wrap gap-3">
                                    {partners.map(partner => (
                                        <div key={partner} className="py-2 px-4 rounded-lg bg-background border border-border text-sm text-muted-foreground">
                                            {partner}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-muted-foreground text-sm">Incluindo assinaturas cloud como Microsoft 365 e Azure.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-primary/80 to-accent/80 text-center p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Leve a Sisnema para sua empresa</h2>
                        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                            Entre em contato com nossa equipe corporate para discutir as necessidades específicas do seu negócio e descobrir como podemos ajudar.
                        </p>
                        <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-white/90">
                           <a href="mailto:corporate@sisnema.com.br">corporate@sisnema.com.br</a>
                        </Button>
                    </Card>

                </div>
            </main>
            <Footer />
        </div>
    );
}
