import { Box, Center, Tooltip } from "@mantine/core"
import {
  IconCurrencyBaht,
  IconDashboard,
  IconFileStack,
  IconList,
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
      <Link to={`${route.fullPath}/content`} params={params}>
        <Tooltip label="ข้อเสนอฯ/คำรับรอง">
          <Center>
            <Box bg="gray.3" px="md" py="xs" m="xs">
              <IconList />
            </Box>
          </Center>
        </Tooltip>
      </Link>
      <Link to={`${route.fullPath}/finance`} params={params}>
        <Tooltip label="แผนงบประมาณ">
          <Center>
            <Box bg="gray.3" px="md" py="xs" m="xs">
              <IconCurrencyBaht />
            </Box>
          </Center>
        </Tooltip>
      </Link>
      <Link to={`${route.fullPath}/contract-info`} params={params}>
        <Tooltip label="เอกสารทำสัญญา">
          <Center>
            <Box bg="gray.3" px="md" py="xs" m="xs">
              <IconFileStack />
            </Box>
          </Center>
        </Tooltip>
      </Link>
    </>
  )
}
