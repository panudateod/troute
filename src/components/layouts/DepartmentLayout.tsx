import { AppShell, Box, Center, Menu, Tooltip } from "@mantine/core"
import "@mantine/core/styles.css"
import {
  IconContract,
  IconFolderCheck,
  IconHome,
  IconNotes,
  IconReportAnalytics,
  IconRosetteDiscountCheck,
  IconSettings,
} from "@tabler/icons-react"
import { createRoute, Link, Outlet, Route } from "@tanstack/react-router"

export default function DepartmentLayout(parentRoute: Route) {
  const layoutRoute = createRoute({
    getParentRoute: () => parentRoute,
    id: "d",
    component: Comp,
  })

  function Comp() {
    const { departmentId } = layoutRoute.useParams()

    // const location = useLocation()

    return (
      <>
        <AppShell
          layout="alt"
          transitionDuration={0}
          navbar={{
            width: 100,
            breakpoint: "sm",
          }}
        >
          <AppShell.Navbar>
            <Tooltip label="หน้าแรก">
              <Center>
                <Box
                  component={Link}
                  bg="gray.3"
                  px="md"
                  py="xs"
                  m="xs"
                  to={`/d/${departmentId}`}
                >
                  <IconHome />
                </Box>
              </Center>
            </Tooltip>
            <hr />
            <div
              className="department-required"
              style={{ position: "relative" }}
            >
              <Menu
                position="right-start"
                trigger="click-hover"
                closeOnItemClick={false}
              >
                <Menu.Target>
                  <Tooltip label="TOR">
                    <Center>
                      <Box component={Link} bg="gray.3" px="md" py="xs" m="xs">
                        <IconFolderCheck />
                      </Box>
                    </Center>
                  </Tooltip>
                </Menu.Target>
                <Menu.Dropdown>
                  <Link to={`/d/${departmentId}/term-of-references`}>
                    <Menu.Item>ทั้งหมด</Menu.Item>
                  </Link>
                </Menu.Dropdown>
              </Menu>
              <Menu
                position="right-start"
                trigger="click-hover"
                closeOnItemClick={false}
              >
                <Menu.Target>
                  <Tooltip label="ข้อเสนอฯ">
                    <Center>
                      <Box component={Link} bg="gray.3" px="md" py="xs" m="xs">
                        <IconNotes />
                      </Box>
                    </Center>
                  </Tooltip>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/screening`}
                  >
                    คัดกรอง
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/assessment`}
                  >
                    กลั่นกรอง
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/improvement`}
                  >
                    ปรับปรุง
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/document-follow-up`}
                  >
                    ปรับปรุง
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals`}
                  >
                    ทั้งหมด
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Menu
                position="right-start"
                trigger="click-hover"
                closeOnItemClick={false}
              >
                <Menu.Target>
                  <Tooltip label="สัญญา">
                    <Center>
                      <Box component={Link} bg="gray.3" px="md" py="xs" m="xs">
                        <IconContract />
                      </Box>
                    </Center>
                  </Tooltip>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/payment-term`}
                  >
                    กำหนดงวดงาน/งวดเงิน
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/contract-ready`}
                  >
                    ทำสัญญา
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/contract-approval`}
                  >
                    อนุมัติ/เห็นชอบสัญญา และเบิกงวด 1
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/contract-approved`}
                  >
                    พิมพ์สัญญา/แนบสัญญา
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to={`/d/${departmentId}/proposals/contract`}
                  >
                    ทั้งหมด
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Menu
                position="right-start"
                trigger="click-hover"
                closeOnItemClick={false}
              >
                <Menu.Target>
                  <Tooltip label="รายงาน">
                    <Center>
                      <Box component={Link} bg="gray.3" px="md" py="xs" m="xs">
                        <IconReportAnalytics />
                      </Box>
                    </Center>
                  </Tooltip>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component={Link} to={`#`}>
                    ...
                  </Menu.Item>
                  <Menu.Item component={Link} to={`#`}>
                    ...
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Menu
                position="right-start"
                trigger="click-hover"
                closeOnItemClick={false}
              >
                <Menu.Target>
                  <Tooltip label="เบิกจ่าย">
                    <Center>
                      <Box component={Link} bg="gray.3" px="md" py="xs" m="xs">
                        <IconRosetteDiscountCheck />
                      </Box>
                    </Center>
                  </Tooltip>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component={Link} to={`#`}>
                    ...
                  </Menu.Item>
                  <Menu.Item component={Link} to={`#`}>
                    ...
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <hr />
            <Menu
              position="right-start"
              trigger="click-hover"
              closeOnItemClick={false}
            >
              <Menu.Target>
                <Tooltip label="ตั้งค่า">
                  <Center>
                    <Box component={Link} bg="gray.3" px="md" py="xs" m="xs">
                      <IconSettings />
                    </Box>
                  </Center>
                </Tooltip>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item component={Link} to={`/d`}>
                  เลือกสำนัก
                </Menu.Item>
                <Menu.Item component={Link} to={`/p`}>
                  ดูในมุมภาคี
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
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
