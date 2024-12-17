import Header from "../../layouts/header/Header"
import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import DocumentArea from "../common/DocumentArea"
import Footer from "../../layouts/footer/Footer"

const Register = () => {
   return (
      <main>
         <Header />
         <Breadcrumb title="Register" />
         <LogingArea style={true} />
         <DocumentArea />
         <Footer />
      </main>
   )
}

export default Register
