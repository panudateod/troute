import { AppShell, Box, Flex } from "@mantine/core"
import { IconSquareRoundedX } from "@tabler/icons-react"
import { Link, Outlet, Route, useNavigate } from "@tanstack/react-router"
import { ProposalItemType } from "../ProposalItem/types"

const closeDuration = 300

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

  const params = parentRoute.useParams()
  const navigate = useNavigate()

  return (
    <AppShell
      layout="alt"
      transitionDuration={0}
      navbar={{
        width: navWidth,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Navbar bg={"blue"}>
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
            <Link to={parentRoute.fullPath} params={params} resetScroll={false}>
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
  )
}
