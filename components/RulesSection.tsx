import Section from "./Section";

export default function RulesSection() {
  return (
    <Section>
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          실행 규칙
        </h2>

        <div className="space-y-8 max-w-2xl mx-auto">
          <div className="border-l-2 border-accent pl-6 py-4">
            <p className="text-xl md:text-2xl font-semibold mb-4">
              여기서는 '의지'보다 '규칙'이 중요합니다
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-bold">
                1
              </div>
              <div>
                <p className="font-semibold mb-2">월~토: 콘텐츠 업로드 필수</p>
                <p className="text-muted">하루라도 빠지면 리셋됩니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-bold">
                2
              </div>
              <div>
                <p className="font-semibold mb-2">일요일 휴식</p>
                <p className="text-muted">쉬는 날에는 아무것도 하지 않습니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-bold">
                3
              </div>
              <div>
                <p className="font-semibold mb-2">인증 필수</p>
                <p className="text-muted">업로드 후 지정된 방식으로 인증합니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-bold">
                4
              </div>
              <div>
                <p className="font-semibold mb-2">완벽 금지</p>
                <p className="text-muted">퀄리티보다 실행이 우선입니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
