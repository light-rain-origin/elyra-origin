const logs = [
  {
    date: "2026.06.02",
    title: "Elyra 雏形诞生",
    content: "艾丽娅记录：一个尚未完整的世界，第一次拥有了基本的形状。",
  },
  {
    date: "2026.06.02",
    title: "研究记录系统启动",
    content: "正式启动研究记录系统，开始AI研究与虚拟角色实验。",
  },
  {
    date: "2026.06.01",
    title: "艾丽娅概念建立",
    content: "魔法猫娘角色概念正式确立，开启虚拟角色实验。",
  },
  {
    date: "2026.05.31",
    title: "Elyra 域名注册完成",
    content: "艾丽娅记录：Elyra 的名字第一次被世界正式识别。",
  },
]

export default function LogPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-[20vh] px-6">
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
            成长日志
          </h1>
          <p className="text-slate-400 text-lg tracking-wide">
            记录研究历程与重要时刻
          </p>
        </div>

        {/* Vertical Timeline - Alternating Left/Right */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 transform -translate-x-1/2" />

          {/* Log Entries */}
          <div className="space-y-12">
            {(() => {
              // 预计算每条日志的侧边，同一天的日志在同一侧
              const sideMap = []
              let currentSide = 'left'
              let currentDate = null

              logs.forEach((log, index) => {
                if (log.date !== currentDate) {
                  currentDate = log.date
                  currentSide = currentSide === 'left' ? 'right' : 'left'
                }
                sideMap.push(currentSide === 'left')
              })

              return logs.map((log, index) => {
                const isLeft = sideMap[index]
                return (
                  <div
                    key={index}
                    className={`relative flex items-center justify-between animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Left Content */}
                    {isLeft && (
                      <div className="w-1/2 pr-12 text-right">
                        <div className="glass-card p-6 rounded-2xl transition-all duration-500 hover:translate-x-2 hover:shadow-lg hover:shadow-purple-500/20 inline-block text-left ">
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
                    )}

                    {/* Timeline Dot */}
                    {!isLeft && <div className="w-1/2" />}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0A0F1C] z-10 shadow-lg shadow-purple-500/50" />
                    {isLeft && <div className="w-1/2" />}

                    {/* Right Content */}
                    {!isLeft && (
                      <div className="w-1/2 pl-12">
                        <div className="glass-card p-6 rounded-2xl transition-all duration-500 hover:-translate-x-2 hover:shadow-lg hover:shadow-purple-500/20 inline-block ">
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
                    )}
                  </div>
                )
              })
            })()}
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
