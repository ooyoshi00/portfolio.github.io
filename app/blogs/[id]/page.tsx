import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs'
import ResponsiveAppBar from '../../_component/appHeader'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'mdx')
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map((filename) => ({
    id: filename.replace(/\.mdx?$/, '')
  }))
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

export default async function Page({ params }) {
  const mdx = await loadMDX(params.id)
  const content = mdx.content
  const frontmatter = mdx.frontmatter as { title: string; author: string }
  return (
    <div>
      <ResponsiveAppBar />
      <header
        style={
          {
            /*略*/
          }
        }
      >
        <h1>{frontmatter.title}</h1>
        <div>{frontmatter.author}</div>
        <div>{new Date().toLocaleString()}</div>
      </header>
      <article>{content}</article>
    </div>
  )
}