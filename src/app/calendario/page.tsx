"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { calendar, CalendarEntry } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, Filter } from 'lucide-react';

export default function CalendarPage() {
    const [filteredCalendar, setFilteredCalendar] = useState<CalendarEntry[]>(calendar);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-28">
                <div className="container mx-auto px-4">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight">Calendário de Cursos</h1>
                        <p className="text-muted-foreground mt-2">Veja as datas das próximas turmas e utilize os filtros para refinar sua busca.</p>
                    </header>

                    <Card className="mb-8 bg-card">
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium text-muted-foreground">Data de início</label>
                                    <Input id="date" type="date" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="shift" className="text-sm font-medium text-muted-foreground">Turno</label>
                                    <Select>
                                        <SelectTrigger id="shift">
                                            <SelectValue placeholder="Todos os turnos" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="noite">Noite</SelectItem>
                                            <SelectItem value="sabados">Sábados/Tarde</SelectItem>
                                            <SelectItem value="manha">Manhã</SelectItem>
                                            <SelectItem value="tarde">Tarde</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="type" className="text-sm font-medium text-muted-foreground">Tipo</label>
                                    <Select>
                                        <SelectTrigger id="type">
                                            <SelectValue placeholder="Presencial / Online" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="presencial">Presencial</SelectItem>
                                            <SelectItem value="online">Online</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full">
                                    <Filter className="mr-2 h-4 w-4" /> Filtrar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Curso</TableHead>
                                    <TableHead className="hidden md:table-cell">Duração</TableHead>
                                    <TableHead>Datas</TableHead>
                                    <TableHead className="hidden md:table-cell">Período</TableHead>
                                    <TableHead className="text-right"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredCalendar.map(entry => (
                                    <TableRow key={entry.id}>
                                        <TableCell className="font-medium">{entry.course}</TableCell>
                                        <TableCell className="hidden md:table-cell">{entry.duration}</TableCell>
                                        <TableCell>{entry.dates}</TableCell>
                                        <TableCell className="hidden md:table-cell">{entry.period}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">Ver mais</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
