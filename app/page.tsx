import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center px-6">
      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left - Info Section */}
        <div className="space-y-10 animate-fade-in-left">
          {/* Main Title */}
          <div className="space-y-6">
            <h1
              className="text-7xl md:text-8xl font-bold text-white tracking-tight"
              style={{
                textShadow: `
                  0 0 40px rgba(124, 92, 255, 0.4),
                  0 0 80px rgba(124, 92, 255, 0.2)
                `,
              }}
            >
              ELYRA
            </h1>
          </div>

          {/* English Subtitle */}
          <div className="space-y-3">
            <p className="text-xl text-purple-300 font-light tracking-wide">
              A Digital World in Progress
            </p>
          </div>

          {/* Chinese Description */}
          <div className="space-y-3">
            <p className="text-lg text-slate-400 tracking-wide">
              AI研究与虚拟角色实验系统
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link href="/lab">
              <Button
                size="lg"
                className="btn-primary px-8 py-5 text-lg rounded-xl font-medium"
              >
                开始探索
              </Button>
            </Link>
            <Link href="/log">
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary px-8 py-5 text-lg rounded-xl font-medium"
              >
                开发日志
              </Button>
            </Link>
          </div>
        </div>

        {/* Right - Character Section */}
        <div className="relative flex items-center justify-center animate-fade-in-right">
          {/* Character Container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Soft glow behind character */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-3xl animate-soft-glow" />

            {/* Character placeholder with breathing animation */}
            <div className="absolute inset-0 flex items-center justify-center animate-breathing">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-400/30 to-cyan-400/20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🐱</div>
                  <div className="text-purple-300 text-sm tracking-wider">艾丽娅</div>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-300/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
