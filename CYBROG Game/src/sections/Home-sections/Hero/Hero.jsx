import PrimaryButton from "../../../components/buttons/Buttons"
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper"

const Hero = () => {
  const styles = {
    backgroundImage: "url('../public/images/banner-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundSize: "cover",
    backgroundPositionX: "center",
    padding:'80px 50px',

  };
  return (
    <SectionWrapper style ={styles}>
        <div className="Hero__text">
          Welcome To Cyborg
        </div>
        <div className="Hero__title">
        <span>BROWSE</span> OUR<br /> POPULAR  GAMES HERE
        </div>
          <PrimaryButton>
            Browse Now
          </PrimaryButton>
    </SectionWrapper>
 
  )
}

export default Hero
