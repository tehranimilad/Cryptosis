import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import anime from "animejs";
import { useEffect } from "react";
import './LandingPage.css'
import { Image } from "react-bootstrap";

const LandingPage = () => {
    useEffect(() => {
        const mainAnimation = new Letterize({
            targets: ".crypto-animation"
        });

        const animation = anime.timeline({
            targets: mainAnimation.listAll,
            delay: anime.stagger(100, {
              grid: [mainAnimation.list[0].length, mainAnimation.list.length],
              from: "center"
            }),
            loop: true
        });

        animation
            .add({
              scale: 0.6
            })
            .add({
              letterSpacing: "5px"
            })
            .add({
              scale: .9
            })
            .add({
              letterSpacing: "8px"
            });
    }, []);
  
    return (
        <>
         <a href="/home"><Image className="landingPageImage" src="https://img.freepik.com/free-vector/popular-cryptocurrency-logos-set_69286-369.jpg?w=2000" width="70%" fluid/></a>
        <div className="landing-page-container">
            <a href="/home"><div className="crypto-animation">
                Cryptosis
            </div>
            <div className="crypto-animation">
                Click to Continue
            </div>            
           </a>
        </div>
        </>
    )
  }
  
  export default LandingPage
