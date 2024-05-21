const { gql } = require("@apollo/client");

export const footerQuery = () => {
  const query = gql`
    query BottomNav($site: String!) {
      bottom_nav: nav(handle: "bottom_navigation") {
        title
        handle
        tree(site: $site) {
          page {
            title
            entry_id
            permalink
          }
          children {
            page {
              title
              entry_id
              permalink
            }
          }
        }
      }
      globalSet(handle: "global_settings", site: $site) {
        ... on GlobalSet_GlobalSettings {
          social_icons {
            ... on Set_SocialIcons_NewSet {
              social_icon {
                extension
                permalink
              }
              social_link
              social_link_text
              social_external_link
            }
          }
        }
      }
    }
  `;
  return query;
};
