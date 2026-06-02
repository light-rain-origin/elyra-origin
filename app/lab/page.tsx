import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Brain, Palette, Archive } from "lucide-react"

const modules = [
  {
    title: "研究",
    subtitle: "AI实验 · Agent系统",
    description: "探索人工智能的边界，构建智能代理系统",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "创作",
    subtitle: "角色设计 · 数字世界",
    description: "创造虚拟角色，构建数字艺术空间",
    icon: Palette,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "归档",
    subtitle: "开发日志 · 灵感记录",
    description: "记录研究历程，保存创作灵感",
    icon: Archive,
    color: "from-pink-500 to-purple-500",
  },
]

export default function LabPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-[20vh] px-6">
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
            研究模块
          </h1>
          <p className="text-slate-400 text-lg tracking-wide">
            探索AI研究与虚拟角色实验系统
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="glass-card group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4 pb-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <module.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <CardTitle className="text-2xl text-white font-semibold tracking-wide">
                    {module.title}
                  </CardTitle>
                  <p className="text-purple-300 text-sm tracking-wide">
                    {module.subtitle}
                  </p>
                </div>

                {/* Description */}
                <CardDescription className="text-slate-400 leading-relaxed text-base">
                  {module.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center text-slate-500 text-sm pt-16">
          <p className="tracking-wide">更多模块即将上线...</p>
        </div>
      </div>
    </div>
  )
}
