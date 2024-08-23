import { createRoute, Route } from "@tanstack/react-router"
import App from "../ProposalDetail/App"
import Content from "../ProposalDetail/Content"
import ContractInfo from "../ProposalDetail/ContractInfo"
import Finance from "../ProposalDetail/Finance"
import ProposalNav from "../ProposalDetail/Nav"
import Overview from "../ProposalDetail/Overview"
import ContractApproval from "./ContractApproval"
import ContractNav from "./Nav"
import PaymentTerm from "./PaymentTerm"
import Withdraw from "./Withdraw"

export default function ContractProposalDetail(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `$proposalId/i`,
    component: Comp,
  }) as unknown as Route

  route.addChildren([
    Overview(route),
    Content(route),
    Finance(route),
    ContractInfo(route),
    PaymentTerm(route),
    ContractApproval(route),
    Withdraw(route),
  ])

  function Comp() {
    return (
      <App
        route={route}
        parentRoute={parentRoute}
        proposalNav={<ProposalNav route={route} />}
        contractNav={<ContractNav route={route} />}
      />
    )
  }
  return route
}
