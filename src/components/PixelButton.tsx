import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

type PixelButtonProps = {
    imgStatic: string
    // imgHover?: string
    alt: string
    onClick?: () => void
}
export default function PixelButton( {imgStatic, alt, onClick}:PixelButtonProps ) {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
        <div
        className='relative'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
        >
            <img
                className='h-full w-full object-contain cursor-pointer'
                src={imgStatic}
                alt={alt}
            />
            <AnimatePresence>
                {isHovering && (
                    <motion.img
                        key="select-arrow"
                        src="/pngs/selectarrow.png"
                        className='absolute left-1/2 -translate-x-1/2'
                        style={{ top: '100%', width: '2.5rem'}}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ 
                            opacity: 1, 
                            y: [0,12,0],
                            transition: {
                                y: { repeat: Infinity, duration: 0.8, ease: 'easeInOut' },
                                opacity: { duration: 0.2 }
                            }
                        }}
                        exit={{ opacity: 0, y: 16, transition: { duration: 0.2 } }}    // "hover end" animation
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};