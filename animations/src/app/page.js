import Link from 'next/link'

export default function StackedComponent() {
  return (
    <div className="h-lvh place-content-center">
      <ul className="text-center">
        <li className="underline">
          <Link href="/stacked-cards">Stacked Cards</Link>
        </li>
      </ul>
    </div>
  )
}
