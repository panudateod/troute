import {
  ProposalItemFieldCode,
  ProposalItemFieldType,
} from "@/components/proposals/types"

export type JobPath =
  | "screening"
  | "assessment"
  | "improvement"
  | "payment-term"
  | "document-follow-up"
  | "contract"
  | "contract-ready"
  | "contract-approved"
  | "approval"

export type DefinitionJobType = {
  path: JobPath
  fields: ProposalItemFieldCode[]
  majorFields?: ProposalItemFieldCode[]
}

export type ProposalJobType = {
  path?: JobPath
  fields: ProposalItemFieldType[]
  majorFields?: ProposalItemFieldCode[]
}
