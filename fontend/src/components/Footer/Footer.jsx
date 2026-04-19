import React from 'react'
import footerLogo from '../assets/hero/logo.png'
import Banner from "../assets/website/footer-pattern.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaVoicemail } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },

    {
        title: "About",
        link: "/#about",
    },

    {
        title: "Contact",
        link: "/#contact",
    },

    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white mb-20'>
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                {/* Company details */}
                <div className="py-8 px-4">
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        <img src={footerLogo} alt="" className='max-w-[50px]'/>
                        Dilys
                    </h1>
                    <p>Dilys Vietnam is the ideal choice for you. Dilys provides a full range of genuine labubu clothes with many extremely attractive promotional prices. In particular, Dilys of clothes will always be easily found at preferential prices with a variety of unique designs and colors. As a reputable online shopping channel.</p>
                </div>
                {/* Footer links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div className="">
                        <div className="py-8 px-4">
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <div className="py-8 px-4">
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                                Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="">
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <a href='https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%C3%B4ng+nghi%E1%BB%87p+TP.HCM/@10.8221589,106.6842651,17z/data=!3m1!4b1!4m6!3m5!1s0x3174deb3ef536f31:0x8b7bb8b7c956157b!8m2!3d10.8221589!4d106.6868454!16s%2Fm%2F02pyzdj?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D'>Gò Vấp - Hồ Chí Minh - Việt Nam</a>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt/>
                                <a href="tel:+8425570615">+8425570615</a>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <MdEmail/>
                                <a href="mailto:nnam18740@gmail.com">nnam18740@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
