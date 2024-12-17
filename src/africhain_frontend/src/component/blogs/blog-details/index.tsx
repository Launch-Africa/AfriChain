import Breadcrumb from "../../common/Breadcrumb"
import BlogDetailsArea from "./BlogDetailsArea"
import DocumentArea from "../../common/DocumentArea"
import Footer from "../../../layouts/footer/Footer"
import Header from "../../../layouts/header/Header"

const BlogDetails = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Blog Details" />
      <BlogDetailsArea/>
      <DocumentArea />
      <Footer />
    </main>
  )
}

export default BlogDetails
