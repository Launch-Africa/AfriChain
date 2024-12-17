import Image, { StaticImageData } from "next/image";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg"

import info_icon from "@/assets/img/update/icon/info-circle.svg"
import people from "@/assets/img/update/icon/people-fill.svg"
import gradcap from "@/assets/img/update/icon/gradcap.svg";

interface DataType {
   id: number;
   title: string;
   price: string;
   skill: string;
   value: string;
   value_2: string;
}[];

interface DataType2 {
   id: number;
   icon: StaticImageData;
   title: string;
   price?: string;
   desc: string;
}[];


const choose_data: DataType2[] = [
   {
      id: 1,
      icon: gradcap,
      title: "Online and offline training programs",
      price: "180,000",
      desc: "Free workshops on blockchain fundamentals",
   },
   {
      id: 2,
      icon: info_icon,
      title: "Supporting African developers and innovators",
      desc: "We are supporting projects that changing the landscape in Africa using blockchain technology",
   },
   {
      id: 3,
      icon: people,
      title: "Partnering with institutions for Web3 courses",
      price: "",
      desc: "Collaborating with other players to bring the best out our students",
   },

]

const Education = () => {
   return (
      <div className="wcu-area-1 pt-130 pb-140 position-relative" id="feature">
         <div className="bg-gradient-1">
            <Image src={choose_thumb_1} alt="img" />
         </div>
         <div className="container">
            <div className="mb-25">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title mb-0">
                        <h2 className="title style2">Building Knowledge, Creating Opportunities</h2>
                        <p className="sec-text">
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row gy-5 justify-content-between">
               <div className="col-lg-5">
                  {choose_data.slice(0, 3).map((item) => (
                     <div key={item.id} className="feature-card">
                        <div className="feature-card-icon">
                           <Image src={item.icon} alt="img" width={48} height={48} />
                        </div>
                        <div className="feature-card-details">
                           <h4 className="feature-card-title">{item.title}</h4>
                           <p className="feature-card-text">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="col-lg-6 d-flex align-items-center">
                  <div className="skill-feature_list style2">
                     <ul style={{ listStyleType: 'disc', fontSize: '24px' }}>
                        <li className="mb-4">
                           <h4 style={{ fontSize: '18px' }}>Empowering African talent through comprehensive blockchain education programs</h4>
                        </li>
                        <li className="mb-4">
                           <h4 style={{ fontSize: '18px' }}>Building a network of skilled Web3 developers and innovators across the continent</h4>
                        </li>
                        <li className="mb-4">
                           <h4 style={{ fontSize: '18px' }}>Creating sustainable career paths in the growing blockchain ecosystem</h4>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Education
