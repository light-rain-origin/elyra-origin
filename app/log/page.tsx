import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const logs = [
  {
    date: "2026.05.31",
    title: "Elyra 域名注册完成",
    content: "完成域名注册，为研究院建立数字身份基础。",
  },
  {
    date: "2026.06.01",
    title: "研究院系统启动",
    content: "正式启动研究院系统，开始AI研究与虚拟角色实验。",
  },
  {
    date: "2026.06.02",
    title: "艾丽娅概念建立",
    content: "魔法猫娘角色概念正式确立，开启虚拟角色实验。",
  },
  {
    date: "2026.06.03",
    title: "首个AI实验完成",
    content: "完成首个AI实验，验证智能代理系统可行性。",
  },
  {
    date: "2026.06.04",
    title: "数字世界构建",
    content: "开始构建虚拟数字世界，探索角色与环境的融合。",
  },
]

export default function LogPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-[20vh] px-6">
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
            研究日志
          </h1>
          <p className="text-slate-400 text-lg tracking-wide">
            记录研究历程与重要时刻
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500" />

          {/* Log Entries */}
          <div className="space-y-10">
            {logs.map((log, index) => (
              <div
                key={index}
                className="relative flex items-start animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0A0F1C] z-10 shadow-lg shadow-purple-500/50" />

                {/* Content */}
                <div className="ml-16 w-full">
                  <div className="glass-card p-6 rounded-2xl transition-all duration-500 hover:-translate-x-2 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 text-sm font-medium tracking-wide">
                        {log.date}
                      </span>
                    </div>
                    <h3 className="text-lg text-white font-medium tracking-wide mb-2">
                      {log.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-base">
                      {log.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm pt-16">
          <p className="tracking-wide">更多日志即将更新...</p>
        </div>
      </div>
    </div>
  )
}
