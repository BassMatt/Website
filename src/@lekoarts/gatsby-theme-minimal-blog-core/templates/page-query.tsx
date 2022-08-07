import { graphql } from "gatsby"
import PageComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/page"

export default PageComponent

export const query = graphql`
    query ($slug: String!) {
        page(slug: {eq: $slug}) {
            title
            slug
            excerpt
            body
            ... on MdxPage {
                id
                parent {
                    ... on Mdx {
                    id
                    embeddedImagesRemote {
                        childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                    }
                }
            }
        }
    }
`

