import { AppShell, Box } from "@mantine/core"
import "@mantine/core/styles.css"
import { createRoute, Link, Outlet, Route } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
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
            <Box bg="blue.3" p="md" mb="xs">
              TORs
            </Box>
            <hr />
            <Box bg="blue.3" p="md" mb="xs">
              <Link to="/d/1/proposals">Proposals [all]</Link>
            </Box>
            <Box bg="blue.3" p="md" mb="xs">
              <Link
                to="/d/1/proposals/screening"
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
                to="/d/1/proposals/assessment"
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
            <hr />
            <Box bg="blue.3" p="md" mb="xs">
              <Link to="/d">Departments</Link>
            </Box>
          </AppShell.Navbar>
          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
        <TanStackRouterDevtools />
      </>
    )
  }

  return layoutRoute as unknown as Route
}
