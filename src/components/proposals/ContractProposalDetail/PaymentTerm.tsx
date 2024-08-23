import { createRoute, Route } from "@tanstack/react-router"

export default function PaymentTerm(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `payment-term`,
    component: Comp,
  })

  function Comp() {
    return <h1>งวดงาน/งวดเงิน</h1>
  }

  return route
}
