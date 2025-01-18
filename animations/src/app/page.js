import Link from 'next/link'

export default function StackedComponent() {
  return (
    <ul className="text-center">
      <li className="underline">
        <Link href="/stacked-cards">Stacked Cards</Link>
      </li>
      <li className="underline">
        <Link href="/css-transitions">CSS Transitions</Link>
      </li>
      <li className="underline">
        <Link href="/keyframe-animations">Keyframe Animations</Link>
      </li>
    </ul>
  )
}
