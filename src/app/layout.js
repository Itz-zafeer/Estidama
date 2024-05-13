import "swiper/css";
import "./globals.css";
import "swiper/css/navigation";
import getStaticMetaData from "@/utils/getStaticMetaData";

export const metadata = getStaticMetaData({
  title: "نسعى لتحقيق الريادة في تبني أفضل الممارسات البيئية",
  description:
    "نحن نعمل على تحسين الكفاءة والجودة في عمليات التجميع، والفرز، وتطوير عمليات إعادة التدوير المبتكرة للمواد المجمعة و نسعى لتعزيز التعاون مع الشركاء، والمجتمعات المحلية، والجهات الحكومية لتعزيز ثقافة إعادة التدوير .",
  isRobotFollow: false
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className="rtl" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
