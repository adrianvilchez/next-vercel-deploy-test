import { MainLayout } from "../../layouts/MainLayout"
import Link from "next/link"

export default function pricing() {
    
  return (
    <MainLayout>
      <h1>PricingPage</h1>
      <h1 className={'title'}>
        {/* el href actúa como router y redirige a la página 'about' */}
        Ir a <Link href='/'>Home</Link>
      </h1>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>src/pages/pricing/index.jsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
