import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { allFieldsList, jobFieldsMap } from "./fields"

export type ProposalItemType = {
  id: number
  name: string
}

export type JobType = keyof typeof jobFieldsMap

export default function ProposalItem({
  item,
  job,
}: {
  item: ProposalItemType
  job?: JobType
}) {
  const displayFields = job ? jobFieldsMap[job].fields : allFieldsList
  const to = job ? `/proposals/${job}/${item.id}` : `/proposals/${item.id}`

  return (
    <Table.Tr>
      <Table.Td>
        <Link to={to}>{item.name}</Link>
      </Table.Td>
      {displayFields.map((field) => (
        <Table.Td key={field.code}>{field.comp}</Table.Td>
      ))}
    </Table.Tr>
  )
}
