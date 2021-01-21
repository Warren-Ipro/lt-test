exports.createPages = async ({ graphql, actions }) => {
  const {createRedirect} = actions

  // fetch data from a collection which contains list of urls mapping for redirection
  let response = await graphql(`
  query redirects {
    allPageRedirectJson {
      nodes {
        fromURL
        toURL
      }
    }
  }`)

  let data = response.data.allPageRedirectJson.nodes

  data.map((url) => {
    createRedirect({ fromPath: url.fromURL, toPath: url.toURL, isPermanent: true });
  })
/*
 now iterate over data and create redirect for each url
*/
}