module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ykhiu88ser2s`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "GpqdJ56o9id-Rt8JLKcImJtqTRrgDNNLME7YEEwYtts",
      },
    },
  ],
}


//References 
/*

for the footer icons
https://preview.themeforest.net/item/jevelin-multipurpose-premium-responsive-wordpress-theme/full_screen_preview/14728833?clickid=yNOVmiyAExyJUdYwUx0Mo3EzUklUtuQn4QRwyU0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius

for the clip-path
https://envytheme.com/tf-demo/promedi/index.html

nice contact info over the map and working hours
http://medicare.bold-themes.com/clinic/

more medical website templates
https://colorlib.com/wp/html5-medical-website-templates/

nice portfolio website template
https://colorlib.com/preview/#martin






*/