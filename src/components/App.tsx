import "@/styles.css"
import "@mantine/core/styles.css"
import { createRootRoute, Outlet, Route } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export default function App() {
  const rootRoute = createRootRoute({
    component: Comp,
  })

  function Comp() {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
  }
  return rootRoute as unknown as Route
}
