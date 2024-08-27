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
    title: "คัดกรอง",
    path: "screening",
    fields: ["tor", "screeningStatus"],
  },
  {
    title: "กลั่นกรอง",
    path: "assessment",
    fields: [
      "assessmentStatus",
      "assessmentDataAttachment",
      "assessmentDataSugesstion",
    ],
  },
  {
    title: "ปรับปรุง",
    path: "improvement",
    fields: ["contentStatus", "financeStatus", "contractStatus"],
  },
  {
    title: "ตรวจเอกสาร",
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
    title: "กำหนดงวดงาน/งวดเงิน",
    path: "payment-term",
    fields: ["paymentTerm"],
  },
  {
    title: "ทั้งหมด",
    path: "contract",
    fields: contractFields,
  },
  {
    title: "ทำสัญญา",
    path: "contract-ready",
    fields: contractFields,
  },
  {
    title: "อนุมัติ/เห็นชอบสัญญา และเบิกงวด 1",
    path: "contract-approval",
    fields: ["tor", "contractDuration", "budget", "myApproval"],
  },
  {
    title: "พิมพ์สัญญา/แนบสัญญา",
    path: "contract-approved",
    fields: contractFields,
  },
]

export const proposalJobs: ProposalJobType[] = definitionJobs.map((job) => ({
  title: job.title,
  path: job.path,
  fields: job.fields.map((fieldCode) => definationFieldsMap[fieldCode]),
}))

export const proposalAllJob: ProposalJobType = {
  title: "ทั้งหมด",
  fields: definationFields,
}
