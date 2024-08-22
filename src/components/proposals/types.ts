export type ProposalItemType = {
  id: number
  name: string
}

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

export type ProposalItemFieldCode =
  | "|" // spliter field
  | "tor"
  | "submissionUpdatedAt"
  | "screeningStatus"
  | "screeningDataAttachment"
  | "assessmentStatus"
  | "assessmentDataAttachment"
  | "assessmentDataSugesstion"
  | "assessmentScore"
  | "contentStatus"
  | "contentUpdatedAt"
  | "financeStatus"
  | "financeUpdatedAt"
  | "contractStatus"
  | "contractUpdatedAt"
  | "paymentTerm"
  | "paymentTermCompletedAt"
  | "contractCodeApproval"
  | "directorApproval"
  | "secretaryApproval"
  | "executiveApproval"
  | "contractGenerate"
  | "contractDocument"
  | "bankAccount"

export type ProposalItemFieldType = {
  code: ProposalItemFieldCode
  label: JSX.Element
  comp: (item: ProposalItemType) => JSX.Element
  inActive?: boolean
}
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
