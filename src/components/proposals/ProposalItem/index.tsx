import { ProposalJobType } from "@/libs/jobs/proposalJobs.types"
import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { ProposalItemType } from "./types"

type Props = {
  item: ProposalItemType
  departmentId: number
  job: ProposalJobType
}

function getItemUrl(props: Props) {
  const { item, departmentId, job } = props
  // TODO: check case contract proposal append /i after $proposalId
  return `/d/${departmentId}/proposals/${job.path ? `${job.path}/` : ""}${item.id}`
}

export default function ProposalItem(props: Props) {
  const { item, job } = props

  // TODO: check case has conteact proposal append /i after $proposalId
  return (
    <Table.Tr>
      <Table.Td>
        <Link to={getItemUrl(props)}>{item.name}</Link>
      </Table.Td>
      {job.fields.map((field) => (
        <Table.Td key={field.code}>{field.comp(item)}</Table.Td>
      ))}
    </Table.Tr>
  )
}
