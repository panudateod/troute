import { proposalItemDefinationFields } from "@/components/proposals/fields"
import { _ProposalJobType, ProposalJobType } from "./proposalJobs.types"

const _proposalJobs: _ProposalJobType[] = [
  {
    path: "screening",
    fields: ["tor", "screeningStatus"],
  },
  {
    path: "assessment",
    fields: [
      "assessmentStatus",
      "assessmentDataAttachment",
      "assessmentDataSugesstion",
    ],
  },
  {
    path: "improvement",
    fields: ["contentStatus", "financeStatus", "contractStatus"],
  },
  {
    path: "payment-term",
    fields: ["paymentTerm"],
  },
  {
    path: "document-follow-up",
    fields: [
      "contentStatus",
      "financeStatus",
      "contractStatus",
      "|",
      "paymentTerm",
    ],
    majorFields: ["contractStatus"],
  },
  {
    path: "contract",
    fields: [
      "contractCodeApproval",
      "directorApproval",
      "secretaryApproval",
      "executiveApproval",
      "contractGenerate",
      "contractDocument",
      "|",
      "bankAccount",
    ],
  },
]

function getFieldsByJob(job: _ProposalJobType) {
  return proposalItemDefinationFields.filter((field) =>
    job.fields.includes(field.code),
  )
}

export const proposalJobs: ProposalJobType[] = _proposalJobs.map((job) => ({
  path: job.path,
  fields: getFieldsByJob(job),
}))

// const proposalJobsMap = Object.fromEntries(proposalJobs.map((job) => [job.path, job]))
export const proposalAllJob: ProposalJobType = {
  fields: proposalItemDefinationFields,
}
