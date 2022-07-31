/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import { GatsbyImage } from "../../../components/my-sx-components"

const shortcodes = { GatsbyImage }


const Page = ({ data }) => (
  <Layout>
    <Seo title={data.page.title} description={data.page.excerpt} />
    <Heading as="h1" variant="styles.h1">
      {data.page.title}
    </Heading>
    <section sx={{ my: 5, variant: `layout.content` }}>
        <MDXProvider components={shortcodes}>
            <MDXRenderer remoteImages={data.page.parent.embeddedImagesRemote}>{data.page.body}</MDXRenderer>
        </MDXProvider>
    </section>
  </Layout>
)

export default Page
