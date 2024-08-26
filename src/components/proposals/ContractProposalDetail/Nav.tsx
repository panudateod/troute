import { Box, Center, Menu, Tooltip } from "@mantine/core"
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
      <Menu
        position="right-start"
        trigger="click-hover"
        closeOnItemClick={false}
      >
        <Menu.Target>
          <Tooltip label="งวดงาน/งวดเงิน">
            <Center>
              <Box
                bg="gray.3"
                px="md"
                py="xs"
                m="xs"
                component={Link}
                to={`${route.fullPath}/payment-term`}
                params={params}
              >
                <IconAntennaBars3 />
              </Box>
            </Center>
          </Tooltip>
        </Menu.Target>
      </Menu>
      <Menu
        position="right-start"
        trigger="click-hover"
        closeOnItemClick={false}
      >
        <Menu.Target>
          <Tooltip label="ทำสัญญา">
            <Center>
              <Box
                bg="gray.3"
                px="md"
                py="xs"
                m="xs"
                component={Link}
                to={`${route.fullPath}/contract-approval`}
                params={params}
              >
                <IconContract />
              </Box>
            </Center>
          </Tooltip>
        </Menu.Target>
      </Menu>
      <hr />
      <Center>
        <Box>เบิกเงิน</Box>
      </Center>
      <Menu
        position="right-start"
        trigger="click-hover"
        closeOnItemClick={false}
      >
        <Menu.Target>
          <Tooltip label="เบิกเงิน">
            <Center>
              <Box
                bg="gray.3"
                px="md"
                py="xs"
                m="xs"
                component={Link}
                to={`${route.fullPath}/withdraw`}
                params={params}
              >
                <IconCoinBitcoin />
              </Box>
            </Center>
          </Tooltip>
        </Menu.Target>
      </Menu>
    </>
  )
}
