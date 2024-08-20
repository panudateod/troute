import { AppShell, Box } from "@mantine/core"
import { createRoute, Link, Route } from "@tanstack/react-router"

export default function ProposalDetail(parentRoute: Route) {
  const detailRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: `$proposalId`,
    component: Comp,
  })
  console.log("detailRoute", detailRoute)

  function Comp() {
    console.log("detailRoute.to", detailRoute.to, detailRoute.fullPath)
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
          <Box bg="blue.3" p="md" mb="xs">
            <Link to={""}>งาน</Link>
          </Box>
          <Box bg="blue.3" p="md" mb="xs">
            <Link to="/proposals/assessment">เงิน</Link>
          </Box>
        </AppShell.Navbar>
        <AppShell.Header bg="red.3">
          <Box ml="xxl">
            <Link to={parentRoute.fullPath} resetScroll={false}>
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
