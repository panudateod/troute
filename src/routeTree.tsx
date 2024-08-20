import App from "@/App"
import "@mantine/core/styles.css"
import { createRootRoute, createRoute, Route } from "@tanstack/react-router"
import ProposalDetail from "./components/proposal/ProposalDetail"
import ProposalJobList from "./components/proposal/ProposalJobList"
import ProposalList from "./components/proposal/ProposalList"
import { jobFieldsList } from "./components/proposal/fields"

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

const proposalListJobs = jobFieldsList.map((job) => job.path)

let proposalRoutes: Route[] = []

const proposalIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/proposals",
}) as unknown as Route
const proposalListRoute = ProposalList(proposalIndexRoute)
const proposalDetailRoute = ProposalDetail(proposalIndexRoute)
proposalIndexRoute.addChildren([proposalListRoute, proposalDetailRoute])

proposalRoutes = proposalRoutes.concat(
  proposalListJobs.map((job) => {
    const jobRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: `/proposals/${job}`,
    }) as unknown as Route

    const listRoute = ProposalJobList(jobRoute, job)
    const detailRoute = ProposalDetail(jobRoute)

    jobRoute.addChildren([listRoute, detailRoute])

    return jobRoute
  }),
)

const routeTree = rootRoute.addChildren([
  indexRoute,
  proposalIndexRoute,
  ...proposalRoutes,
])
export default routeTree
