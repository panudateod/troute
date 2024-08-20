import { Table } from "@mantine/core"
import { createRoute, Route } from "@tanstack/react-router"
import ProposalItem, { DepartmentItemType } from "./DepartmentItem"

function getDepartments() {
  const mockProposals: DepartmentItemType[] = Array.from({ length: 10 }).map(
    (_, index) => ({
      id: index + 1,
      name: `Department ${index + 1}`,
    }),
  )

  // TODO: fetch proposals from API

  return mockProposals
}

export default function DepartmentList(indexRoute: Route) {
  // const job = "screening" // TODO: find job from url

  const listRoute = createRoute({
    getParentRoute: () => indexRoute,
    path: "/",
    component: Comp,
  })

  function Comp() {
    const proposals = getDepartments()

    return (
      <>
        <h3>Header Filter by status</h3>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ชื่อโครงการ</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {proposals.map((item) => (
              <ProposalItem key={item.id} item={item} />
            ))}
          </Table.Tbody>
        </Table>
      </>
    )
  }

  return listRoute
}
