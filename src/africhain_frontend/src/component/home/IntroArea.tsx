import Image from "next/image";

import intro_thumb from "@/assets/img/update/normal/intro_1-1.png";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      title: "Growing user base and adoption of digital assets",
      desc: (<>AfriChain is more than just a platform—it’s a movement designed to spotlight Africa’s untapped Web3 potential. By bridging global innovation with African talent and projects, we enable meaningful collaboration and discovery.</>),
   },
   {
      id: 2,
      title: "Untapped innovation potential in African markets",
      desc: (<>With AfriChain, users earn rewards by actively engaging with projects through quests, completing tasks, and participating in airdrops. From ICP to USDT and our native token, our platform turns engagement into real value, driving growth for both users and projects.</>),
   },
   {
      id: 3,
      title: "Opportunities for global investors and projects",
      desc: (<>Our mission goes beyond wealth—it’s about impact. By offering grants, accelerator programs, and local ambassador networks, AfriChain empowers African-based startups to reach global heights.</>),
   },
]

const IntroArea = () => {
   return (
      <div className="pt-130 overflow-hidden bg-black2">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="section-title mb-45">
                     <h2 className="title style2">Why Africa?</h2>
                     <p className="sec-text">Redefining Engagement in the African Web3 Ecosystem</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-between">
               <div className="col-xl-4">
                  {intro_data.map((item) => (
                     <div key={item.id} className="intro-wrap">
                        <h6 className="intro-wrap-title">{item.title}</h6>
                        <p className="intro-wrap-text">{item.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="col-xl-6">
                  <div className="intro-thumb1 alltuchtopdown">
                     <Image src={intro_thumb} alt="img" />
                  </div>
                  <div className="intro-wrap mt-50">
                     <h6 className="intro-wrap-title">Our Mission & Vision</h6>
                     <p className="intro-wrap-text">AfriChain envisions a world where Africa stands at the forefront of the Web3 revolution. Through incentivized engagement, community-driven initiatives, and global collaboration, we’re redefining how projects connect with their audiences in Africa and beyond.</p>
                     <p className="intro-wrap-text mt-40">Join AfriChain today and be part of the movement shaping the future of Web3 in Africa.</p>
                     <p className="intro-wrap-text mt-40"></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
