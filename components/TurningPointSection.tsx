import Section from "./Section";

export default function TurningPointSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-background/50">
      <div className="space-y-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          그래서 만들었습니다.<br />
          <span className="text-accent">4주 다마고치 프로그램</span>
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          <p>
            완벽한 콘텐츠를 만드는 법을 배우는 곳이 아닙니다.
          </p>
          <p>
            <span className="text-foreground font-semibold">그냥 실행하게 만드는 시스템</span>입니다.
          </p>
        </div>

        <div className="pt-8">
          <p className="text-2xl md:text-3xl font-bold">
            사업은 결국<br />
            <span className="text-accent">실행한 사람이 가져갑니다</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
