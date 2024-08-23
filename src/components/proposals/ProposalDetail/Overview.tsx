import { createRoute, Route } from "@tanstack/react-router"

export default function Overview(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `/`,
    component: Comp,
  })

  function Comp() {
    return <h1>ภาพรวม</h1>
  }

  return route
}
