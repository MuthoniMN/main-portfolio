"use client"
import { motion } from "framer-motion"
import { Josefin_Sans } from "next/font/google"

const josefin_Sans = Josefin_Sans({subsets: ['latin']})

export default function Loading(){
    let text = "MICHELLE NDIANGUI".split("")
    return (
        <section className="loading-page">
            <h2 className={josefin_Sans.className}  style={{fontSize: "36px", letterSpacing: "3.5px"}}>
                {text.map((a, i) => (
                    <motion.span 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                            duration: 0.25,
                            delay: i/10
                        }}
                        key={i}
                    >{a}</motion.span>
                ))}
            </h2>
        </section>
    )
}