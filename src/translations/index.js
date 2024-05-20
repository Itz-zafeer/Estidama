export const translations = {
  layout: {
    header: {
      languageSwitch: "EN"
    },
    footer: {
      copyrightRichText: ` © 2024 حقوق الطبع والنشر واسكو جميع الحقوق محفوظةتم تطويره بواسطة {" "}
        <a href="https://brackets-tech.com/" target="_blank">
          Brackets Technology
        </a>`,
      textBelowLogo: `نرشد الجهات طوعيًا بتوفير تغليف قابل لإعادة الاستخدام مثل أكواب أكياس... وغيرها.`,
      newsletter: {
        title: "اتبع النشرة الإخبارية لدينا",
        placeholder: "البريد الإلكتروني  ",
        requiredError: "This Field is Required!",
        emailError: "Email isn't Valid!",
        successMessage: " Thank You! You have Successfully Subscribed!",
        errorMessage: " Something went wrong!",
        loadingText: "Sending...",
        btnText: "   اشترك "
      }
    }
  },
  form: {
    inputFieldsData: [
      {
        type: "text",
        placeholder: "الأسم *",
        id: "name",
        required: true
      },
      {
        type: "text",
        placeholder: "البريد الإلكتروني  *",
        id: "email",
        required: true
      },
      {
        type: "text",
        placeholder: "موضوع",
        id: "subject"
      },
      {
        type: "text",
        placeholder: "رسالتك *",
        id: "message",
        required: true
      }
    ],
    errors: {
      emailError: "This Field is Required",
      requiredError: "The Email isn't Correct"
    },
    successMessage: "your form has been submitted",
    errorMessage: " Something went wrong! please try again"
  }
};
