import checkIfContentExist from "@/utils/setAltTag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const formatDate = (dateStr, isAr) => {
  // Check if the date string is in the correct format
  const dateRegex =
    /^\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/;
  if (!dateRegex.test(dateStr)) {
    return "Invalid date format";
  }

  // Parse the input date string
  const [day, month, year] = dateStr.split(" ");
  const date = new Date(`${month} ${day}, ${year}`);

  // Define locales and options
  const enOptions = { year: "numeric", month: "long", day: "2-digit" };
  const arOptions = { year: "numeric", month: "long", day: "2-digit" };

  // Helper function to convert Arabic numerals to English
  const convertArabicNumeralsToEnglish = (str) => {
    const arabicToEnglishMap = {
      "٠": "0",
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9"
    };
    return str.replace(/[٠-٩]/g, (d) => arabicToEnglishMap[d]);
  };

  if (isAr) {
    // Format date for Arabic locale with English format
    const formattedDate = date.toLocaleDateString("en-US", enOptions);
    // Reformat month to Arabic
    const [monthName, dayEn, yearEn] = formattedDate.split(" ");
    const arabicMonthNames = {
      January: "يناير",
      February: "فبراير",
      March: "مارس",
      April: "أبريل",
      May: "مايو",
      June: "يونيو",
      July: "يوليو",
      August: "أغسطس",
      September: "سبتمبر",
      October: "أكتوبر",
      November: "نوفمبر",
      December: "ديسمبر"
    };
    return `${arabicMonthNames[monthName]} ${dayEn.padStart(2, "0")} ${yearEn}`;
  } else {
    // Format date for English locale with Arabic format
    const formattedDate = date.toLocaleDateString("ar-EG", arOptions);
    // Reformat day and year to English
    const [dayAr, monthNameAr, yearAr] = formattedDate.split(" ");
    const englishMonthNames = {
      يناير: "January",
      فبراير: "February",
      مارس: "March",
      أبريل: "April",
      مايو: "May",
      يونيو: "June",
      يوليو: "July",
      أغسطس: "August",
      سبتمبر: "September",
      أكتوبر: "October",
      نوفمبر: "November",
      ديسمبر: "December"
    };
    const englishDay = convertArabicNumeralsToEnglish(dayAr.padStart(2, "0"));
    const englishYear = convertArabicNumeralsToEnglish(yearAr);
    return `${englishMonthNames[monthNameAr]}  ${englishDay},  ${englishYear}`;
  }
};

const NewsCard = ({ bigCard, content, arabic }) => {
  return (
    <div
      data-aos="fade"
      className="flex flex-wrap w-full lg:w-[unset] sm:gap-y-[25px] gap-y-[20px] items-center lg:gap-x-[2.08333333333vw]"
    >
      <Link
        className={`relative ${
          bigCard
            ? "lg:w-[27.0833333333vw] lg:h-[24.375vw]"
            : "lg:w-[19.7916666667vw] lg:h-[17.8125vw]"
        } sm:w-[70%] w-full h-[250px] sm:h-[350px]  border20 group overflow-hidden`}
        href={`${arabic ? "" : "/en"}/news/${content?.slug}`}
      >
        {content?.news_image?.src && (
          <Image
            fill
            src={content?.news_image?.src}
            alt={checkIfContentExist(
              content?.news_image?.alt,
              content?.title,
              "News"
            )}
            className="border20 object-cover transition-all duration-300 transform group-hover:scale-[1.1]"
          />
        )}
        <span className="atlwhFull border20 bg-[#132D2B33]"></span>
      </Link>
      <div className="lg:w-[19.7916666667vw] w-full">
        <span className="text18">{formatDate(content?.date, arabic)}</span>
        <h4 className="text29 f700 mt12 line-clamp-2 lg:h-[3.75vw]">
          {content?.title}
        </h4>
        <div
          className="text22 text-[#132D2B] mt16 line-clamp-[5] lg:h-[6.77083333333vw] text-opacity-[0.7]"
          dangerouslySetInnerHTML={{
            __html: content?.news_description_with_html
          }}
        ></div>
        <Link
          href={`${arabic ? "" : "/en"}/news/${content?.slug}`}
          className="newsLink text-[#5EBD8E] group  mt32 flex items-center lg:items-end lg:gap-x-[0.52083333333vw] sm:gap-x-[10px] gap-x-[8px]"
        >
          <span className="text24 ">
            {arabic ? "اقرا المزيد" : "Read More"}
          </span>
          <svg
            width="24"
            height="25"
            className={`flipped lg:w-[1.25vw] lg:h-[1.25vw] sm:w-[22px] sm:h-[22px] w-[20px] h-[20px] ${
              arabic
                ? " lg:group-hover:translate-x-[-0.5vw] "
                : " lg:group-hover:translate-x-[0.5vw] "
            } transition-all duration-300`}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46934 13.0298C3.32889 12.8892 3.25 12.6986 3.25 12.4998C3.25 12.3011 3.32889 12.1105 3.46934 11.9698L9.46934 5.96985C9.538 5.89616 9.6208 5.83706 9.7128 5.79607C9.8048 5.75507 9.90412 5.73303 10.0048 5.73126C10.1055 5.72948 10.2055 5.748 10.2989 5.78572C10.3923 5.82344 10.4772 5.87959 10.5484 5.95081C10.6196 6.02203 10.6757 6.10686 10.7135 6.20025C10.7512 6.29364 10.7697 6.39367 10.7679 6.49437C10.7662 6.59507 10.7441 6.69439 10.7031 6.78639C10.6621 6.87838 10.603 6.96119 10.5293 7.02985L5.80934 11.7498H19.9993C20.1983 11.7498 20.389 11.8289 20.5297 11.9695C20.6703 12.1102 20.7493 12.3009 20.7493 12.4998C20.7493 12.6988 20.6703 12.8895 20.5297 13.0302C20.389 13.1708 20.1983 13.2498 19.9993 13.2498H5.80934L10.5293 17.9698C10.603 18.0385 10.6621 18.1213 10.7031 18.2133C10.7441 18.3053 10.7662 18.4046 10.7679 18.5053C10.7697 18.606 10.7512 18.7061 10.7135 18.7994C10.6757 18.8928 10.6196 18.9777 10.5484 19.0489C10.4772 19.1201 10.3923 19.1762 10.2989 19.214C10.2055 19.2517 10.1055 19.2702 10.0048 19.2684C9.90412 19.2667 9.8048 19.2446 9.7128 19.2036C9.6208 19.1626 9.538 19.1035 9.46934 19.0298L3.46934 13.0298Z"
              fill="#5EBD8E"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
