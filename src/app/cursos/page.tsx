import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses, courseCategories } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CoursesPage() {
    const courseImage = PlaceHolderImages.find(p => p.id === "course-placeholder") || { imageUrl: "https://picsum.photos/seed/10/600/400", imageHint: "technology code" };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-28">
                <div className="container mx-auto px-4">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight">Cursos</h1>
                        <p className="text-muted-foreground mt-2">Filtre por área para encontrar o treinamento ideal para você.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <aside className="md:col-span-1">
                            <Card className="sticky top-28 bg-card">
                                <CardHeader>
                                    <CardTitle>Áreas</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {courseCategories.map(category => (
                                            <li key={category.id}>
                                                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                                                    {category.name}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </aside>

                        <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {courses.map(course => (
                                <Card key={course.id} className="flex flex-col overflow-hidden bg-card hover:border-primary/50 transition-all">
                                    <CardHeader className="p-0">
                                        <Image 
                                            src={courseImage.imageUrl} 
                                            alt={course.title}
                                            width={600}
                                            height={400}
                                            data-ai-hint={courseImage.imageHint}
                                            className="w-full h-48 object-cover"
                                        />
                                    </CardHeader>
                                    <CardContent className="p-6 flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            {course.tags.map(tag => (
                                                <Badge key={tag} variant={tag === "TURMA ABERTA" ? "default" : "secondary"} className={tag === "TURMA ABERTA" ? 'bg-primary' : 'bg-muted'}>
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                                        <CardDescription>{course.description.substring(0, 100)}...</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full">
                                            <Link href="#">Ver detalhes</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
