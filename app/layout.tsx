import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sekitar',
  description: 'A modern and responsive real estate landing page for finding boarding houses (kost), built with React and Tailwind CSS, inspired by a professional UI design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
