import Section from "./Section";
import CTAButton from "./CTAButton";

export default function FinalCTASection() {
  return (
    <Section className="bg-gradient-to-b from-background to-accent/10">
      <div className="space-y-12 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            완벽하게 준비된 사람은<br />
            필요 없습니다
          </h2>
          <p className="text-xl md:text-2xl text-muted">
            실행할 준비가 된 사람만 오세요
          </p>
        </div>

        <div className="pt-8">
          <CTAButton className="text-xl px-12 py-6">
            실행전쟁 신청하기
          </CTAButton>
        </div>

        <div className="pt-12 text-sm text-muted">
          <p>4주간 함께 실행합니다</p>
          <p>의지가 아니라 구조로 움직입니다</p>
        </div>
      </div>
    </Section>
  );
}
