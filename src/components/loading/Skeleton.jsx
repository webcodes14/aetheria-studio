import { motion } from "motion/react";

const Skeleton = () => {

    return (
        <div>
            <motion.h2 
                className="max-w-2xs h-10 bg-gray-400 rounded-lg m-4"
                animate={{ opacity: [0.2, 1, 0.2] }}
                layout
                transition={{
                    repeat: Infinity, duration: 1.5
                }}
            ></motion.h2>
            <motion.p 
                className="max-w-full h-6 bg-gray-400 rounded-lg m-4"
                animate={{ opacity: [0.2, 1, 0.2] }}
                layout
                transition={{
                    repeat: Infinity, duration: 1.5
                }}
            ></motion.p>
            <motion.p 
                className="max-w-full h-6 bg-gray-400 rounded-lg m-4"
                animate={{ opacity: [0.2, 1, 0.2] }}
                layout
                transition={{
                    repeat: Infinity, duration: 1.5
                }}
            ></motion.p>
            <motion.div 
                className="max-w-full h-32 bg-gray-400 rounded-lg m-4"
                animate={{ opacity: [0.2, 1, 0.2] }}
                layout
                transition={{
                    repeat: Infinity, duration: 1.5
                }}
            ></motion.div>
            <motion.div 
                className="max-w-full h-32 bg-gray-400 rounded-lg m-4"
                animate={{ opacity: [0.2, 1, 0.2] }}
                layout
                transition={{
                    repeat: Infinity, duration: 1.5
                }}
            ></motion.div>
        </div>
    )
}

export default Skeleton;