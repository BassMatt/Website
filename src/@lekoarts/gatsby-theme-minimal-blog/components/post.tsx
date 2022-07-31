/** @jsx jsx */
import * as React from "react"
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import PostFooter from "@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer"
import { GatsbyImage } from "../../../components/my-sx-components"
import { MDXProvider } from '@mdx-js/react'

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)
const shortcodes = { GatsbyImage }

const Post = ({ data }) => (
  <Layout>
    <Seo
      title={data.post.title}
      description={data.post.description ? data.post.description : data.post.excerpt}
      image={data.post.banner ? data.post.banner?.childImageSharp?.resize?.src : undefined}
      pathname={data.post.slug}
      canonicalUrl={data.post.canonicalUrl}
    />
    <Heading as="h1" variant="styles.h1">
      {data.post.title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{data.post.date}</time>
      {data.post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={data.post.tags} />
        </React.Fragment>
      )}
      {data.post.timeToRead && ` — `}
      {data.post.timeToRead && <span>{data.post.timeToRead} min read</span>}
    </p>
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `layout.content`,
      }}
    >        
      <MDXProvider components={shortcodes}>
        <MDXRenderer remoteImages={data.post.parent.embeddedImagesRemote}>{data.post.body}</MDXRenderer>
      </MDXProvider>
    </section>
    <PostFooter post={data.post} />
  </Layout>
)

export default Post
