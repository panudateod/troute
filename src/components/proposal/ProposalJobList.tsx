import { Table } from "@mantine/core"
import { createRoute, Route } from "@tanstack/react-router"
import ProposalItem, { JobType, ProposalItemType } from "./ProposalItem"
import { jobFieldsMap } from "./fields"

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

export default function ProposalJobList(parentRoute: Route, job: JobType) {
  // const job = "screening" // TODO: find job from url

  const listRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: "/",
    component: Comp,
  })

  function Comp() {
    const proposals = getProposals()
    const headerFields = jobFieldsMap[job].fields

    return (
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
            <ProposalItem key={item.id} item={item} job={job} />
          ))}
        </Table.Tbody>
      </Table>
    )
  }

  return listRoute
}
