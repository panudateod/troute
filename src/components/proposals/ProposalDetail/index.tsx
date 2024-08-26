import { getProposalById } from "@/libs/mocks/proposals"
import { Box } from "@mantine/core"
import {
  createRoute,
  Link,
  Route,
  useLocation,
  useRouter,
} from "@tanstack/react-router"
import App from "./App"
import Content from "./Content"
import ContractInfo from "./ContractInfo"
import Finance from "./Finance"
import ProposalNav from "./Nav"
import Overview from "./Overview"

export default function ProposalDetail(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `$proposalId`,
    component: Comp,
  }) as unknown as Route

  route.addChildren([
    Overview(route), //
    Content(route), //content
    Finance(route), //finance
    ContractInfo(route), //contract-info
  ])

  function Comp() {
    const params = route.useParams()
    const proposal = getProposalById(parseInt(params.proposalId))!

    // get proposal path with conserve subpath
    const router = useRouter()

    const location = useLocation()
    const proposalDetailPath = router.buildLocation(route).pathname
    const contractProposalDetailPath = `${proposalDetailPath}/i`

    const contractProposalPath = location.pathname.replace(
      proposalDetailPath,
      contractProposalDetailPath,
    )

    return (
      <App
        route={route}
        parentRoute={parentRoute}
        proposalNav={<ProposalNav route={route} />}
        proposal={proposal}
        extraButton={
          proposal.contractProposal && (
            <Link to={contractProposalPath} params={params}>
              <Box ml={"sm"}>ดูข้อเสนอปรับปรุง</Box>
            </Link>
          )
        }
      />
    )
  }

  return route
}
