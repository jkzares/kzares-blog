import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}