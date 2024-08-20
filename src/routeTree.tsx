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

// All proposals
const proposalIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/proposals",
}) as unknown as Route
proposalIndexRoute.addChildren([
  ProposalList(proposalIndexRoute),
  ProposalDetail(proposalIndexRoute),
])

// Proposals by jobs
proposalRoutes = proposalRoutes.concat(
  proposalListJobs.map((job) => {
    const jobRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: `/proposals/${job}`,
    }) as unknown as Route
    jobRoute.addChildren([
      ProposalJobList(jobRoute, job), // use ProposalJobList instead of ProposalList
      ProposalDetail(jobRoute),
    ])

    return jobRoute
  }),
)

const routeTree = rootRoute.addChildren([
  indexRoute,
  proposalIndexRoute,
  ...proposalRoutes,
])
export default routeTree
