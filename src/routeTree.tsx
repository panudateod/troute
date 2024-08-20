import App from "@/App"
import "@mantine/core/styles.css"
import { createRootRoute, createRoute } from "@tanstack/react-router"
import ProposalDetail from "./components/ProposalDetail"
import { configFields, JobType } from "./components/ProposalItem"
import ProposalList from "./components/ProposalList"

const rootRoute = createRootRoute({
  component: App,
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
export default routeTree
