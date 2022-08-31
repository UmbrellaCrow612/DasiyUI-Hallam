import { Drawer } from '../components/Drawer'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <Drawer>
      <Header />
      <main>{children}</main>
      <Footer />
    </Drawer>
  )
}
