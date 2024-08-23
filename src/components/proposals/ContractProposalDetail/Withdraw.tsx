import { createRoute, Route } from "@tanstack/react-router"

export default function Withdraw(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `withdraw`,
    component: Comp,
  })

  function Comp() {
    return <h1>เบิกเงิน</h1>
  }

  return route
}
