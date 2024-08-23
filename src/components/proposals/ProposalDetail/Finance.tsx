import { createRoute, Route } from "@tanstack/react-router"

export default function Finance(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `finance`,
    component: Comp,
  })

  function Comp() {
    return <h1>เงิน</h1>
  }

  return route
}
