import Link from 'next/link'

export default function StackedComponent() {
  return (
    <ul className="text-center">
      <li className="underline">
        <Link href="/css-transitions/simple-transform">Simple Transform</Link>
      </li>
      <li className="underline">
        <Link href="/css-transitions/card-hover">Card Hover</Link>
      </li>
      <li className="underline">
        <Link href="/css-transitions/download-arrow">Download Arrow</Link>
      </li>
      <li className="underline">
        <Link href="/css-transitions/toast">Toast</Link>
      </li>
    </ul>
  )
}
