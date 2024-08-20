import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"

export type DepartmentItemType = {
  id: number
  name: string
}

export default function DepartmentItem({ item }: { item: DepartmentItemType }) {
  return (
    <Table.Tr>
      <Table.Td>
        <Link to={`/d/${item.id}`}>{item.name}</Link>
      </Table.Td>
    </Table.Tr>
  )
}
