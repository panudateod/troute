import { ProposalItemType } from "@/components/proposals/ProposalItem/types"

export function getProposals() {
  const mockProposals: ProposalItemType[] = Array.from({ length: 50 }).map(
    (_, index) => ({
      id: index + 1,
      proposal: {
        name: `ข้อเสนอฯ ${index + 1}`,
      },
      contractProposal:
        index % 2 === 0
          ? { name: `ข้อเสนอฯ กำลังปรับปรุง ${index + 1}` }
          : undefined,
    }),
  )

  // TODO: fetch proposals from API

  return mockProposals
}
