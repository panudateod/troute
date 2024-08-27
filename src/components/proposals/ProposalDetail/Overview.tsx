import { createRoute, Route } from "@tanstack/react-router"

export default function Overview(parentRoute: Route) {
  const route = createRoute({
    getParentRoute: () => parentRoute,
    path: `/`,
    component: Comp,
  })

  function Comp() {
    return (
      <>
        <h1>ภาพรวม</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
          veniam praesentium ipsam assumenda totam rem quisquam aut, blanditiis
          qui ipsa id expedita amet, quo eum ut magni! At, quibusdam!
        </p>
      </>
    )
  }

  return route
}
