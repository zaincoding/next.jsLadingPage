import footer from './footer.module.css';
import { FaLinkedin,FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

console.log(footer, "CSS-Footer")

const Footer = () =>{
    return(
        <div className={footer.foot}>
            <div>
                <p>&copy; {new Date().getFullYear()}. All right reserved.</p>
            
            < Link href="https://facebook.com" target='_blank'>
            <FaFacebook />
          </Link>   
          < Link href="https://linkedin.com" target='_blank'>
            <FaLinkedin />
          </Link>
          
          < Link href="https://twitter.com" target='_blank'>
            <FaTwitter />
          </Link>
          </div>

        </div>
    )
}

export default Footer;




























// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Left section - copyright */}
//         <div className="text-sm text-center md:text-left">
//           &copy; {new Date().getFullYear()} My Website. All rights reserved.
//         </div>
//         {/* Right section - navigation */}
//         <div className="flex space-x-6 mt-4 md:mt-0">
//           <Link href="/" className="hover:text-gray-400">Home
//           </Link>
//           <Link href="/about" className="hover:text-gray-400">About
//           </Link>
//           <Link href="/services" className="hover:text-gray-400">Services
//           </Link>
//           <Link href="/contact" className="hover:text-gray-400">Contact
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
