import { Providers } from "@redux/provider";
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
          <ProtectRoute>
            {children}
          </ProtectRoute>
        </Providers>
      </body>
    </html>
  )
}
