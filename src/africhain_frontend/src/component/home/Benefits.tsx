import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import project from "@/assets/img/update/invest/project.png"
import user from "@/assets/img/update/invest/user.png"
import investor from "@/assets/img/update/invest/investor.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   description: string;
}

const invest_data: DataType[] = [
   {
      id: 1,
      icon: project,
      title: "For Projects",
      description: "Launch quests, build engagement, and access funding",
   },
   {
      id: 2,
      icon: user,
      title: "For Users",
      description: "Complete tasks, earn rewards, and support impactful projects",
   },
   {
      id: 3,
      icon: investor,
      title: "For Investors",
      description: "Discover high-potential projects and untapped markets in Africa",
   },
];

const Benefits = () => {
   return (
      <div className="pt-130 overflow-hidden">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-50">
                     <h2 className="title style2">How Africhain benefits you</h2>
                  </div>
               </div>
            </div>
            <div className="row gy-30">
               {invest_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="invest-card">
                        <div className="invest-card-icon">
                           <Image src={item.icon} alt="icon" />
                        </div>
                        <h3 className="mb-3">{item.title}</h3>
                        <p className="mb-4">{item.description}</p>
                        <Link className="btn btn3" href="#">Learn More</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Benefits
