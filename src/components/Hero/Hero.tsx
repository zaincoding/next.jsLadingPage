import Image from 'next/image';
import hero from './hero.module.css'
console.log(hero, "CSS-Hero")

const Hero = () =>{
  return(
   <div  className={hero.container}>
    <h1 className={hero.h1}>Welcom To My Awosem Website</h1>
    <p className={hero.p}>Discover amazing features and services to boost your<br/><span className={hero.span}> online presence.
        <br/> <button className={hero.btn}>Get Started</button></span></p>
       <img src="../../../images/herobg.PNG" className={hero.img}></img>
       <img src="../../../images/logo2.PNG"></img>


   </div>
  )
}

export default Hero;



















// import img from '../../../public/images/hero-bg.png';
// import Image from 'next/image';


//  const Hero = () =>{
  
//   return (
//     <section className="relative bg-gray-900 text-white">
//       {/* Background image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/hero-bg.png"
//           alt="Hero background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-screen space-y-4 text-center">
//         <h1 className="text-5xl font-bold">
//           Welcome to My Awesome Website
//         </h1>
//         <p className="text-lg max-w-md">
//           Discover amazing features and services to boost your online presence.
//         </p>
//         <a
//           href="/contact"
//           className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
//         >
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
