export const newsQuery = `
    query Entries($site: String!, $current_page: Int!, $limit: Int!) {
      entries(
        collection: "news"
        limit: $limit
        page: $current_page
        site: $site
      ) {
        current_page
        total
        last_page
        has_more_pages
        data {
          ... on Entry_News_News {
            title
            news_image {
              extension
              src(width: 380, height: 342)
              ... on Asset_Assets {
                alt
              }
            }
            news_description_with_html
            slug
            date(format: "d M Y")
          }
        }
      }
    }
  `;
