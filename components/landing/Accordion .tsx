import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Scene from "../3d/Scene";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Giá cho 1 giờ là bao nhiêu?",
    answer: "Tại TYF, giá cho 1 tiếng thuê bảo mẫu là 99.000 VND.",
    value: "item-1",
  },
  {
    question: "Một lần thuê được bao nhiêu tiếng?",
    answer: "Các ba mẹ có thể đặt lịch 1 lần từ 1-3 tiếng nhé.",
    value: "item-2",
  },
  {
    question: "Thuê 1 tháng là bao nhiêu buổi?",
    answer: "Gói tháng 4 triệu sẽ gồm 12 buổi, mỗi buổi 3 tiếng ạ.",
    value: "item-3",
  },
  {
    question: "Trông trẻ tại TYF có gì khác biệt?",
    answer:
      "TYF áp dụng phương pháp Bank Street, tập trung phát triển kĩ năng, cảm xúc, sức sáng tạo cho trẻ qua các hoạt động thực tế, bổ ích, cả ở ngoài trời và trong nhà.",
    value: "item-4",
  },
];

export const FAQSection = () => {
  return (
    <div className="flex">
      <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Câu hỏi thường gặp
          </h2>
        </div>

        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <div className="">
        <Scene />
      </div>
    </div>
  );
};
