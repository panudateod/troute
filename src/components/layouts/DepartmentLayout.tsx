import { AppShell, Box, Overlay } from "@mantine/core"
import "@mantine/core/styles.css"
import { createRoute, Link, Outlet, Route } from "@tanstack/react-router"
import { useState } from "react"

export default function DepartmentLayout(parentRoute: Route) {
  const layoutRoute = createRoute({
    getParentRoute: () => parentRoute,
    id: "d",
    component: Comp,
  })

  function Comp() {
    const [submenuOpen, setSubmenuOpen] = useState({
      screening: false,
      assessment: false,
    })

    const { departmentId } = layoutRoute.useParams()

    return (
      <>
        <AppShell
          layout="alt"
          navbar={{
            width: 100,
            breakpoint: "sm",
          }}
        >
          <AppShell.Navbar>
            <div
              className="department-required"
              style={{ position: "relative" }}
            >
              <Box bg="blue.3" p="md" mb="xs">
                TORs
              </Box>
              <hr />
              <Box bg="blue.3" p="md" mb="xs">
                <Link to={`/d/${departmentId}/proposals`}>Proposals [all]</Link>
              </Box>
              <Box bg="blue.3" p="md" mb="xs">
                <Link
                  to={`/d/${departmentId}/proposals/screening`}
                  onClick={() =>
                    setSubmenuOpen({
                      ...submenuOpen,
                      screening: !submenuOpen.screening,
                    })
                  }
                >
                  Proposals [screening]
                </Link>
              </Box>
              {submenuOpen.screening && (
                <Box bg="blue.3" p="md" mb="xs">
                  - screening sub
                </Box>
              )}
              <Box bg="blue.3" p="md" mb="xs">
                <Link
                  to={`/d/${departmentId}/proposals/assessment`}
                  onClick={() =>
                    setSubmenuOpen({
                      ...submenuOpen,
                      assessment: !submenuOpen.assessment,
                    })
                  }
                >
                  Proposals [assessment]
                </Link>
              </Box>
              {submenuOpen.assessment && (
                <Box bg="blue.3" p="md" mb="xs">
                  - assessment sub
                </Box>
              )}
              <Box bg="blue.3" p="md" mb="xs">
                Proposals [improvement]
              </Box>
              <hr />
              <Box bg="blue.3" p="md" mb="xs">
                Project [all]
              </Box>
              {!departmentId && (
                <Overlay color="#FFF" backgroundOpacity={0.5} />
              )}
            </div>
            <hr />
            <Box bg="blue.3" p="md" mb="xs">
              <Link to="/d">Departments</Link>
            </Box>
            <Box bg="blue.3" p="md" mb="xs">
              <Link to="/p">Switch to Partner Mode</Link>
            </Box>
          </AppShell.Navbar>
          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
      </>
    )
  }

  return layoutRoute as unknown as Route
}
