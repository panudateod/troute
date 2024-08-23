import { Box } from "@mantine/core"
import { Link, Route } from "@tanstack/react-router"

type Props = { route: Route }

export default function Nav({ route }: Props) {
  const params = route.useParams()
  return (
    <>
      <Box bg="blue.3" p="md" mb="xs">
        <Link to={`${route.fullPath}`} params={params}>
          ภาพรวม
        </Link>
      </Box>
      <Box bg="blue.3" p="md" mb="xs">
        <Link to={`${route.fullPath}/content`} params={params}>
          ข้อเสนอ
        </Link>
      </Box>
      <Box bg="blue.3" p="md" mb="xs">
        <Link to={`${route.fullPath}/finance`} params={params}>
          งบประมาณ
        </Link>
      </Box>
      <Box bg="blue.3" p="md" mb="xs">
        <Link to={`${route.fullPath}/contract`} params={params}>
          เอกสารทำสัญญา
        </Link>
      </Box>
    </>
  )
}
