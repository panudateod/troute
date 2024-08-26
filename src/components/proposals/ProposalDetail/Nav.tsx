import { Box, Center, Menu, Tooltip } from "@mantine/core"
import {
  IconCurrencyBaht,
  IconDashboard,
  IconFileStack,
  IconNotes,
} from "@tabler/icons-react"
import { Link, Route } from "@tanstack/react-router"

type Props = { route: Route }

export default function Nav({ route }: Props) {
  const params = route.useParams()
  return (
    <>
      <Box>
        <Center>ภาพรวม</Center>
      </Box>
      <Link to={`${route.fullPath}`} params={params}>
        <Center>
          <Box bg="gray.3" px="md" py="xs" m="xs">
            <IconDashboard />
          </Box>
        </Center>
      </Link>
      <hr />
      <Box>
        <Center>ข้อเสนอฯ</Center>
      </Box>
      <Menu
        position="right-start"
        trigger="click-hover"
        closeOnItemClick={false}
      >
        <Menu.Target>
          <Tooltip label="ข้อเสนอฯ/คำรับรอง">
            <Center>
              <Box
                bg="gray.3"
                px="md"
                py="xs"
                m="xs"
                component={Link}
                to={`${route.fullPath}/content`}
                params={params}
              >
                <IconNotes />
              </Box>
            </Center>
          </Tooltip>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/content#section--1`}
            params={params}
          >
            ส่วนที่ 1
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/content#section--2`}
            params={params}
          >
            ส่วนที่ 2
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/content#section--3`}
            params={params}
          >
            ส่วนที่ 3
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Menu
        position="right-start"
        trigger="click-hover"
        closeOnItemClick={false}
      >
        <Menu.Target>
          <Tooltip label="แผนงบประมาณ">
            <Center>
              <Box
                bg="gray.3"
                px="md"
                py="xs"
                m="xs"
                component={Link}
                to={`${route.fullPath}/finance`}
                params={params}
              >
                <IconCurrencyBaht />
              </Box>
            </Center>
          </Tooltip>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/finance#section--activities`}
            params={params}
          >
            ค่าใช้จ่ายโครงการ
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/finance#section--compensation-project-personnel`}
            params={params}
          >
            ค่าตอบแทนบุคลากรโครงการ
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/finance#section--administrative-fees`}
            params={params}
          >
            ค่าธรรมเนียมสถาบัน
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/finance#section--summary-expenditures`}
            params={params}
          >
            ค่าธรรมเนียมสถาบัน
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Menu
        position="right-start"
        trigger="click-hover"
        closeOnItemClick={false}
      >
        <Menu.Target>
          <Tooltip label="เอกสารทำสัญญา">
            <Center>
              <Box
                bg="gray.3"
                px="md"
                py="xs"
                m="xs"
                component={Link}
                to={`${route.fullPath}/contract-info`}
                params={params}
              >
                <IconFileStack />
              </Box>
            </Center>
          </Tooltip>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/contract-info#section--information`}
            params={params}
          >
            ข้อมูลทั่วไป
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/contract-info#section--bank-account`}
            params={params}
          >
            รายชื่อผู้เปิดบัญชีธนาคาร
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`${route.fullPath}/contract-info#section--document`}
            params={params}
          >
            เอกสารแนบทำสัญญา
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
