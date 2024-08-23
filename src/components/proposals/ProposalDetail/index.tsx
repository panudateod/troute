import { createRoute, Route } from "@tanstack/react-router"
import App from "./App"
import Content from "./Content"
import ContractInfo from "./ContractInfo"
import Finance from "./Finance"
import ProposalNav from "./Nav"
import Overview from "./Overview"

export default function ProposalDetail(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `$proposalId`,
    component: Comp,
  }) as unknown as Route

  route.addChildren([
    Overview(route),
    Content(route),
    Finance(route),
    ContractInfo(route),
  ])

  function Comp() {
    return (
      <App
        route={route}
        parentRoute={parentRoute}
        proposalNav={<ProposalNav route={route} />}
      />
    )
  }

  return route
}
