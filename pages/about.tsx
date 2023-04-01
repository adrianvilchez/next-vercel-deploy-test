import { Inter } from 'next/font/google'
import Link from 'next/link';
import { MainLayout } from '../layouts/MainLayout';
import { DarkLayout } from '../layouts/DarkLayout';
import { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1>HomePage</h1>
        <h1 className={'title'}>
          {/* el href actúa como router y redirige a la página 'about' */}
          Ir a <Link href='/'>Home</Link>
        </h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>src/pages/about.jsx</code>
          </p>
        </div>
      </DarkLayout>
    </MainLayout>
  )
}

type childNode = {
  page: ReactNode
}

AboutPage.getLayaout = function getLayout( page: JSX.Element ) {
  
  return (
  <MainLayout>
    <DarkLayout>
      { page }
    </DarkLayout>
  </MainLayout>
  )
}
