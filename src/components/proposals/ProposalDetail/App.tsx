import { AppShell, Box } from "@mantine/core"
import { Link, Outlet, Route } from "@tanstack/react-router"
import Nav from "./Nav"

type Props = { route: Route; parentRoute: Route }

export default function App({ route, parentRoute }: Props) {
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
        <Nav route={route} />
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
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
