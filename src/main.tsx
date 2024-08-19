import { AppShell, Box, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import ProposalDetail from "./components/ProposalDetail"
import { configFields, JobType } from "./components/ProposalItem"
import ProposalList from "./components/ProposalList"

const rootRoute = createRootRoute({
  component: () => (
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
            TORs
          </Box>
          <hr />
          <Box bg="blue.3" p="md" mb="xs">
            Proposals [all]
          </Box>
          <Box bg="blue.3" p="md" mb="xs">
            <Link to="/proposals/screening">Proposals [screening]</Link>
          </Box>
          <Box bg="blue.3" p="md" mb="xs">
            <Link to="/proposals/assessment">Proposals [assessment]</Link>
          </Box>
          <Box bg="blue.3" p="md" mb="xs">
            Proposals [improvement]
          </Box>
          <hr />
          <Box bg="blue.3" p="md" mb="xs">
            Project [all]
          </Box>
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      <TanStackRouterDevtools />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    )
  },
})

const proposalListPaths = Object.keys(configFields) as JobType[]

const proposalRoutes = proposalListPaths.map((path) => {
  const proposalRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/proposals/${path}`,
  })

  const indexRoute = createRoute({
    getParentRoute: () => proposalRoute,
    path: "/",
    component: ProposalList(path),
  })

  const detailRoute = createRoute({
    getParentRoute: () => proposalRoute,
    path: `$proposalId`,
    component: ProposalDetail(indexRoute),
  })

  proposalRoute.addChildren([indexRoute, detailRoute])

  return proposalRoute
})

const routeTree = rootRoute.addChildren([indexRoute, ...proposalRoutes])

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </StrictMode>,
  )
}
