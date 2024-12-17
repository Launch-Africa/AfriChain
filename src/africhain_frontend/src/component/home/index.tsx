import Footer from "../../layouts/footer/Footer"
import ChooseArea from "./About"
import EventArea from "./EventArea"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import IntroArea from "./IntroArea"
import InvestArea from "./Benefits"
import PartnerArea from "./PartnerArea"
import Team from "./Team"
import RoadMap from "./RoadMap"
import Header from "../../layouts/header/Header"
import Education from "./Education"

const Home = () => {
  return (
    <div className="home-purple-gradient">
      <Header />
      <Hero />
      <ChooseArea />
      <IntroArea />
      <Education />
      <RoadMap />
      <InvestArea />
      <Team />
      <PartnerArea />
      <EventArea />
      <FaqArea />
      <Footer />
    </div>
  )
}

export default Home
