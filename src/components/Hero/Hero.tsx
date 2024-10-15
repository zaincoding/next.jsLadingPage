import hero from './hero.module.css'
console.log(hero, "CSS-Hero")

const Hero = () =>{
  return(
   <div  className={hero.container}>
    <h1 className={hero.h1}>Welcom To My Awosem Website</h1>
    <p className={hero.p}>Discover amazing features and services to boost your<br/><span className={hero.span}> online presence.
        <br/> <button className={hero.btn}>Get Started</button></span></p>
       <img src="../../../images/herobg.PNG"  alt="Hero background"className={hero.img}></img>

   </div>
  )
}

export default Hero;
