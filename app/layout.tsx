import '../styles/globals.css';
import Footer from './Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" data-theme="business">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
