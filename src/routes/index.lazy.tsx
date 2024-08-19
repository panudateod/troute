import { Breadcrumbs } from "@mantine/core"
import { createLazyFileRoute, Link } from "@tanstack/react-router"

const items = [
  {
    title: "เข้าสู่ระบบ",
    href: "/sign",
  },
  {
    title: "สมัครสมาชิก",
    href: "/sign",
  },
].map((item) => (
  <div key={item.href}>
    <Link to={item.href}>{item.title}</Link>
  </div>
))

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
    </>
  ),
})
