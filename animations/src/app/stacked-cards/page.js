import './styles.css'

const LENGTH = 3

export default function StackedComponent() {
  return (
    <div className="h-lvh place-content-center">
      <div className="wrapper justify-center">
        {new Array(LENGTH).fill(0).map((_, i) => (
          <div className="card" key={i} style={{ '--index': LENGTH - 1 - i }} />
        ))}
      </div>
    </div>
  )
}
