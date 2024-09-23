import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../../../public/images/OMANETLOGO2.png"
import Image from "next/image";
export default function Footer(){

    return(
        <footer className="footer p-10 bg-gradient-to-t
        from-green-700 to-green-300 text-white">
  <aside>
  <Image 
        src={logo}
        alt="logo"
        className="rounded-full w-[6em] hover:scale-150 transition duration-500"
        />
    <p>OMANET<br/>Better Organic Farming</p>
  </aside> 
  <nav>
    <h6 className="footer-title">About</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  
  <nav>
    <h6 className="footer-title">Company Info</h6> 
    <a className="link link-hover flex"><FaLocationDot className="mr-1"/>Address: Kampala, Uganda</a>
    <a className="link link-hover flex"> <FaPhoneAlt className="mr-1"/>Phone: +256 770 734601</a>
    <a className="link link-hover flex"><FaClock className="mr-1"/>Hours: 7 Days a week from 9:00am - 5:00pm</a>
    <a className="link link-hover flex"><MdEmail className="mr-1 mt-1"/> E-mail: admin@omanetug.org</a>
  </nav>
</footer>
    )
}