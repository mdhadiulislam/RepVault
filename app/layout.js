import './globals.css';
import { AppProvider } from './components/AppProvider';
import { ToastProvider } from './components/ToastProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'FitLog — Workout Library',
    template: '%s | FitLog',
  },
  description:
    'Explore workouts, build your daily plan, track progress, and stay consistent with FitLog.',
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