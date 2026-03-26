import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Vend & Bien',
  description: 'Déclaration de confidentialité UE du site Vend & Bien.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
