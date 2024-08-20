import { AppShell, Box } from "@mantine/core"
import "@mantine/core/styles.css"
import { createRoute, Link, Outlet, Route } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export default function PartnerLayout(parentRoute: Route) {
  const layoutRoute = createRoute({
    getParentRoute: () => parentRoute,
    id: "d",
    component: Comp,
  })

  function Comp() {
    return (
      <>
        <AppShell
          layout="alt"
          navbar={{
            width: 100,
            breakpoint: "sm",
          }}
        >
          <AppShell.Navbar>
            <Box bg="blue.3" p="md" mb="xs">
              <Link to="/p/proposals">Project</Link>
            </Box>
            <hr />
            <Box bg="blue.3" p="md" mb="xs">
              <Link to="/d">Switch to Officer Mode</Link>
            </Box>
          </AppShell.Navbar>
          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
        <TanStackRouterDevtools />
      </>
    )
  }

  return layoutRoute as unknown as Route
}
