import {
  ProposalItemFieldCode,
  ProposalItemFieldType,
} from "@/components/proposals/ProposalItem/types"

export type JobPath =
  | "screening"
  | "assessment"
  | "improvement"
  | "payment-term"
  | "document-follow-up"
  | "contract"
  | "contract-ready"
  | "contract-approval"
  | "contract-approved"

export type DefinitionJobType = {
  title: string
  path: JobPath
  fields: ProposalItemFieldCode[]
  majorFields?: ProposalItemFieldCode[]
}

export type ProposalJobType = {
  title: string
  path?: JobPath
  fields: ProposalItemFieldType[]
  majorFields?: ProposalItemFieldCode[]
}
