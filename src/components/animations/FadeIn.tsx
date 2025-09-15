'use client'

import { motion, HTMLMotionProps } from 'framer-motion'

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.6,
  ...props 
}: FadeInProps) {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directionOffset[direction]
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{ 
        duration,
        delay,
        ease: 'easeOut'
      }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  )
}