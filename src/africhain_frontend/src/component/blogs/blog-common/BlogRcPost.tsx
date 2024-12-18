import { Link } from "react-router-dom";

const BlogRcPost = () => {
   return (
      <div className="blog-widget">
         <h4 className="widget-title">Recent Posts</h4>
         <div className="rc-post-wrap">
            <div className="rc-post-item">
               <div className="thumb">
                  <Link to="/blog-details">
                     <img 
                        src="/assets/img/blog/rc_post01.jpg" 
                        alt="img"
                        width={100}
                        height={80}
                     />
                  </Link>
               </div>
               <div className="content">
                  <span className="date">October 05, 2024</span>
                  <h5 className="title">
                     <Link to="/blog-details">
                        The African blockchain revolution is here
                     </Link>
                  </h5>
               </div>
            </div>
            <div className="rc-post-item">
               <div className="thumb">
                  <Link to="/blog-details">
                     <img 
                        src="/assets/img/blog/rc_post02.jpg" 
                        alt="img"
                        width={100}
                        height={80}
                     />
                  </Link>
               </div>
               <div className="content">
                  <span className="date">October 07, 2024</span>
                  <h5 className="title">
                     <Link to="/blog-details">
                        Web3 education initiatives in Africa
                     </Link>
                  </h5>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogRcPost
