import Appbar from "../components/Appbar"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Stories from "../components/Stories"

const Dashboard = () => {
  return (
    <div className="p-6 w-[1440px] font-manrope">
      <Appbar/>
      <Stories/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Dashboard
