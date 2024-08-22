import { ProposalJobType } from "@/libs/jobs/proposalJobs.types"
import { Table } from "@mantine/core"
import { createRoute, Route } from "@tanstack/react-router"
import ProposalItem from "./ProposalItem"
import { ProposalItemType } from "./types"

function getProposals() {
  const mockProposals: ProposalItemType[] = Array.from({ length: 50 }).map(
    (_, index) => ({
      id: index + 1,
      name: `Proposal ${index + 1}`,
    }),
  )

  // TODO: fetch proposals from API

  return mockProposals
}

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

  function Comp() {
    const proposals = getProposals()
    const headerFields = job.fields
    const { departmentId } = listRoute.useParams()

    return (
      <>
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
