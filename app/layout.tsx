import './globals.css'
import { Inter } from 'next/font/google'
import { RestaurantProvider } from '@/context/RestaurantProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coffee - Restaurant',
  description: 'Restaurant, Coffee, Food, Cakes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='md:flex'>
          <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
            <h1>Siderbar here</h1>
          </aside>
          <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
            <RestaurantProvider>
              {children}
            </RestaurantProvider>
          </main>
        </div>
        
      </body>
    </html>
  )
}
