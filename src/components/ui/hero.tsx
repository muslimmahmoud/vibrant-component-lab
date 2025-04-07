
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations"

interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  badgeIcon?: React.ReactNode
  badgeText?: string
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  media?: React.ReactNode
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, badgeIcon, badgeText, title, description, actions, media, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden", className)}
        {...props}
      >
        <div className="absolute inset-0 z-0 bg-gradient-radial from-gray-200 to-transparent" />
        
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            {(badgeIcon || badgeText) && (
              <motion.div
                className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-black/10 text-black text-sm font-medium"
                variants={fadeIn}
              >
                {badgeIcon && <span className="mr-2">{badgeIcon}</span>}
                {badgeText && <span>{badgeText}</span>}
              </motion.div>
            )}
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
              variants={fadeIn}
            >
              {title}
            </motion.h1>
            
            {description && (
              <motion.div 
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
                variants={fadeIn}
              >
                {description}
              </motion.div>
            )}
            
            {actions && (
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={fadeIn}
              >
                {actions}
              </motion.div>
            )}
            
            {media && (
              <motion.div 
                className="mt-16 relative"
                variants={slideIn('up')}
              >
                {media}
                <div className="absolute -inset-x-20 -bottom-10 h-40 bg-gradient-to-t from-background to-transparent"></div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    )
  }
)

Hero.displayName = "Hero"

export { Hero }
