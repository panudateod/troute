import { Table } from "@mantine/core"
import { createRoute, Route } from "@tanstack/react-router"
import ProposalItem, { ProposalItemType } from "./ProposalItem"
import { allFieldsList } from "./fields"

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

export default function ProposalList(parentRoute: Route) {
  // const job = "screening" // TODO: find job from url

  const listRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: "/",
    component: Comp,
  })

  function Comp() {
    const proposals = getProposals()
    const headerFields = allFieldsList
    const { departmentId } = listRoute.useParams()

    return (
      <>
        <h3>Header Filter by status</h3>
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
              />
            ))}
          </Table.Tbody>
        </Table>
      </>
    )
  }

  return listRoute
}
