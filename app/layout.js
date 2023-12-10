import { Inter } from 'next/font/google'
import './globals.css'
import MainWrapper from '../components/ui/MainWrapper'
import { CssBaseline, ThemeProvider } from '@mui/material'
import muiTheme from '../style/theme'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Senior Formentin',
  description: 'Tech Test by Formentin Luca',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider theme={muiTheme}>
          {children}
          <CssBaseline />
          <Toaster toastOptions={{ duration: 3000 }} />
        </ThemeProvider>
      </body>
    </html>
  )
}
