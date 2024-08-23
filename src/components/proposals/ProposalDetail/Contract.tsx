import { createRoute, Route } from "@tanstack/react-router"

export default function Contract(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `contract`,
    component: Comp,
  })

  function Comp() {
    return <h1>เอกสารจัดทำสัญญา</h1>
  }

  return route
}
