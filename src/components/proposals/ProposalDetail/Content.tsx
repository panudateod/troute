import { createRoute, Route } from "@tanstack/react-router"

export default function Content(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `content`,
    component: Comp,
  })

  function Comp() {
    return <h1>ข้อเสนอฯ/คำรับรอง</h1>
  }

  return route
}
