import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { allFieldsList, JobType } from "./fields"
import { ProposalItemType } from "./types"

type Props = {
  item: ProposalItemType
  departmentId: number
  job?: JobType
}

function getItemUrl(props: Props) {
  const { item, departmentId, job } = props
  return `/d/${departmentId}/proposals/${job ? `${job.path}/` : ""}${item.id}`
}

export default function ProposalItem(props: Props) {
  const { item, job } = props

  const displayFields = job ? job.fields : allFieldsList

  // TODO: check case has conteact proposal append /i after $proposalId
  return (
    <Table.Tr>
      <Table.Td>
        <Link to={getItemUrl(props)}>{item.name}</Link>
      </Table.Td>
      {displayFields.map((field) => (
        <Table.Td key={field.code}>{field.comp}</Table.Td>
      ))}
    </Table.Tr>
  )
}
