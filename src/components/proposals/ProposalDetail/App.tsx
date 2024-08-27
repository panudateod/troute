import { AppShell, Box, Flex } from "@mantine/core"
import { IconSquareRoundedX } from "@tabler/icons-react"
import {
  Link,
  Outlet,
  Route,
  useLocation,
  useNavigate,
} from "@tanstack/react-router"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { useState } from "react"
import { ProposalItemType } from "../ProposalItem/types"

const closeDuration = 300

const dropIn: Variants = {
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
      duration: closeDuration / 1000,
      ease: "easeIn",
    },
  },
}

type Props = {
  route: Route
  parentRoute: Route
  proposalNav?: JSX.Element
  contractNav?: JSX.Element
  extraButton?: JSX.Element
  proposal: ProposalItemType // TODO: Full ProposalType
}

export default function App({
  parentRoute,
  proposalNav,
  contractNav,
  extraButton,
  proposal,
}: Props) {
  const detail = proposal && (proposal.contractProposal || proposal.proposal)

  const location = useLocation()
  const params = parentRoute.useParams()
  const navigate = useNavigate()
  const [closing, setClosing] = useState(false)
  return (
    <AnimatePresence>
      {closing ? null : (
        <motion.div
          // ref={ref}
          key={location.pathname}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AppShell
            layout="alt"
            transitionDuration={0}
            navbar={{
              width: 100,
              breakpoint: "sm",
            }}
            padding="md"
            bg="white"
          >
            <AppShell.Navbar>
              {proposalNav}
              {contractNav}
            </AppShell.Navbar>
            <AppShell.Header bg="gray.1">
              <Flex p="xs" justify="space-between">
                <Flex>
                  <Box pl="sm">{detail?.name}</Box>
                  {extraButton}
                </Flex>
                <Box mr="xxl">
                  <Link
                    to={parentRoute.fullPath}
                    params={params}
                    resetScroll={false}
                    onClick={(e) => {
                      e.preventDefault()
                      setClosing(true)
                      setTimeout(() => {
                        navigate({
                          to: parentRoute.fullPath,
                          params,
                        })
                      }, closeDuration)
                    }}
                  >
                    <IconSquareRoundedX />
                  </Link>
                </Box>
              </Flex>
            </AppShell.Header>
            <AppShell.Main>
              <Outlet />
            </AppShell.Main>
          </AppShell>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
