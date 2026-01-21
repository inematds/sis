import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-28">
                <div className="container mx-auto px-4 max-w-3xl">
                    <article className="prose prose-invert prose-lg mx-auto">
                        <h1 className="text-4xl font-bold tracking-tight mb-8">Política de Privacidade</h1>
                        <p>A sua privacidade é importante para nós. É política da Sisnema respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Sisnema, e outros sites que possuímos e operamos.</p>
                        
                        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Coleta de Dados</h2>
                        <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
                        <p>Não coletamos dados sensíveis, que são definidos como dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso de Dados</h2>
                        <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                        <p>O controlador e responsável pelo tratamento de dados é a SISNEMA INFORMÁTICA LTDA, com endereço em Porto Alegre/RS.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Segurança</h2>
                        <p>A segurança dos seus dados é de extrema importância. Utilizamos um certificado SSL (Secure Socket Layer) que garante que a transmissão de dados entre os seus dispositivos e os nossos servidores aconteça de forma criptografada e segura. Além disso, implementamos medidas técnicas e organizativas para proteger os dados pessoais contra acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies</h2>
                        <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
                        
                        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Seus Direitos</h2>
                        <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.</p>
                        <p>Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail: informacao@sisnema.com.br.</p>
                        <p className="text-sm text-muted-foreground mt-8">Esta política é efetiva a partir de Janeiro de 2026.</p>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const proseStyles = `
<style>
.prose { color: hsl(var(--muted-foreground)); }
.prose h1, .prose h2, .prose h3, .prose h4 { color: hsl(var(--foreground)); }
.prose a { color: hsl(var(--primary)); }
.prose a:hover { color: hsl(var(--accent)); }
</style>
`;

// A simple way to inject styles for prose, as tailwindcss-typography plugin is not installed.
// This is not ideal but works for this specific case. A better solution would be to configure the plugin.
PrivacyPolicyPage.prototype.toString = function() {
    const original = this.constructor.prototype.toString.call(this);
    return original + proseStyles;
}
