import Section from "./Section";

export default function ProblemSection() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p className="text-muted">
            문제는 의지가 아닙니다.<br />
            <span className="text-foreground font-semibold">실행 구조가 없었을 뿐입니다.</span>
          </p>

          <p className="text-muted">
            혼자서는 계속 미뤄집니다.<br />
            시작도 못 하거나, 시작해도 며칠 못 가 멈춥니다.
          </p>

          <p className="text-muted">
            완벽한 영상을 만들려다가<br />
            <span className="text-foreground font-semibold">아예 업로드를 안 하게 됩니다.</span>
          </p>
        </div>

        <div className="border-l-2 border-accent pl-6 py-4">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            나도 똑같았습니다.<br />
            혼자서는 절대 안 됐습니다.
          </p>
        </div>
      </div>
    </Section>
  );
}
