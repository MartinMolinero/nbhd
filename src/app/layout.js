import { Providers } from "@redux/provider";
import '../../styles/globals.css';
import { Inter } from 'next/font/google';

import Navbar from 'components/Shared/Navbar';
import { ProtectedRoute } from "@utils/ProtectedRoute";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar></Navbar>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </Providers>
      </body>
    </html>
  )
}
