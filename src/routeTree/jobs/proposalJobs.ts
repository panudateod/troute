import {
  definationFields,
  definationFieldsMap,
} from "@/components/proposals/ProposalItem/fields"
import { ProposalItemFieldCode } from "@/components/proposals/ProposalItem/types"
import { DefinitionJobType, ProposalJobType } from "./proposalJobs.types"

const contractFields: ProposalItemFieldCode[] = [
  "contractCodeApproval",
  "directorApproval",
  "secretaryApproval",
  "executiveApproval",
  "contractGenerate",
  "contractDocument",
  // "|",  TODO: spliter field
  "bankAccount",
]

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
      // "|",  TODO: spliter field
      "paymentTerm",
    ],
    majorFields: ["contractStatus"],
  },
  {
    path: "contract",
    fields: contractFields,
  },
  {
    path: "contract-ready",
    fields: contractFields,
  },
  {
    path: "contract-approval",
    fields: ["tor", "contractDuration", "budget", "myApproval"],
  },
  {
    path: "contract-approved",
    fields: contractFields,
  },
]

export const proposalJobs: ProposalJobType[] = definitionJobs.map((job) => ({
  path: job.path,
  fields: job.fields.map((fieldCode) => definationFieldsMap[fieldCode]),
}))

export const proposalAllJob: ProposalJobType = {
  fields: definationFields,
}
