const { gql } = require("@apollo/client");

export const translationsQuery = () => {
  const query = gql`
    query GlobalSets($site: String!) {
      translations: globalSet(handle: "translations", site: $site) {
        ... on GlobalSet_Translations {
          layout {
            languageSwitch
            copyrightText
            textBelowLogo
            newsletter_title
            newsletter_placeholder
            newsletter_requiredError
            newsletter_emailError
            newsletter_successMessage
            newsletter_errorMessage
            newsletter_loadingText
            newsletter_btnText
          }
          form {
            name_placeholder
            email_placeholder
            message_placeholder
            subject_placeholder
            requiredError
            emailError
            successMessage
            errorMessage
          }
        }
      }
    }
  `;
  return query;
};
