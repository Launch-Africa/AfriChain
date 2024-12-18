"use client"
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";

const LogingArea = ({ style }: any) => {

   return (
      <section className="eg-login__area pt-140 pb-140 p-relative z-index-1 fix">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="eg-login__wrapper">
                     {style ? (
                        <div className="eg-login__top text-center mb-30">
                           <h3 className="eg-login__title">Sign Up.</h3>
                           <p>Already have an account? <span><Link to="/login">Sign In</Link></span></p>
                        </div>) : (
                        <div className="eg-login__top text-center mb-30">
                           <h3 className="eg-login__title">Login.</h3>
                           <p>Don’t have an account? <span><Link to="/register">Create a free account</Link></span></p>
                        </div>)}
                     <div className="eg-login__option">
                        {style ? <RegisterForm /> : <LoginForm />}
                        <div className="eg-login__mail text-center mt-20 mb-20">
                           <p>or</p>
                        </div>
                        <div className="eg-login__social mb-10 ">
                           <div className="eg-login__option-item">
                              <Link to="#"><img src="/assets/img/icons/internet-computer-icp-logo.svg" alt="" width={26} height={26} style={{objectFit: 'contain'}} /> Sign in with Internet Identity </Link>
                           </div>
                           <div className="eg-login__option-item">
                              <Link to="#"><img src="/assets/img/icons/google.svg" alt=""  /> Sign in with google </Link>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default LogingArea;
