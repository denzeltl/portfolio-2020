module.exports = {
    siteMetadata: {
        title: `denzeltl - Web Developer`,
        description: `denzeltl - Web Developer portfolio based in Quezon City, Philippines.`,
        author: `@denzeltl`,
        siteUrl: `https://www.denzeltl.com`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-179277832-1',
                head: true,
                anonymize: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
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
                name: `denzeltl-portfolio`,
                short_name: `denzeltl`,
                start_url: `/`,
                background_color: `#101d42`,
                theme_color: `#101d42`,
                display: `minimal-ui`,
                icon: `src/images/denzeltl-icon.png`,
            },
        },
        `gatsby-plugin-sass`,
    ],
};
