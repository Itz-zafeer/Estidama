const { gql } = require("@apollo/client");

export const homeQuery = () => {
  const query = gql`
    query Page($site: String!, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        published
        blueprint
        locale
        title
        ... on Entry_Pages_Home {
          hero_title
          hero_description
          hero_home_video {
            extension
            permalink
          }
          hero_home_mobile_video {
            extension
            permalink
          }
          about_image {
            extension
            src(width: 200, height: 200)
            ... on Asset_Assets {
              alt
            }
          }
          about_heading_with_html
          about_description
          counter {
            ... on Set_Counter_NewSet {
              counter_number
              counter_label
              counter_description
            }
          }
          services_title_heading
          services {
            ... on Set_Services_NewSet {
              service_description
              service_image {
                extension
                src(width: 200, height: 200)
                ... on Asset_Assets {
                  alt
                }
              }
            }
          }
          companies_title_heading
          companies_description
          logos {
            ... on Set_Logos_NewSet {
              logos_image_special {
                extension
                permalink
              }
            }
          }
          news_smaller_title_heading
          news_title_heading
          news_description
          selected_news {
            title
            slug
            date(format: "Y")
            ... on Entry_News_News {
              news_image {
                extension
                src(width: 200, height: 200)
                ... on Asset_Assets {
                  alt
                }
              }
              news_description_with_html
            }
          }
          contact_title_heading
          contact_description
        }
      }
    }
  `;
  return query;
};
