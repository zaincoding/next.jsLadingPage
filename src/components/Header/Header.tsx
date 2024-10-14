import Link from 'next/link';
import header from './header.module.css';
console.log(header, "CSS-Header")
const   Header= () =>{
  return(
     <div>
<div>
  <nav  className={header.nav}>
  <img src="../../../images/herobg.PNG" className={header.log}></img>
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































// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header className="bg-gray-800 p-4">
//       <nav className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">
//           <Link href="/">
//          My Website
//           </Link>
//         </div>
//         <ul className="flex space-x-6">
//           <li>
//             <Link href="/" className="text-white hover:text-gray-400">Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-white hover:text-gray-400">About
//             </Link>
//           </li>
//           <li>
//             <Link href="/services" className="text-white hover:text-gray-400">Services
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-white hover:text-gray-400">Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
