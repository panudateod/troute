export type ProposalItemType = {
  id: number
  proposal: {
    name: string
  }
  contractProposal?: {
    name: string
  }
  contract?: {
    contractCode: string
  }
}

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
