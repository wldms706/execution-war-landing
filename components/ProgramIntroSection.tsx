import Section from "./Section";
import CTAButton from "./CTAButton";

export default function ProgramIntroSection() {
  return (
    <Section>
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          실행전쟁이란?
        </h2>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">❌</div>
              <p className="text-muted">완벽한 영상</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">⭕️</div>
              <p className="text-foreground font-semibold">일단 업로드</p>
            </div>
          </div>

          <div className="border-l-2 border-muted pl-6 py-4 space-y-4">
            <p className="font-semibold text-foreground">4주 실행 강제 시스템</p>
            <p className="text-muted">배우는 곳이 아닙니다.</p>
            <p className="text-muted">실행하게 만드는 시스템입니다.</p>
            <p className="text-foreground font-semibold">매주 결과물이 남는 구조입니다.</p>
          </div>
        </div>

        <div className="text-center pt-8">
          <CTAButton>지금 바로 시작하기</CTAButton>
        </div>
      </div>
    </Section>
  );
}
