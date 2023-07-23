import './globals.css'
// import { Inter } from 'next/font/google'
// import { AuthUserProvider } from '../../context/AuthUserContext'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: { title: string; description: string } = {
  title: 'CareFinder',
  description: 'Find the nearest hospital to you and make an appointment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <>{children}</>
}
