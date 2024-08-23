import { getProposals } from "@/libs/mocks/proposals"
import { proposalAllJob } from "@/routeTree/jobs/proposalJobs"
import { Table } from "@mantine/core"
import { createRoute, Route } from "@tanstack/react-router"
import ProposalItem from "./ProposalItem"

export default function ProposalList(parentRoute: Route) {
  // const job = "screening" // TODO: find job from url

  const listRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: "/",
    component: Comp,
  })

  function Comp() {
    const proposals = getProposals()
    const job = proposalAllJob
    const headerFields = job.fields
    const { departmentId } = listRoute.useParams()

    return (
      <>
        <h1>Header, filter by jobs</h1>
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
      </>
    )
  }

  return listRoute
}
