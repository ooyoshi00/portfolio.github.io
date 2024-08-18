import path from 'path'
import ResponsiveAppBar from '../_component/appHeader'
import fs from 'fs'
import { readFile } from 'node:fs/promises'
import Link from 'next/link'
import { compileMDX } from 'next-mdx-remote/rsc'

export async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'mdx')
  const filenames = fs
    .readdirSync(postsDirectory, {
      withFileTypes: true
    })
    .filter((dirent) => dirent.isDirectory)
  const result = await Promise.all(
    filenames.map(async (direct) => {
      const mdx = await loadMDX(direct.name)
      return await { pathname: direct.name, frontmatter: mdx.frontmatter }
    })
  )
  return result
}

/**
 * @param dir urlのroute（p1,p2,p3）
 */
async function loadMDX(dir: string) {
  const root = path.resolve()
  const mdxpath = path.join(root, 'mdx', dir, 'page.mdx')
  const data = await readFile(mdxpath, { encoding: 'utf-8' })
  // mdxをパースする。
  // remark,rehypeのプラグインを指定する場合、またfront-matterもパースする場合、ここで指定する
  return compileMDX({
    source: data,
    options: {
      parseFrontmatter: true
    }
  })
}

const BlogIndex = async () => {
  const posts = await getPosts()
  console.log('refefaefa****', posts)
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.pathname}>
            <Link href={`/blogs/${post.pathname}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogIndex
