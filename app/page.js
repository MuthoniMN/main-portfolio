"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import Navbar from "./_components/Navbar"
import { Bungee_Shade } from 'next/font/google';
import { FaHouse } from "react-icons/fa6";
import aboutIcon from "@/app/assets/images/about.png"
import contactIcon from "@/app/assets/images/contact.png"

const bungee_shade = Bungee_Shade({subsets: ['latin'], weight: "400", variable: "--font-bungee-shade"})

export default function Home(){
    const navItems = [
        {
            text: 'home',
            link: '/',
            icon: <FaHouse />
        },
        {
            text: 'about',
            link: '#about',
            icon: <Image src={aboutIcon} alt="About Michelle Ndiangui" width={24} height={24}  />
        },
        {
            text: 'contact',
            link: '#contact',
            icon: <Image src={contactIcon} alt="Contact Michelle Ndiangui" width={24} height={24}  />
        }
    ]
    return (
        <section>
            <Navbar links={navItems} />
            <h1 className={`${bungee_shade.className} text-center text-4xl sm:text-8xl lg:text-9xl uppercase`} style={{color: "#CE101D"}}>Michelle<br />Ndiangui</h1>
        </section>
    )
}