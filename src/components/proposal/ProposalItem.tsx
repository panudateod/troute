import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { allFieldsList, JobType } from "./fields"

export type ProposalItemType = {
  id: number
  name: string
}

export default function ProposalItem({
  item,
  job,
}: {
  item: ProposalItemType
  job?: JobType
}) {
  const displayFields = job ? job.fields : allFieldsList
  const to = job ? `/proposals/${job.path}/${item.id}` : `/proposals/${item.id}`
  // TODO: check case has conteact proposal append /i after $proposalId
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
