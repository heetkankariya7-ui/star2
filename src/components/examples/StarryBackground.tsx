import { StarryBackground } from '../StarryBackground'

export default function StarryBackgroundExample() {
  return (
    <div className="h-screen w-full relative">
      <StarryBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-2xl font-serif">Deep Space Gas Cloud</p>
      </div>
    </div>
  )
}
