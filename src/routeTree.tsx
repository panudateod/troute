import App from "@/App"
import "@mantine/core/styles.css"
import { createRoute, Route } from "@tanstack/react-router"
import DepartmentDetail from "./components/departments/DepartmentDetail"
import DepartmentList from "./components/departments/DepartmentList"
import ProposalDetail from "./components/proposals/ProposalDetail"
import ProposalJobList from "./components/proposals/ProposalJobList"
import ProposalList from "./components/proposals/ProposalList"
import { jobFieldList as proposalJobFieldList } from "./components/proposals/fields"

const rootRoute = App()

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

// All departments
const departmentIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/d",
}) as unknown as Route
const departmentDetailRoute = DepartmentDetail(departmentIndexRoute)
departmentIndexRoute.addChildren([
  DepartmentList(departmentIndexRoute),
  departmentDetailRoute,
])

// All proposals
const proposalIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/d/$departmentId/proposals",
}) as unknown as Route
proposalIndexRoute.addChildren([
  ProposalList(proposalIndexRoute),
  ProposalDetail(proposalIndexRoute),
])

// Proposals by jobs
const proposalRoutes: Route[] = proposalJobFieldList.map((job) => {
  const jobRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/d/$departmentId/proposals/${job.path}`,
  }) as unknown as Route
  jobRoute.addChildren([
    ProposalJobList(jobRoute, job), // use ProposalJobList instead of ProposalList
    ProposalDetail(jobRoute),
  ])

  return jobRoute
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  proposalIndexRoute,
  ...proposalRoutes,
])
export default routeTree
