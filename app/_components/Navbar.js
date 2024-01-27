"use client"
import React, { useState } from 'react';
import { Bungee_Shade } from 'next/font/google';
import {FaBars, FaBarsStaggered, FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa6'

const bungee_shade = Bungee_Shade({subsets: ['latin'], weight: "400", variable: "--font-bungee-shade"})

const Navbar = ({links, name}) => {
    const [open, setOpen] = useState(false)
    return (
    <nav className={`${name === true ? 'justify-between' : 'justify-end'} flex py-4 px-6`}>
        {name === "true" && <h1 className={`${bungee_shade.className} text-center text-lg sm:text-3xl uppercase`} style={{color: "#CE101D"}}>Michelle Ndiangui</h1>}
        <button onClick={() => setOpen(val => !val)}>
        {open ? <FaBarsStaggered style={{color: "#CE101D", fontSize: "32px"}}  /> : <FaBars style={{color: "#CE101D", fontSize: "32px"}}  />}
        </button>
        {open && <ul className='w-[150px] flex flex-col items-end gap-4 py-4 px-8 absolute top-[64px] right-[-24px] rounded-xl' style={{background: "#FAB4CB"}}>
            {links.map(link => (
                <li>
                    <a className='no-underline flex gap-1' style={{color: "#CE101D"}} href={link.link}>{link.icon}{link.text}</a>
                </li>
            ))}
            <li className='flex gap-2'>
                <a href='https://www.facebook.com/kamau.muthoni.503/'>
                    <FaFacebook style={{color: "#CE101D", fontSize: "18px"}} />
                </a>
                <a href='https://twitter.com/codebymitch'>
                    <FaTwitter style={{color: "#CE101D", fontSize: "18px"}} />
                </a>
                <a href='https://www.linkedin.com/in/michelle-ndiangui/'>
                    <FaLinkedin style={{color: "#CE101D", fontSize: "18px"}} />
                </a>
                <a href='https://github.com/MuthoniMN'>
                    <FaGithub style={{color: "#CE101D", fontSize: "18px"}} />
                </a>
            </li>
        </ul>}
    </nav>
)}

export default Navbar;