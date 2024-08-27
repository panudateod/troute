import { getProposals } from "@/libs/mocks/proposals"
import { ProposalJobType } from "@/routeTree/jobs/proposalJobs.types"
import { Table } from "@mantine/core"
import { createRoute, Outlet, Route } from "@tanstack/react-router"
import ContractProposalDetail from "./ContractProposalDetail"
import ProposalDetail from "./ProposalDetail"
import ProposalItem from "./ProposalItem"

export default function ProposalJobList(
  parentRoute: Route,
  job: ProposalJobType,
) {
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
    const headerFields = job.fields
    const { departmentId } = listRoute.useParams()

    return (
      <>
        <div className="content-list">
          <h1>{job.title}</h1>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ชื่อโครงการ</Table.Th>
                {headerFields.map((field) => (
                  <Table.Th key={field.code}>{field.label}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {proposals.map((item) => (
                <ProposalItem
                  key={item.id}
                  item={item}
                  departmentId={departmentId}
                  job={job}
                />
              ))}
            </Table.Tbody>
          </Table>
        </div>
        <Outlet />
      </>
    )
  }

  return listRoute
}
