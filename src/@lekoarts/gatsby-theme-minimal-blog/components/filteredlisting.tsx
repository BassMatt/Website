/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogListItem from "@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item"

type ListingProps = {
  posts: ListingPost []
  className?: string
  showTags?: boolean
  tagFilter?: string
  limit?: number
}

type ListingPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  description: string
  timeToRead?: number
  tags?: {
    name: string
    slug: string
  }[]
}

const FilteredListing = ({ posts, tagFilter=``, className = ``, showTags = true, limit = 3 }: ListingProps) => (
  <section sx={{ mb: [5, 6, 7] }} className={className}>
    {posts.filter(post => post.tags?.some(tag => tag.name == tagFilter)).slice(0, limit).map((post) => (
      <BlogListItem key={post.slug} post={post} showTags={showTags} />
    ))}
  </section>
)

export default FilteredListing
