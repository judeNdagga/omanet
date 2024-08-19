"use client"
import { motion } from "framer-motion"



export default function Template({ children }: {children: React.ReactNode }){
    // useEffect(() => {
    //     animatePageIn()
    // }, [])
    return(
        <motion.div
        initial={{ y: 2, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1}}
        transition={{ease: 'easeInOut', duration: 0.4}}
        >
            {/* <div
            id="banner-1"
            className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
            />
             <div
            id="banner-2"
            className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
            />
             <div
            id="banner-3"
            className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
            />
             <div
            id="banner-4"
            className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
            /> */}
            {children}
        </motion.div>
    )
}