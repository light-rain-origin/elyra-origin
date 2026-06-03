import { Metadata } from "next"

export const metadata: Metadata = {
  title: "开发日志",
  description: "Elyra成长日志 - 记录Elyra研究历程与重要时刻，见证艾丽娅和数字世界的成长",
}

const logs = [
  {
    date: "2026.06.03",
    title: "Elyra 品牌视觉升级",
    content: "完成 Elyra 第一版 Icon 设计，以倾斜 E 与探索光环作为核心视觉符号，首次确立品牌独立形象。新的设计不再单纯代表 AI 工具，而是象征探索、成长与数字生命的持续进化，为未来桌面伙伴、工作流平台与独立游戏生态奠定统一视觉基础。",
    tag: "event",
  },
  {
    date: "2026.06.02",
    title: "提交 v1 版本",
    content: "完成基础框架搭建，成长日志系统上线，艾丽娅研究记录进入持续迭代阶段。",
    tag: "event",
  },
  {
    date: "2026.06.02",
    title: "研究记录系统启动",
    content: "正式启动研究记录系统，开始AI研究与虚拟角色实验。",
    tag: "event",
  },
  {
    date: "2026.06.02",
    title: "Elyra 雏形诞生",
    content: "艾丽娅记录：一个尚未完整的世界，第一次拥有了基本的形状。",
    tag: "milestone",
  },
  {
    date: "2026.06.01",
    title: "艾丽娅概念建立",
    content: "魔法猫娘角色概念正式确立，开启虚拟角色实验。",
    tag: "milestone",
  },
  {
    date: "2026.05.31",
    title: "Elyra 域名注册完成",
    content: "Elyra 的名字第一次被正式启用，数字入口建立完成。",
    tag: "milestone",
  },
]

export default function LogPage() {
  const sideMap: any[] = []
  let currentSide = "left"
  let currentDate: string | null = null

  logs.forEach((log) => {
    if (log.date !== currentDate) {
      currentDate = log.date
      currentSide = currentSide === "left" ? "right" : "left"
    }
    sideMap.push(currentSide === "left")
  })

  return (
      <div className="relative z-10 h-screen flex flex-col px-6">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage:
                   "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
               backgroundSize: "40px 40px",
             }}
        />

        {/* PAGE */}
        <div className="relative z-10 h-screen flex flex-col px-6">

          {/* HEADER（⬇️再往下） */}
          <div className="shrink-0 text-center space-y-4 pt-28 pb-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
              开发日志
            </h1>
            <p className="text-slate-400 text-lg tracking-wide">
              记录研究历程与重要时刻
            </p>
          </div>

          {/* SCROLL */}
          <div className="flex-1 overflow-y-auto no-scrollbar">

            <div className="relative max-w-4xl mx-auto pb-24">

              {/* timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-300 to-cyan-200 -translate-x-1/2" />

              <div className="space-y-12 py-10">

                {logs.map((log, index) => {
                  const isLeft = sideMap[index]

                  // ✨ 轻氛围卡片
                  const cardClass = (tag: string) =>
                      `bg-slate-900/50
                       backdrop-blur-xl
                       border
                       border-white/10
                       p-6
                       rounded-2xl
                       inline-block
                       transition-all
                       duration-300
                       hover:-translate-y-1
                       hover:scale-[1.01]
                       ${
                          tag === "event"
                              ? "hover:shadow-[0_0_18px_rgba(103,232,249,0.35)] hover:border-cyan-300/20"
                              : "hover:shadow-[0_0_22px_rgba(168,85,247,0.30)] hover:border-purple-400/20"
                      }`
                  return (
                      <div
                          key={index}
                          className="relative flex items-center justify-between"
                      >

                        {/* LEFT */}
                        {isLeft && (
                            <div className="w-1/2 pr-12 text-right">
                              <div
                                  className={`${cardClass(log.tag)} text-left animate-fade-in-up`}
                                  style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: "both",
                                  }}
                              >
                                <div className="flex justify-between mb-2">
                                  <span className="text-purple-400 text-sm">{log.date}</span>
                                  {log.tag && (
                                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                                          log.tag === 'milestone'
                                              ? 'bg-purple-500/20 text-purple-300'
                                              : 'bg-cyan-500/20 text-cyan-300'
                                      }`}>
                                {log.tag === 'milestone' ? '里程碑' : '事件'}
                              </span>
                                  )}
                                </div>
                                <h3 className="text-white mb-2">{log.title}</h3>
                                <p className="text-slate-400">{log.content}</p>
                              </div>
                            </div>
                        )}

                        {/* DOT */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0A0F1C]" />

                        {/* RIGHT */}
                        {!isLeft && (
                            <div className="w-1/2 ml-auto pl-12">
                              <div
                                  className={`${cardClass(log.tag)} animate-fade-in-up`}
                                  style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: "both",
                                  }}
                              >
                                <div className="flex justify-between mb-2">
                                  <span className="text-purple-400 text-sm">{log.date}</span>
                                  {log.tag && (
                                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                                          log.tag === 'milestone'
                                              ? 'bg-purple-500/20 text-purple-300'
                                              : 'bg-cyan-500/20 text-cyan-300'
                                      }`}>
                                {log.tag === 'milestone' ? '里程碑' : '事件'}
                              </span>
                                  )}
                                </div>
                                <h3 className="text-white mb-2">{log.title}</h3>
                                <p className="text-slate-400">{log.content}</p>
                              </div>
                            </div>
                        )}

                      </div>
                  )
                })}

              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="shrink-0 text-center text-slate-500 text-sm py-6">
            更多日志即将更新...
          </div>

        </div>
      </div>
  )
}