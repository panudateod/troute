import { Table } from "@mantine/core"
import ProposalItem, {
  JobType,
  ProposalItemType,
  configFields,
} from "./ProposalItem"

function getProposals() {
  const mockProposals: ProposalItemType[] = Array.from({ length: 10 }).map(
    (_, index) => ({
      id: index + 1,
      name: `Proposal ${index + 1}`,
    }),
  )

  // TODO: fetch proposals from API

  return mockProposals
}

export default function ProposalList(job: JobType) {
  // const job = "screening" // TODO: find job from url

  return function Comp() {
    const proposals = getProposals()
    const displayFields = configFields[job]
    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ชื่อโครงการ</Table.Th>
            {displayFields.map((field) => (
              <Table.Th key={field}>{field}</Table.Th>
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
}
