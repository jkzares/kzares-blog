import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return <div className="pt-[4.75rem] lg:pt-[15.25rem] overflow-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
}