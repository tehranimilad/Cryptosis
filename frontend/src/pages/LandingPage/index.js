import Letterize from "letterizejs"
import anime from "animejs";
import { useEffect } from "react";
import './LandingPage.css'
import { Image } from "react-bootstrap";

const LandingPage = () => {
    useEffect(() => {
      // modified animation referenced from https://codepen.io/WojciechWKROPCE/pen/VwLePLy
    const mainAnimation = new Letterize({
        targets: ".crypto-animation"
    });
    // creates a new animation timeline, and set the targets to the elements returned by mainAnimation
    const animation = anime.timeline({
        targets: mainAnimation.listAll,
        delay: anime.stagger(100, {
          grid: [mainAnimation.list[0].length, mainAnimation.list.length],
          from: "center"
        }),
        // The animation is set to loop continuously
        loop: true
    });
    // The animation has 4 steps:
    // Scale property is set to 0.6
    // letterSpacing property is set to "5px"
    // Scale property is then set to 0.9
    // letterSpacing property is then set to "8px"
    animation
        .add({
          scale: 0.6})
        .add({
          letterSpacing: "5px"})
        .add({
          scale: .9})
        .add({
          letterSpacing: "8px"});
}, []);
  
    return (
        <>
         <a href="/home"><Image className="landingPageImage" src="https://img.freepik.com/free-vector/popular-cryptocurrency-logos-set_69286-369.jpg?w=2000" fluid/></a>
        <div className="landing-page-container">
            <a href="/home"><div className="crypto-animation" fluid>
                Cryptosis
            </div>
            <div className="crypto-animation" fluid>
                Click to Continue
            </div>            
           </a>
        </div>
        </>
    )
  }
  
  export default LandingPage
