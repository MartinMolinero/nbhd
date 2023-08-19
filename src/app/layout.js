import { Providers } from "@redux/provider";
import { AuthenticationProvider, ProtectRoute } from '@contexts/auth';
import '../../styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from 'components/Shared/Navbar';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar></Navbar>
          <AuthenticationProvider>
            <ProtectRoute>
              {children}
            </ProtectRoute>
          </AuthenticationProvider>
        </Providers>
      </body>
    </html>
  )
}
