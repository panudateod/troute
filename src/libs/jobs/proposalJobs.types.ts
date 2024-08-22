import {
  ProposalItemFieldCode,
  ProposalItemFieldType,
} from "@/components/proposals/types"

export type ProposalJobPath =
  | "screening"
  | "assessment"
  | "improvement"
  | "payment-term"
  | "document-follow-up"
  | "contract"
  | "contract-ready"
  | "contract-approved"
  | "approval"

export type _ProposalJobType = {
  path: ProposalJobPath
  fields: ProposalItemFieldCode[]
  majorFields?: ProposalItemFieldCode[]
}

export type ProposalJobType = {
  path?: ProposalJobPath
  fields: ProposalItemFieldType[]
  majorFields?: ProposalItemFieldCode[]
}
