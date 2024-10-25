import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Giờ",
    popular: 0,
    price: 49000,
    description:
      "Đặt người đồng hành ngay trong ngày với thời gian không giới hạn",
    buttonText: "Giá Theo Giờ",
    benefitList: ["Nhanh Gọn", "Tiện lợi", "Được cộng dồng trợ"],
  },
  {
    title: "Tháng",
    popular: 1,
    price: 200,
    description: "Đặt theo tháng để hưởng được nhiều lợi ích hơn",
    buttonText: "Giá Theo Tháng",
    benefitList: [
      " Phương Pháp Bank Street",
      "Hoạt động sáng tạo",
      "Phát triển tư duy",
    ],
  },
  {
    title: "Năm",
    popular: 0,
    price: 120,
    description:
      "Đồng hành lâu dài cùng bé để phát triển toàn diện",
    buttonText: "Giá Theo Năm",
    benefitList: ["12 buổi / tháng", "Cố định", "Đảm bảo"],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Bảng giá
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Nhận quyền truy cập không giới hạn
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Xem bảng giá với giác cả hợp lý
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">
                    {title === "Giờ"
                      ? `${price.toLocaleString()} VNĐ`
                      : `$${price}`}
                  </span>

                  <span className="text-muted-foreground">
                    {title === "Giờ" ? " /hour" : " /month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
export default PricingSection;
