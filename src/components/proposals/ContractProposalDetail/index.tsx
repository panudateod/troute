import { getProposalById } from "@/libs/mocks/proposals"
import { Box } from "@mantine/core"
import {
  createRoute,
  Link,
  Route,
  useLocation,
  useRouter,
} from "@tanstack/react-router"
import App from "../ProposalDetail/App"
import Content from "../ProposalDetail/Content"
import ContractInfo from "../ProposalDetail/ContractInfo"
import Finance from "../ProposalDetail/Finance"
import ProposalNav from "../ProposalDetail/Nav"
import Overview from "../ProposalDetail/Overview"
import ContractApproval from "./ContractApproval"
import ContractNav from "./Nav"
import PaymentTerm from "./PaymentTerm"
import Withdraw from "./Withdraw"

export default function ContractProposalDetail(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `$proposalId/i`,
    component: Comp,
  }) as unknown as Route

  route.addChildren([
    Overview(route), //
    Content(route), //content
    Finance(route), //finance
    ContractInfo(route), //contract-info
    PaymentTerm(route), //payment-term
    ContractApproval(route), //contract-approval
    Withdraw(route), //withdraw
  ])

  function Comp() {
    const params = route.useParams()
    const proposal = getProposalById(parseInt(params.proposalId))!

    // get proposal path with conserve subpath
    const router = useRouter()

    const location = useLocation()
    const contractProposalDetailPath = router.buildLocation(route).pathname
    const proposalDetailPath = contractProposalDetailPath
      .split("/")
      .slice(0, -1)
      .join("/")

    const proposalPath = location.pathname.replace(
      contractProposalDetailPath,
      proposalDetailPath,
    )

    // TODO: check if subpath is correct, / /content /finance
    const proposalSubpaths = ["", "/content", "/finance"]
    const subpath = proposalPath.replace(proposalDetailPath, "")
    const hasProposalSubpath = proposalSubpaths.includes(subpath)

    return (
      <App
        route={route}
        parentRoute={parentRoute}
        proposalNav={<ProposalNav route={route} />}
        contractNav={<ContractNav route={route} />}
        extraButton={
          hasProposalSubpath ? (
            <Link to={proposalPath} params={params}>
              <Box ml={"sm"}>ดูข้อเสนอ ก่อนปรับปรุง</Box>
            </Link>
          ) : undefined
        }
        proposal={proposal}
      />
    )
  }
  return route
}
