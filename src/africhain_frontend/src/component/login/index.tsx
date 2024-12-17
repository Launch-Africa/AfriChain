import Header from "../../layouts/header/Header"
import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import Footer from "../../layouts/footer/Footer"
import DocumentArea from "../common/DocumentArea"

const Login = () => {
   return (
      <main>
         <Header />
         <Breadcrumb title="Login" />
         <LogingArea style={false} />
         <DocumentArea />
         <Footer />
      </main>
   )
}

export default Login
