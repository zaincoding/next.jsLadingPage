import Link from 'next/link';
import header from './header.module.css';
console.log(header, "CSS-Header")
const   Header= () =>{
  return(
     <div>
<div>
  <nav  className={header.nav}>
  <img src="../../../images/logo2.PNG" className={header.log}></img>
  <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/">About</Link></li>
    <li><Link href="/">Contact</Link></li>

  </ul>
  </nav>
</div>
     </div>
  )
}


export default Header;
