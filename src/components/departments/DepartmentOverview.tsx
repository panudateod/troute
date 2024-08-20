import { createRoute, Route } from "@tanstack/react-router"

export default function DepartmentOverview(parentRoute: Route) {
  const overvewRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: "$departmentId",
    component: Comp,
  })

  function Comp() {
    return (
      <div>
        <h1>Overview</h1>
        <ul>
          <li>TORs</li>
          <li>Proposal [all]</li>
          <li>Proposal [screening]</li>
          <li>...</li>
        </ul>
      </div>
    )
  }

  return overvewRoute as unknown as Route
}
