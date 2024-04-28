import Layout from "@/components/layout/Layout";
import SubHero from "@/components/single-news/SubHero";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Layout deepGreen>
      <div className=" Container1640 pb220 lg:w-[70.8333333333vw] lg:pt-[17.2916666667vw] pt-[50vw] sm:pt-[40vw]">
        <SubHero />
        <div className="mt32">
          <div className="relative block w-full sm:h-[500px] h-[400px] lg:h-[34.6875vw]">
            <Image
              fill
              src="/images/single-news/banner.jpg"
              alt="banner"
              className="object-cover border20"
            />
          </div>
          <span className="text20 block mt32 lg:mt-[2.08333333333vw]">
            يناير 21, 2024
          </span>
          <div className="prose   prose-lg ">
            <h1>أفضل ١٠ وجهات سياحية في العالم</h1>
            <p>
              مرحبًا بكم في مقالتنا حول أفضل ١٠ وجهات سياحية في العالم. سنقدم
              لكم قائمة بأماكن سياحية مذهلة تستحق الزيارة.
            </p>

            <h2>
              ١.{" "}
              <a href="https://en.wikipedia.org/wiki/Paris" target="_blank">
                باريس، فرنسا
              </a>
            </h2>
            <p>
              باريس عاصمة الرومانسية تجمع بين الثقافة والفن والمأكولات الرائعة.
              لا تفوت زيارة{" "}
              <a href="https://www.louvre.fr/en" target="_blank">
                متحف اللوفر
              </a>
              .
            </p>
            <img src="https://via.placeholder.com/400" alt="Paris" />

            <h2>
              ٢.{" "}
              <a
                href="https://en.wikipedia.org/wiki/San_Francisco"
                target="_blank"
              >
                سان فرانسيسكو، الولايات المتحدة الأمريكية
              </a>
            </h2>
            <p>
              مدينة سان فرانسيسكو معروفة بجسرها الشهير واهرب الذي يجذب السياح من
              جميع أنحاء العالم. استمتع بمناظر الخليج وتجربة الثقافة المتنوعة.
            </p>
            <img src="https://via.placeholder.com/400" alt="San Francisco" />

            <h2>
              ٣.{" "}
              <a href="https://en.wikipedia.org/wiki/Tokyo" target="_blank">
                طوكيو، اليابان
              </a>
            </h2>
            <p>
              طوكيو عاصمة اليابان الحديثة تجمع بين التكنولوجيا الفائقة والتقاليد
              القديمة. استكشف أحياءها المزدحمة وتناول السوشي الشهير.
            </p>
            <img src="https://via.placeholder.com/400" alt="Tokyo" />

            <h2>
              ٤.{" "}
              <a
                href="https://en.wikipedia.org/wiki/Rio_de_Janeiro"
                target="_blank"
              >
                ريو دي جانيرو، البرازيل
              </a>
            </h2>
            <p>
              ريو دي جانيرو مدينة رائعة تشتهر بشواطئها الرملية البيضاء وتضاريسها
              الطبيعية الخلابة. لا تفوت زيارة تمثال المسيح الفادي وجبل السكر.
            </p>
            <img src="https://via.placeholder.com/400" alt="Rio de Janeiro" />

            <h2>
              ٥.{" "}
              <a href="https://en.wikipedia.org/wiki/Marrakesh" target="_blank">
                مراكش، المغرب
              </a>
            </h2>
            <p>
              مراكش مدينة تاريخية تجمع بين الأسواق التقليدية والأحياء القديمة
              الساحرة. تجول في ساحة جامع الفنا وتذوق الأطعمة المغربية التقليدية.
            </p>
            <img src="https://via.placeholder.com/400" alt="Marrakesh" />

            <h2>
              ٦.{" "}
              <a href="https://en.wikipedia.org/wiki/Sydney" target="_blank">
                سيدني، أستراليا
              </a>
            </h2>
            <p>
              سيدني مدينة رائعة تطل على المياه الزرقاء الفيروزية وتضم أيقونات
              معمارية مذهلة مثل أوبرا هاوس وجسر هاربر.
            </p>
            <img src="https://via.placeholder.com/400" alt="Sydney" />

            <h2>
              ٧.{" "}
              <a href="https://en.wikipedia.org/wiki/Bangkok" target="_blank">
                بانكوك، تايلاند
              </a>
            </h2>
            <p>
              بانكوك عاصمة تايلاند النابضة بالحياة تضم معابد بوذية رائعة وأسواق
              تقليدية ملونة. تجول في أزقتها الضيقة وتمتع بتذوق الأطعمة الشهية.
            </p>
            <img src="https://via.placeholder.com/400" alt="Bangkok" />

            <h2>
              ٨.{" "}
              <a href="https://en.wikipedia.org/wiki/Istanbul" target="_blank">
                إسطنبول، تركيا
              </a>
            </h2>
            <p>
              إسطنبول مدينة فريدة من نوعها تجمع بين الثقافات الشرقية والغربية.
              قم بزيارة السلطان أحمد وجامع السلطان أيا صوفيا.
            </p>
            <img src="https://via.placeholder.com/400" alt="Istanbul" />

            <h2>
              ٩.{" "}
              <a href="https://en.wikipedia.org/wiki/Cape_Town" target="_blank">
                كيب تاون، جنوب أفريقيا
              </a>
            </h2>
            <p>
              كيب تاون مدينة جميلة تقع عند قاعدة جبل طاولة وتشتهر بمناظرها
              الطبيعية الخلابة وحياتها الليلية المثيرة.
            </p>
            <img src="https://via.placeholder.com/400" alt="Cape Town" />

            <h2>
              ١٠.{" "}
              <a href="https://en.wikipedia.org/wiki/London" target="_blank">
                لندن، المملكة المتحدة
              </a>
            </h2>
            <p>
              لندن عاصمة المملكة المتحدة تجمع بين التاريخ والحداثة. زر بريطانيا
              والمتحف البريطاني وتجول في حدائق هايد بارك.
            </p>
            <img src="https://via.placeholder.com/400" alt="London" />

            <p>
              هذه كانت قائمتنا لأفضل ١٠ وجهات سياحية في العالم. أين تخطط للسفر
              في المرة القادمة؟
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
