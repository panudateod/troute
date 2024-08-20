import { AppShell, Box } from "@mantine/core"
import { createRoute, Link, Route } from "@tanstack/react-router"

export default function DepartmentDetail(parentRoute: Route) {
  const detailRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: `/$departmentId`,
    component: Comp,
  })

  function Comp() {
    return (
      <AppShell
        layout="alt"
        navbar={{
          width: 100,
          breakpoint: "sm",
        }}
        padding="md"
      >
        <AppShell.Navbar>
          <Box bg="blue.3" p="md" mb="xs">
            <Link to={""}>มอบหมาย</Link>
          </Box>
          <Box bg="blue.3" p="md" mb="xs">
            <Link to="">ตั้งค่า</Link>
          </Box>
        </AppShell.Navbar>
        <AppShell.Header bg="red.3">
          <Box ml="xxl">
            <Link to={parentRoute.fullPath} resetScroll={false}>
              X
            </Link>
          </Box>
          Department Header
        </AppShell.Header>
        <AppShell.Main>
          <h1>Department Detail</h1>
        </AppShell.Main>
      </AppShell>
    )
  }

  return detailRoute
}
