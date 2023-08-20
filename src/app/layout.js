import { Providers } from "@redux/provider";

import { Inter } from 'next/font/google';

import '../../styles/globals.css';

import Navbar from 'components/Shared/Navbar';
import { ProtectedRoute } from "@utils/ProtectedRoute";
import { store } from "@redux/store";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers store={store}>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  )
}
