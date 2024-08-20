import { AppShell, Box } from "@mantine/core"
import { createRoute, Link, Route } from "@tanstack/react-router"

export default function ProposalDetail(jobRoute: Route) {
  const detailRoute = createRoute({
    getParentRoute: () => jobRoute,
    path: `/$proposalId`,
    component: Comp,
  })
  console.log(jobRoute)

  function Comp() {
    return (
      <AppShell layout="alt">
        <AppShell.Navbar>
          <Box bg="blue.3" p="md" mb="xs">
            <Link to="/proposals/screening">งาน</Link>
          </Box>
          <Box bg="blue.3" p="md" mb="xs">
            <Link to="/proposals/assessment">เงิน</Link>
          </Box>
        </AppShell.Navbar>
        <AppShell.Header bg="red.3">
          <Box ml="xxl">
            <Link to={jobRoute.fullPath} resetScroll={false}>
              X
            </Link>
          </Box>
          Proposal Header
        </AppShell.Header>
        <AppShell.Main>
          <h1>Proposal Detail</h1>
        </AppShell.Main>
      </AppShell>
    )
  }

  return detailRoute
}
