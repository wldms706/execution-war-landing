import Section from "./Section";

const weeks = [
  {
    week: 1,
    title: "실행 기준 설정",
    items: [
      "콘텐츠 방향 정리",
      "첫 업로드 완료",
      "실행 루틴 시작"
    ]
  },
  {
    week: 2,
    title: "반복 업로드",
    items: [
      "매일 미션 수행",
      "실행 패턴 체화",
      "피드백 반영"
    ]
  },
  {
    week: 3,
    title: "흐름 유지",
    items: [
      "실행 리듬 만들기",
      "콘텐츠 축적",
      "자신감 형성"
    ]
  },
  {
    week: 4,
    title: "습관화",
    items: [
      "실행 유지 구조 완성",
      "독립 실행 능력 확보",
      "다음 단계 준비"
    ]
  }
];

export default function WeeklyStructureSection() {
  return (
    <Section className="bg-background/50">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          4주 구성
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {weeks.map((week) => (
            <div
              key={week.week}
              className="border border-muted/20 p-8 hover:border-accent/50 transition-colors duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-accent">
                    {week.week}
                  </span>
                  <span className="text-lg text-muted">주차</span>
                </div>

                <h3 className="text-2xl font-bold">{week.title}</h3>

                <ul className="space-y-3">
                  {week.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
