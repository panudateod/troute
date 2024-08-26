import { AppShell, Box, Flex } from "@mantine/core"
import { IconSquareRoundedX } from "@tabler/icons-react"
import { Link, Outlet, Route } from "@tanstack/react-router"
import { ProposalItemType } from "../ProposalItem/types"

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
  return (
    <AppShell
      layout="alt"
      navbar={{
        width: 100,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Navbar>
        {proposalNav}
        {contractNav}
      </AppShell.Navbar>
      <AppShell.Header bg="gray.1">
        <Flex p="xs">
          <Box ml="xxl">
            <Link to={parentRoute.fullPath} resetScroll={false}>
              <IconSquareRoundedX />
            </Link>
          </Box>
          <Box pl="sm">{detail?.name}</Box>
          {extraButton}
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
