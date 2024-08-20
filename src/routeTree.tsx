import App from "@/App"
import "@mantine/core/styles.css"
import { createRootRoute, createRoute, Route } from "@tanstack/react-router"
import ProposalDetail from "./components/ProposalDetail"
import { jobFieldsMap, JobType } from "./components/ProposalItem"
import ProposalJobList from "./components/ProposalJobList"

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

const proposalListJobs = Object.keys(jobFieldsMap) as JobType[]

const proposalRoutes = proposalListJobs.map((job) => {
  const jobRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/proposals/${job}`,
  }) as unknown as Route

  const listRoute = ProposalJobList(jobRoute, job)
  const detailRoute = ProposalDetail(jobRoute)

  jobRoute.addChildren([listRoute, detailRoute])

  return jobRoute
})

const routeTree = rootRoute.addChildren([indexRoute, ...proposalRoutes])
export default routeTree
