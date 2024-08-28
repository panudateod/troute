import DetailModal from "@/components/shared/DetailModal"
import { getProposals } from "@/libs/mocks/proposals"
import { proposalAllJob } from "@/routeTree/jobs/proposalJobs"
import { createRoute, Outlet, Route } from "@tanstack/react-router"
import ContractProposalDetail from "./ContractProposalDetail"
import ProposalDetail from "./ProposalDetail"
import ProposalItems from "./ProposalItems"

export default function ProposalList(parentRoute: Route) {
  // const job = "screening" // TODO: find job from url

  const listRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: "/",
    component: Comp,
  })

  listRoute.addChildren([
    ProposalDetail(listRoute),
    ContractProposalDetail(listRoute),
  ])

  function Comp() {
    const proposals = getProposals()
    const job = proposalAllJob
    const { departmentId, proposalId } = listRoute.useParams()

    return (
      <>
        <div className="content-list">
          <h1>Header, filter by jobs</h1>
          <ProposalItems
            departmentId={departmentId}
            job={job}
            items={proposals}
          />
        </div>
        <DetailModal opened={proposalId}>
          <Outlet />
        </DetailModal>
      </>
    )
  }

  return listRoute
}
