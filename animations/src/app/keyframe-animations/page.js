import Link from 'next/link'

export default function KeyframeAnimations() {
  return (
    <ul className="text-center">
      <li className="underline">
        <Link href="/keyframe-animations/text-reveal">Text Reveal</Link>
      </li>
      <li className="underline">
        <Link href="/keyframe-animations/orbit-animation">Orbit Animation</Link>
      </li>
    </ul>
  )
}
