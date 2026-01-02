import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-balance">
          원장님,<br />
          그 좋은 기술만 하고 싶지 않으세요?
        </h1>

        <div className="space-y-4 mb-12 text-lg md:text-xl text-muted leading-relaxed">
          <p>마케팅 하기 싫죠.</p>
          <p>콘텐츠 만들어야 하는 건 아는데</p>
          <p>어떻게 찍고, 어떻게 편집해야 할지도 모르겠고</p>
          <p className="text-foreground font-semibold">그래서 결국 안 하게 되잖아요.</p>
        </div>

        <CTAButton>실행전쟁 1기 참여하기</CTAButton>
      </div>
    </section>
  );
}
