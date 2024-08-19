import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"

export const configFields = {
  screening: ["select TOR", "screening status", "screening file"],
  assessment: ["assessment status", "assessment score"],
}

export type ProposalItemType = {
  id: number
  name: string
}

export type JobType = keyof typeof configFields

export default function ProposalItem({
  item,
  job,
}: {
  item: ProposalItemType
  job: JobType
}) {
  const displayFields = configFields[job]

  return (
    <Table.Tr>
      <Table.Td>
        <Link to={`/proposals/${job}/${item.id}`}>{item.name}</Link>
      </Table.Td>
      {displayFields.map((field) => (
        <Table.Td key={field}>{field}</Table.Td>
      ))}
    </Table.Tr>
  )
}
