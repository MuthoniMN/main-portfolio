"use client"
import { motion } from "framer-motion"
import Navbar from "./_components/Navbar"
import { Bungee_Shade } from 'next/font/google';
import { FaHouse } from "react-icons/fa6";

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
            icon: <FaHouse />
        },
        {
            text: 'contact',
            link: '#contact',
            icon: <FaHouse />
        }
    ]
    return (
        <section>
            <Navbar links={navItems} />
            <h1 className={`${bungee_shade.className} text-center text-4xl sm:text-8xl lg:text-9xl uppercase`} style={{color: "#CE101D"}}>Michelle<br />Ndiangui</h1>
        </section>
    )
}