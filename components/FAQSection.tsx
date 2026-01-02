"use client";

import { useState } from "react";
import Section from "./Section";

const faqs = [
  {
    question: "정말 아무것도 몰라도 되나요?",
    answer: "네. 편집 기술, 촬영 기술 필요 없습니다. 중요한 건 실행입니다. 스마트폰만 있으면 됩니다."
  },
  {
    question: "편집 못해도 되나요?",
    answer: "편집 실력은 필요 없습니다. 오히려 완벽한 편집을 추구하면 안 됩니다. 날것 그대로 업로드하는 것이 이 프로그램의 핵심입니다."
  },
  {
    question: "매출이 바로 오르나요?",
    answer: "매출 보장 프로그램이 아닙니다. 이건 실행 구조를 만드는 프로그램입니다. 실행이 쌓이면 결과는 자연스럽게 따라옵니다."
  },
  {
    question: "하루에 얼마나 시간 쓰나요?",
    answer: "하루 30분~1시간이면 충분합니다. 완벽하게 만들 필요가 없으니까요. 찍고, 올리고, 인증하면 끝입니다."
  },
  {
    question: "중간에 그만두면 어떻게 되나요?",
    answer: "환불은 없습니다. 이건 의지를 테스트하는 프로그램이 아니라 실행 구조를 만드는 프로그램입니다. 참여 결정은 신중하게 하세요."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          자주 묻는 질문
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-muted/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 hover:bg-muted/5 transition-colors duration-200"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="text-2xl text-accent flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
