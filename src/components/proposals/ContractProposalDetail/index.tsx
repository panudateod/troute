import { createRoute, Route } from "@tanstack/react-router"
import App from "../ProposalDetail/App"
import Content from "../ProposalDetail/Content"
import Contract from "../ProposalDetail/Contract"
import Finance from "../ProposalDetail/Finance"
import Overview from "../ProposalDetail/Overview"
import PaymentTerm from "./PaymentTerm"

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
    Contract(route),
    PaymentTerm(route),
  ])

  function Comp() {
    return <App route={route} parentRoute={parentRoute} />
  }
  return route
}
