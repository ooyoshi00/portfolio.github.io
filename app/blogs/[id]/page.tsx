import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { compileMDX } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = ['p1', 'p2']
  // return posts.map((dir) => {
  //   return { id: 'p1' }
  // })
  return [{ id: 'p1' }, { id: 'p2' }]
}

const loadMDX = async (dir: string) => {
  const root = path.resolve()
  const mdxpath = path.join(root, 'mdx', dir, 'page.mdx')
  // mdxファイルを読み取ってパース
  const data = await readFile(mdxpath, { encoding: 'utf-8' })
  return compileMDX({ source: data })
}

export default async function Page({ params }: { params: { id: string } }) {
  /**
   * {
   * 　content: MDXのパース結果,
   * 　frontmatter: front-matterのパース結果
   * }
   */
  const mdx = await loadMDX(params.id)
  return <>{mdx.content}</>
}
