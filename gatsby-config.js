module.exports = {
  siteMetadata: {
    title: `CET`,
    subtitle: "OB Loko Česká Třebová",
    description: `Officialní webovky klubu CET - Orientacni beh Ceska Trebova`,
    author: `@LukasKovar`,
    siteUrl: `https://obcet.tk/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "cs-CZ",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: "http://obcet.tode.cz/",
        // The protocol. This can be http or https.
        protocol: "http",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        // auth: {
        // If auth.user and auth.pass are filled, then the source plugin will be allowed
        // to access endpoints that are protected with .htaccess.

        // htaccess_user: "",
        // htaccess_pass: "",

        // htaccess_sendImmediately: true,

        // If hostingWPCOM is true then you will need to communicate with wordpress.com API
        // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
        // then add your clientId, clientSecret, username, and password here
        // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
        // If two-factor authentication is enabled then you need to create an Application-Specific Password,
        // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
        // wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        // wpcom_app_clientId: "54793",
        // wpcom_user: "",
        // wpcom_pass: "",

        // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
        // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
        // jwt_user: process.env.JWT_USER,
        // jwt_pass: process.env.JWT_PASSWORD
        // },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com"
        // },
        // Set how many simultaneous requests are sent at once.
        // concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          // "**/*/*/categories",
          "**/*/*/posts",
          "**/*/*/pages",
          // "**/*/*/media",
          // "**/*/*/tags",
          // "**/*/*/taxonomies",
          "**/*/*/users"
        ]
        // Blacklisted routes using glob patterns
        // excludedRoutes: ["**/*/*/posts/1456"],
        // use a custom normalizer which is applied after the built-in ones.
        // normalizer: function({ entities }) {
        //   return entities;
        // }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134184117-1",
        // Puts tracking script in the head instead of the body
        head: false
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
