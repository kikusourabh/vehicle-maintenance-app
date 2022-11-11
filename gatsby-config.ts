import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `VehicleMaintenanceApp`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve:'gatsby-plugin-google-fonts',
      options:{
        fonts:[
          'Open Sans:300,400,400i,700'
        ]
      }
    },
    {
      resolve:'gatsby-source-firestore',
      options:{
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Clients',
            collection: 'clients',
            map: doc => ({
              name: doc.name,
              email: doc.email,
            }),
          }
        ],
      }
    },
  ],
}

export default config
