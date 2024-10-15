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

