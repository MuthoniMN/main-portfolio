"use client"
import { motion } from "framer-motion"

export default function Loading(){
    let text = "MICHELLE NDIANGUI".split("")
    return (
        <section className="loading-page">
            <h1 className={josefin_Sans.className}  style={{fontSize: "36px", letterSpacing: "3.5px"}}>
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
            </h1>
        </section>
    )
}