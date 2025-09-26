'use client'

import * as React from 'react'
import { motion } from 'motion/react'
type AnimatedBurgerIconProps = React.SVGProps<SVGSVGElement> & {
  open: boolean
}

export const BurgerMenuIcon: React.FC<AnimatedBurgerIconProps> = ({ open }) => {
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={open ? 'open' : 'closed'}
    >
      {/* Верхняя полоса */}
      <motion.rect
        x="7"
        y="13"
        width="9"
        height="2"
        rx="1"
        fill="#2D3240"
        initial={false}
        animate={open ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      />

      {/* Центральная полоса — поворачивается «боком» и пропадает */}
      <motion.rect
        x="2"
        y="3"
        width="9"
        height="2"
        rx="1"
        fill="#2D3240"
        initial={false}
        animate={open ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      />

      {/* Нижняя полоса */}
      <motion.rect
        x="2"
        y="8"
        width="14"
        height="2"
        rx="1"
        fill="#2D3240"
        initial={false}
        animate={open ? { rotate: -45, width: 18, x: -2 } : { rotate: 0, width: 14, x: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      />
    </motion.svg>
  )
}
