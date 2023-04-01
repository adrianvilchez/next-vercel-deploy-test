import { Inter } from 'next/font/google'
import Link from 'next/link';
import { MainLayout } from '../../layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>ContactPage</h1>
      <h1 className={'title'}>
        {/* el href actúa como router y redirige a la página 'about' */}
        Ir a <Link href='/about'>About</Link>
      </h1>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>src/pages/contact/index.jsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
