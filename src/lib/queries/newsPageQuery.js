const { gql } = require("@apollo/client");

export const newsPageQuery = () => {
  const query = gql`
    query Page($site: String!, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        published
        blueprint
        locale
        ... on Entry_Pages_News {
          news_title_heading
          news_description
          seo_title
          seo_description
          seo_keywords
        }
      }
      globalSet(handle: "global_settings", site: $site) {
        ... on GlobalSet_GlobalSettings {
          seo_title
          seo_description
          seo_image {
            src(width: 1200, height: 628)
          }
          seo_keywords
        }
      }
    }
  `;
  return query;
};
