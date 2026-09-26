import './globals.css';
import { AppProvider } from './components/AppProvider';
import { ToastProvider } from './components/ToastProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'FitLog — Workout Library',
  description: 'A dark, no-nonsense workout library and daily plan tracker.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastProvider />
        </AppProvider>
      </body>
    </html>
  );
}