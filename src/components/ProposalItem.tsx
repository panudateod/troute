import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"

export const jobFieldsList = [
  {
    path: "screening",
    fields: [
      {
        code: "selectTOR",
        label: <>select TOR</>,
        comp: <>select TOR</>, // import from another file
      },
      {
        code: "screeningStatus",
        label: <>screening status</>,
        comp: <>screening status</>, // import from another file
      },
      {
        code: "screeningFile",
        label: <>screening file</>,
        comp: <>screening file</>, // import from another file
      },
    ],
  },
  {
    path: "assessment",
    fields: [
      {
        code: "assessmentStatus",
        label: <>assessment status</>,
        comp: <>assessment status</>, // import from another file
      },
      {
        code: "assessmentScore",
        label: <>assessment score</>,
        comp: <>assessment score</>, // import from another file
      },
    ],
  },
]

export const jobFieldsMap = Object.fromEntries(
  jobFieldsList.map((job) => [job.path, job]),
)

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
  job: JobType
}) {
  const displayFields = jobFieldsMap[job].fields

  return (
    <Table.Tr>
      <Table.Td>
        <Link to={`/proposals/${job}/${item.id}`}>{item.name}</Link>
      </Table.Td>
      {displayFields.map((field) => (
        <Table.Td key={field.code}>{field.comp}</Table.Td>
      ))}
    </Table.Tr>
  )
}
