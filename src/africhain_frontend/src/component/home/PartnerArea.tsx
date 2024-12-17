"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import partnerThumb_1 from "@/assets/img/update/client/internet-computer-icp-logo.svg"
import partnerThumb_2 from "@/assets/img/update/client/kongswap.png"
import partnerThumb_3 from "@/assets/img/update/client/client-1-5.svg"
import partnerThumb_4 from "@/assets/img/update/client/client-1-4.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   desc: JSX.Element;
}[];

const partner_data: DataType[] = [
   {
      id: 1,
      icon: partnerThumb_1,
      desc: (<>A decentralized blockchain network that enables smart contracts and dapps to run at web speed</>),
   },
   {
      id: 2,
      icon: partnerThumb_2,
      desc: (<>A decentralized exchange platform for swapping and trading tokens on the Internet Computer blockchain</>),
   },
   {
      id: 3,
      icon: partnerThumb_3,
      desc: (<>A company that provides all IT services within the ecosystem of Africhain</>),
   },
   // {
   //    id: 4,
   //    icon: partnerThumb_4,
   //    desc: (<>Stable crypto currency and an important part of the UniFox ecosystem</>),
   // },
   // {
   //    id: 5,
   //    icon: partnerThumb_2,
   //    desc: (<>Online exchanger, specializing in the exchange of private individuals</>),
   // },
   // {
   //    id: 6,
   //    icon: partnerThumb_3,
   //    desc: (<>A company that provides all IT services within the ecosystem of UniFox</>),
   // },
];

const settings={
   dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	spaceBetween: 30,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
}


const PartnerArea = () => {
   return (
      <div className="pt-130 bg-black2 pb-20">
         <div className="container">
            <div className="section-title text-center mb-50">
               <h2 className="title style2">Our partners</h2>
            </div>
            <div className="slider-area">
               <Slider {...settings} className="row partner-slider1">
                  {partner_data.map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="partner-card">
                           <div className="partner-card-img">
                              <Image 
                                 src={item.icon} 
                                 alt="img" 
                                 width={150} 
                                 height={60} 
                                 style={{ objectFit: 'contain' }} 
                              />
                           </div>
                           <p className="partner-card-text">{item.desc}</p>
                           <Link className="btn btn3" href="/blog">EXPLORE</Link>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default PartnerArea
