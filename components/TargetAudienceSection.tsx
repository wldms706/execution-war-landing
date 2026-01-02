import Section from "./Section";

export default function TargetAudienceSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-background/50">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          누구를 위한 프로그램인가요?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent">이런 분께 추천합니다</h3>
            <ul className="space-y-4">
              {[
                "기술은 충분한데 콘텐츠가 막막한 분",
                "혼자서는 계속 미뤄지는 분",
                "완벽주의 때문에 시작 못 하는 분",
                "실행을 강제당하고 싶은 분"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-muted">이런 분께는 맞지 않습니다</h3>
            <ul className="space-y-4">
              {[
                "정보만 얻고 싶은 분",
                "실행 의지가 전혀 없는 분",
                "결과를 보장받고 싶은 분",
                "규칙을 지킬 의향이 없는 분"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-muted text-xl">✗</span>
                  <span className="text-lg text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
