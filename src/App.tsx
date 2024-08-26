import "@mantine/core/styles.css"
import { createRootRoute, Outlet, Route } from "@tanstack/react-router"

export default function App() {
  const rootRoute = createRootRoute({
    component: Comp,
  })

  function Comp() {
    return (
      <>
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </>
    )
  }
  return rootRoute as unknown as Route
}
