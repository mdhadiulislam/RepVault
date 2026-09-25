'use client';
import { Toaster } from 'react-hot-toast';
export function ToastProvider() {
  return <Toaster position="top-right" toastOptions={{ style: { background: '#171717', color: '#f4f4ef', border: '1px solid #2d2d2d' }, success: { iconTheme: { primary: '#ccff00', secondary: '#090909' } } }} />;
}
