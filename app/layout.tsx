import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vend & Bien - Agence Immobilière Reims & Epernay',
  description: 'Nous vendons votre bien en 30 jours au prix convenu. Sinon jusqu\'à 100% des honoraires offerts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/frr5tat.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
