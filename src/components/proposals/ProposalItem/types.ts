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
  // | "|" // spliter field
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
  | "contractDuration"
  | "contractUpdatedAt"
  | "budget"
  | "paymentTerm"
  | "paymentTermCompletedAt"
  | "contractCodeApproval"
  | "directorApproval"
  | "secretaryApproval"
  | "executiveApproval"
  | "myApproval" // magic field for current user, combine/switch with directorApproval, secretaryApproval, executiveApproval
  | "contractGenerate"
  | "contractDocument"
  | "bankAccount"

export type ProposalItemFieldType = {
  code: ProposalItemFieldCode
  label: JSX.Element
  comp: (item: ProposalItemType, hasPermissions: string[]) => JSX.Element
  inActive?: boolean
}
