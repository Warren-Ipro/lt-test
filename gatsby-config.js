module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: false },
  siteMetadata: {
    title: "LeadsTunnel",
    description: `Powerful Lead Automation Tool For Your Facebook Lead Ads. Easily manage and connect with your leads in real-time. Start Free Trial Today`,
    author: `iPro Group`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-147340907-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:100,300,400,500,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "LeadsTunnel",
        short_name: "LeadsTunnel",
        description: `Powerful Lead Automation Tool For Your Facebook Lead Ads. Easily manage and connect with your leads in real-time. Start Free Trial Today`,
        lang: `en`,
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        ignore: ['slick-carousel/slick/slick-theme.css', 'slick-carousel/slick/slick.css']
      }
    },
    `gatsby-plugin-client-side-redirect`
  ],
};
