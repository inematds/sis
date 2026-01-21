export interface Course {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
}

export interface CourseCategory {
    id: string;
    name: string;
}

export interface CalendarEntry {
    id: string;
    course: string;
    duration: string;
    dates: string;
    period: string;
}

export const courseCategories: CourseCategory[] = [
    { id: "ai", name: "(AI) Inteligência Artificial" },
    { id: "data", name: "Data" },
    { id: "dev", name: "Desenvolvimento" },
    { id: "devops", name: "DevOps" },
    { id: "infra", name: "Infraestrutura" },
    { id: "linux", name: "Linux" },
    { id: "microsoft", name: "Microsoft – Cursos OFICIAIS" },
    { id: "security", name: "Segurança" },
];

export const courses: Course[] = [
    {
        id: "1",
        title: "INEMA Inteligência Artificial INEMA.CLUB",
        description: "Explore o mundo da Inteligência Artificial e aprenda a criar soluções inovadoras com as mais recentes tecnologias do mercado.",
        category: "ai",
        tags: ["TURMA ABERTA", "IA"],
    },
    {
        id: "2",
        title: "Formação Power BI",
        description: "Domine a ferramenta de Business Intelligence da Microsoft e transforme dados em insights poderosos para a tomada de decisões.",
        category: "data",
        tags: ["Formação"],
    },
    {
        id: "3",
        title: "Automatizando a Administração com PowerShell",
        description: "Aprenda a automatizar tarefas administrativas e gerenciar sistemas de forma eficiente com o PowerShell da Microsoft.",
        category: "microsoft",
        tags: ["TURMA ABERTA", "Microsoft"],
    },
    {
        id: "4",
        title: "SS2825 Gestão de Infraestrutura Segura com Windows Server 2025",
        description: "Curso oficial Microsoft para gestão e segurança de infraestruturas baseadas no novo Windows Server 2025.",
        category: "microsoft",
        tags: ["OFICIAL", "Segurança"],
    },
     {
        id: "5",
        title: "Formação em Projetos e Métodos Ágeis",
        description: "Capacite-se para gerenciar projetos com as metodologias ágeis mais utilizadas no mercado, como Scrum e Kanban.",
        category: "dev",
        tags: ["Formação"],
    },
    {
        id: "6",
        title: "Linux Advanced Administration",
        description: "Aprofunde seus conhecimentos em administração de sistemas Linux, cobrindo tópicos avançados de segurança, rede e performance.",
        category: "linux",
        tags: ["Linux", "Avançado"],
    }
];

export const calendar: CalendarEntry[] = [
    {
        id: "1",
        course: "INEMA Inteligência Artificial INEMA.CLUB",
        duration: "40 horas",
        dates: "03/02/2026 a 14/02/2026",
        period: "Noite",
    },
    {
        id: "2",
        course: "Formação Power BI",
        duration: "60 horas",
        dates: "23/02/2026 a 10/03/2026",
        period: "Sábados/Tarde",
    },
    {
        id: "3",
        course: "Automatizando a Administração com PowerShell",
        duration: "24 horas",
        dates: "05/03/2026 a 12/03/2026",
        period: "Tarde",
    },
    {
        id: "4",
        course: "SS2825 Gestão de Infraestrutura Segura com Windows Server 2025",
        duration: "40 horas",
        dates: "15/03/2026 a 26/03/2026",
        period: "Manhã",
    }
];
