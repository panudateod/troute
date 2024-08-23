import { AppShell, Box } from "@mantine/core"
import { Link, Outlet, Route } from "@tanstack/react-router"

type Props = {
  route: Route
  parentRoute: Route
  proposalNav?: JSX.Element
  contractNav?: JSX.Element
}

export default function App({ parentRoute, proposalNav, contractNav }: Props) {
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
