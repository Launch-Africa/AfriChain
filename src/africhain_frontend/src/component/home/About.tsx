

import choose_thumb_1 from "/assets/img/update/bg/bg-gradient1-1.jpg"
import choose_thumb_2 from "/assets/img/update/normal/why_1-1.png"

import icon_1 from "/assets/img/update/icon/feature-icon1-1.svg"
import icon_2 from "/assets/img/update/icon/feature-icon1-2.svg"
import icon_3 from "/assets/img/update/icon/feature-icon1-3.svg"

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
   icon: any;
   title: string;
   price?: string;
   desc: string;
}[];

const choose_data: DataType2[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Incentivized questing system",
      price: "180,000",
      desc: "Incentivising questing to engage more users. Get more for engaging and learning everyday. Learn and earn at the same time ",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Crowdfunding opportunities for African projects",
      desc: "We are supporting projects that changing the landscape in Africa using blockchain technology",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Rewards for users",
      price: "",
      desc: "Daily rewards for users on the platform, and they can make as much they can. There is always rewards for everyone",
   },
   {
      id: 4,
      icon: icon_1,
      title: "Community Driven",
      desc: "A strong community of Web3 enthusiasts, developers, and innovators across Africa",
   },
   {
      id: 5,
      icon: icon_2,
      title: "Educational Resources",
      desc: "Access to comprehensive Web3 learning materials and tutorials tailored for the African market",
   },
   {
      id: 6,
      icon: icon_3,
      title: "Partnership Network",
      desc: "Strategic partnerships with leading blockchain projects and African tech initiatives",
   },
]

const About = () => {
   return (
      <div className="wcu-area-1 pt-130 pb-140 position-relative" id="about">
         <div className="bg-gradient-1">
            <img src={choose_thumb_1} alt="img" />
         </div>
         <div className="container">
            <div className="mb-25">
               <div className="row gy-5">
                  <div className="col-lg-7">
                     <div className="section-title mb-0">
                        <h2 className="title style2">Project Summary</h2>
                        <p className="sec-text">AfriChain is your gateway to the vibrant and untapped potential of the African Web3 ecosystem.  Designed as a discovery hub, our platform connects global Web3 projects with engaged communities in Africa and emerging markets, offering unique incentives and opportunities for growth. 
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="wcu-thumb text-center alltuchtopdown">
                        <img src={choose_thumb_2} alt="img" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row gy-5 justify-content-between">
               <div className="col-lg-5">
                  {choose_data.slice(0, 3).map((item) => (
                     <div key={item.id} className="feature-card">
                        <div className="feature-card-icon">
                           <img src={item.icon} alt="img" />
                        </div>
                        <div className="feature-card-details">
                           <h4 className="feature-card-title">{item.title}</h4>
                           <p className="feature-card-text">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="col-lg-6">
                  {choose_data.slice(3, 6).map((item) => (
                     <div key={item.id} className="feature-card">
                        <div className="feature-card-icon">
                           <img src={item.icon} alt="img" />
                        </div>
                        <div className="feature-card-details">
                           <h4 className="feature-card-title">{item.title}</h4>
                           <p className="feature-card-text">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
