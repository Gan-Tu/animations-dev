import './styles.css'

export default function SimpleTransformTransition() {
  return (
    <div className="box">
      {/* If we directly apply to box, when we hover on our box we move it up. This causes it to change its position, sometimes that means that our cursor is not on the box anymore. This causes the hover state to be removed which can result in a flicker where the box goes back and forth between hover and its initial state.

      The solution here is to add a child to our box and change its position instead. This way hovering on the parent (.box) won't cause it to change its position, only the child (.box-inner) will. */}
      <div className="box-inner" />
    </div>
  )
}
