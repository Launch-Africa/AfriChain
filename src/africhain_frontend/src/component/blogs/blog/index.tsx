import Breadcrumb from "../../common/Breadcrumb";
import BlogArea from "./BlogArea";
import DocumentArea from "../../common/DocumentArea";
import Footer from "../../../layouts/footer/Footer";
import Header from "../../../layouts/header/Header";

const Blog = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Our Blog" />
      <BlogArea/>
      <DocumentArea />
      <Footer />
    </main>
  )
}

export default Blog;
