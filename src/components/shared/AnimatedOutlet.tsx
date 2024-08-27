import { getRouterContext, Outlet } from "@tanstack/react-router"
import { motion, useIsPresent, Variants } from "framer-motion"
import { cloneDeep } from "lodash"
import { forwardRef, useContext, useRef } from "react"

const upIn: Variants = {
  hidden: {
    y: "200vh",
  },
  visible: {
    y: "0",
    transition: {
      duration: 2,
      ease: "anticipate",
      delay: -1,
    },
  },
  exit: {
    y: "200vh",
    transition: {
      duration: 2,
      ease: "anticipate",
    },
  },
}

const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
  const RouterContext = getRouterContext()

  const routerContext = useContext(RouterContext)

  const renderedContext = useRef(routerContext)

  //   console.log(routerContext.latestLocation)

  const isPresent = useIsPresent()

  if (isPresent) {
    renderedContext.current = cloneDeep(routerContext)
  }

  const isDetail =
    routerContext.latestLocation.pathname !== "/d/1/proposals/screening/9/i"

  return (
    <motion.div
      ref={ref}
      variants={isDetail ? upIn : {}}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <RouterContext.Provider value={renderedContext.current}>
        <Outlet />
      </RouterContext.Provider>
    </motion.div>
  )
})

export default AnimatedOutlet
