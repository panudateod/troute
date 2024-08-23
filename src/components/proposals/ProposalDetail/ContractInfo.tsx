import { createRoute, Route } from "@tanstack/react-router"

export default function ContractInfo(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `contract-info`,
    component: Comp,
  })

  function Comp() {
    return <h1>เอกสารทำสัญญา</h1>
  }

  return route
}
