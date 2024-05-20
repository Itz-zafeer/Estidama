const { gql } = require("@apollo/client");

export const headerQuery = () => {
  const query = gql`
    query MainNav($site: String!) {
      main_nav: nav(handle: "main_navigation") {
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
