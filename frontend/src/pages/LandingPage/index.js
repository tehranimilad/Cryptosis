// import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
// import anime from "animejs";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom"
// import { useState } from "react"
// import Navbar from "../../components/nav";
// import './LandingPage.css'

// const LandingPage = () => {
//     const location = useLocation();
//     const [navbar, setNavbar] = useState(null);

//     useEffect(() => {
//         if (location.pathname === '/') {
//             setNavbar(null)
//         } else {
//             setNavbar(<Navbar />)
//         }
//         const animationLanding = new Letterize({
//           targets: ".crypto-animation"
//         });
  
//         const animation = anime.timeline({
//             targets: animationLanding.listAll,
//             delay: anime.stagger(100, {
//                 grid: [animationLanding.list[0].length, animationLanding.list.length],
//                 from: "center"
//             }),
//             loop: true
//         });
  
//         animation
//             .add({
//                 scale: 0.5
//             })
//             .add({
//                 letterSpacing: "10px"
//             })
//             .add({
//                 scale: 1
//             })
//             .add({
//                 letterSpacing: "6px"
//             });
//     }, [location.pathname]);
  
//     return (
//         <>

//         <div className="landing-page-container">
//             <a href="/home"><div className="landing-page-container">
//                 Cryptosis
//             </div>
//             <div className="crypto-animation">
//                 Click Here to Continue
//             </div>
//             <div className="landing-page-container">
//                 Cryptosis
//             </div>
//             <div className="crypto-animation">
//                 Click Here to Continue
//             </div>
//             <div className="landing-page-container">
//                 Cryptosis
//             </div>
//             <div className="crypto-animation">
//                 Click Here to Continue
//             </div>
//             <div className="landing-page-container">
//                 Cryptosis
//             </div>
//             <div className="crypto-animation">
//                 Click Here to Continue
//             </div>
//             <div className="landing-page-container">
//                 Cryptosis
//             </div>
//             <div className="crypto-animation">
//                 Click Here to Continue
//             </div>
//             <div className="landing-page-container">
//                 Cryptosis
//             </div>
//             <div className="crypto-animation">
//                 Click Here to Continue
//             </div>
//             <div className="landing-page-container">
//                 Cryptosis
//             </div>
//             <div className="crypto-animation">
//                 Click Here to Continue
//             </div></a>
//         </div>
//         </>
//     )
//   }
  
//   export default LandingPage
