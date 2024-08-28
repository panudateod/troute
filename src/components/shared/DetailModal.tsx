import { Modal } from "@mantine/core"
import { useEffect, useState } from "react"

type Props = {
  children: React.ReactNode
  opened: boolean
}
function DetailModal({ children, opened }: Props) {
  const [transformFinished, setTransformFinished] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTransformFinished(true)
    }, 800)
  }, [])

  return (
    <Modal.Root
      opened={opened}
      onClose={() => {}}
      fullScreen
      transitionProps={{
        transition: "pop",
        duration: 500,
        timingFunction: "ease",
      }}
    >
      <Modal.Overlay />
      <Modal.Content
        className={transformFinished && opened ? "transform-finished" : ""}
      >
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default DetailModal
