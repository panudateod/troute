import { ProposalJobType } from "@/routeTree/jobs/proposalJobs.types"
import { Table } from "@mantine/core"
import ProposalItem from "./ProposalItem"
import { ProposalItemType } from "./ProposalItem/types"

type Props = {
  departmentId: number
  job: ProposalJobType
  items: ProposalItemType[]
}
function ProposalItems({ departmentId, job, items }: Props) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ชื่อโครงการ</Table.Th>
          {job.fields.map((field) => (
            <Table.Th key={field.code}>{field.label}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items.map((item) => (
          <ProposalItem
            key={item.id}
            item={item}
            departmentId={departmentId}
            job={job}
          />
        ))}
      </Table.Tbody>
    </Table>
  )
}

export default ProposalItems
