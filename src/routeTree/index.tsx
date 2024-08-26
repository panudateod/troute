import App from "@/components/App"
import DepartmentList from "@/components/departments/DepartmentList"
import DepartmentOverview from "@/components/departments/DepartmentOverview"
import DepartmentSettings from "@/components/departments/DepartmentSettings"
import DepartmentLayout from "@/components/layouts/DepartmentLayout"
import ContractProposalDetail from "@/components/proposals/ContractProposalDetail"
import ProposalDetail from "@/components/proposals/ProposalDetail"
import ProposalJobList from "@/components/proposals/ProposalJobList"
import ProposalList from "@/components/proposals/ProposalList"
import "@mantine/core/styles.css"
import { createRoute, Link, Route } from "@tanstack/react-router"
import { proposalJobs } from "./jobs/proposalJobs"

const rootRoute = App()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
        <Link to={"/d"}>สำนัก</Link>
      </div>
    )
  },
})

// All departments
const d = DepartmentLayout(rootRoute)

const departmentIndexRoute = createRoute({
  getParentRoute: () => d,
  path: "d",
}) as unknown as Route
departmentIndexRoute.addChildren([
  DepartmentList(departmentIndexRoute),
  DepartmentOverview(departmentIndexRoute),
  DepartmentSettings(departmentIndexRoute),
])

// All proposals
const proposalIndexRoute = createRoute({
  getParentRoute: () => d,
  path: "d/$departmentId/proposals",
}) as unknown as Route
proposalIndexRoute.addChildren([
  ProposalList(proposalIndexRoute),
  ProposalDetail(proposalIndexRoute),
  ContractProposalDetail(proposalIndexRoute),
])

// Proposals by jobs
const proposalRoutes: Route[] = proposalJobs.map((job) => {
  const jobRoute = createRoute({
    getParentRoute: () => d,
    path: `d/$departmentId/proposals/${job.path}`,
  }) as unknown as Route
  jobRoute.addChildren([
    ProposalJobList(jobRoute, job), // use ProposalJobList instead of ProposalList
    ProposalDetail(jobRoute),
    ContractProposalDetail(jobRoute),
  ])

  return jobRoute
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  d,
  departmentIndexRoute,
  proposalIndexRoute,
  ...proposalRoutes,
])
export default routeTree
