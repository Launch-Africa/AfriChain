import Footer from "../../layouts/footer/Footer"
import Breadcrumb from "../common/Breadcrumb"
import DocumentArea from "../common/DocumentArea"
import ContactArea from "./ContactArea"
import Header from "../../layouts/header/Header"

const Contact = () => {
   return (
      <main>
         <Header />
         <Breadcrumb title="Contact" />
         <ContactArea />
         <DocumentArea />
         <Footer />
      </main>
   )
}

export default Contact
