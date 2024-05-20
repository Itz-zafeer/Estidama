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
    }
  `;
  return query;
};
