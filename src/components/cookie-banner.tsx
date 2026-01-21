'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn(
        "fixed bottom-4 right-4 z-[100] w-full max-w-md animate-in slide-in-from-bottom-8",
      )}>
      <Card className="bg-card/90 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="grid gap-4">
            <h4 className="font-semibold text-card-foreground">Sisnema informa: usamos cookies</h4>
            <p className="text-sm text-muted-foreground">
              Usamos cookies para aprimorar sua experiência. Ao continuar, você concorda com nossa{' '}
              <Link href="/politica-de-privacidade" className="underline hover:text-primary">
                Política de Privacidade
              </Link>
              .
            </p>
            <Button onClick={handleAccept} className="w-full">
              Continuar e fechar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
