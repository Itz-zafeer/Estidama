const { gql } = require("@apollo/client");

export const singleNewsQuery = () => {
  const query = gql`
    query Page($site: String!, $slug: String!) {
      entry(slug: $slug, site: $site, collection: "news") {
        published
        blueprint
        locale
        title
        ... on Entry_News_News {
          news_image {
            extension
            src(width: 200, height: 200)
            ... on Asset_Assets {
              alt
            }
          }
          date(format: "d M Y")
          news_description_with_html
          slug
          seo_title
          seo_description
          seo_keywords
          seo_image {
            extension
            src(width: 200, height: 200)
          }
        }
      }
    }
  `;
  return query;
};