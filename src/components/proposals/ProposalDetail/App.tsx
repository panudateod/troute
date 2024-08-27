import { AppShell, Box, Flex, Modal } from "@mantine/core"
import { IconSquareRoundedX } from "@tabler/icons-react"
import {
  Link,
  Outlet,
  Route,
  useLocation,
  useNavigate,
} from "@tanstack/react-router"
import { Variants } from "framer-motion"
import { useEffect, useState } from "react"
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

const navWidth = 100

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
  const [noTransitionOpened, setNoTransitionOpened] = useState(false)
  const [transformFinished, setTransformFinished] = useState(false)
  useEffect(() => {
    setNoTransitionOpened(true)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setTransformFinished(true)
    }, 800)
  }, [])

  return (
    <Modal.Root
      opened={noTransitionOpened}
      onClose={() => {}}
      fullScreen
      transitionProps={{
        transition: "slide-left",
        duration: 1000,
        timingFunction: "easeIn",
      }}
    >
      <Modal.Overlay />
      <Modal.Content
        className={
          transformFinished && noTransitionOpened ? "transform-finished" : ""
        }
      >
        <Modal.Body>
          <AppShell
            layout="alt"
            transitionDuration={0}
            navbar={{
              width: navWidth,
              breakpoint: "sm",
            }}
            padding="md"
            left={5}
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
                      setNoTransitionOpened(false)
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
              {/* <div style={{ maxHeight: "95vh", overflowY: "auto" }}> */}
              <Outlet />
              {/* </div> */}
            </AppShell.Main>
          </AppShell>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
