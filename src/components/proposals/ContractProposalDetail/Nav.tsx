import { Box, Center, Tooltip } from "@mantine/core"
import {
  IconAntennaBars3,
  IconCoinBitcoin,
  IconContract,
} from "@tabler/icons-react"
import { Link, Route } from "@tanstack/react-router"

type Props = { route: Route }

export default function Nav({ route }: Props) {
  const params = route.useParams()
  return (
    <>
      <hr />
      <Center>
        <Box>สัญญา</Box>
      </Center>
      <Link to={`${route.fullPath}/payment-term`} params={params}>
        <Tooltip label="งวดงาน/งวดเงิน">
          <Center>
            <Box bg="gray.3" px="md" py="xs" m="xs">
              <IconAntennaBars3 />
            </Box>
          </Center>
        </Tooltip>
      </Link>
      <Link to={`${route.fullPath}/contract-approval`} params={params}>
        <Tooltip label="ทำสัญญา">
          <Center>
            <Box bg="gray.3" px="md" py="xs" m="xs">
              <IconContract />
            </Box>
          </Center>
        </Tooltip>
      </Link>
      <hr />
      <Center>
        <Box>เบิกเงิน</Box>
      </Center>
      <Link to={`${route.fullPath}/withdraw`} params={params}>
        <Tooltip label="เบิกเงิน">
          <Center>
            <Box bg="gray.3" px="md" py="xs" m="xs">
              <IconCoinBitcoin />
            </Box>
          </Center>
        </Tooltip>
      </Link>
    </>
  )
}
