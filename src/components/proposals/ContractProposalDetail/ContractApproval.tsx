import { createRoute, Route } from "@tanstack/react-router"

export default function PaymentTerm(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `contract-approval`,
    component: Comp,
  })

  function Comp() {
    return <h1>ทำสัญญา</h1>
  }

  return route
}
