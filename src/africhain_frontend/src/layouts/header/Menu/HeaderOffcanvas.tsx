import Image from "next/image";
import Link from "next/link";

import logo_1 from "@/assets/img/logo/logo.png";

const HeaderOffcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`${offCanvas ? "offcanvas-menu-visible" : ""}`}>
            <div className={`extra-info ${offCanvas ? "active" : ""}`}>
               <div className="close-icon menu-close">
                  <button onClick={() => setOffCanvas(false)}><i className="far fa-window-close"></i></button>
               </div>
               <div className="logo-side mb-30">
                  <Link href="/"><Image src={logo_1} alt="Logo" /></Link>
               </div>
               <div className="side-info mb-30">
                  <div className="contact-list mb-30">
                     <h4>Office Address</h4>
                     <p>123 Harare Street <br /> Harare</p>
                  </div>
                  <div className="contact-list mb-30">
                     <h4>Phone Number</h4>
                     <p>+263 7876 9865</p>
                     <p>+(263) 8765 86543</p>
                  </div>
                  <div className="contact-list mb-30">
                     <h4>Email Address</h4>
                     <p>info@africhain.com</p>
                     <p>africain@africhain.com</p>
                  </div>
               </div>
               <div className="social-icon-right mt-30">
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-google-plus-g"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
               </div>
            </div>
            <div onClick={() => setOffCanvas(false)} className={`offcanvas-overly ${offCanvas ? "active" : ""}`}></div>
         </div>
      </>
   )
}

export default HeaderOffcanvas
