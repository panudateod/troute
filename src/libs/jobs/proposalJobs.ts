import {
  definationFields,
  definationFieldsMap,
} from "@/components/proposals/ProposalItem/fields"
import { DefinitionJobType, ProposalJobType } from "./proposalJobs.types"

const definitionJobs: DefinitionJobType[] = [
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

export const proposalJobs: ProposalJobType[] = definitionJobs.map((job) => ({
  path: job.path,
  fields: job.fields.map((fieldCode) => definationFieldsMap[fieldCode]),
}))

// const proposalJobsMap = Object.fromEntries(proposalJobs.map((job) => [job.path, job]))
export const proposalAllJob: ProposalJobType = {
  fields: definationFields,
}
