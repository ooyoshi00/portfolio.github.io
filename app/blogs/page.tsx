// ContentはMD部分をコンポーネントとしてパースされたオブジェクト
// { meta }はMDX内でexportしているオブジェクト
import Content, { meta } from './page.mdx'

const Page = () => {
  return (
    <>
      <header>
        <h1>{meta.title}</h1>
        <div>{meta.author}</div>
      </header>
      <article>
        {/* MDXをコンポーネントとして使うのがポイント */}
        <Content />
      </article>
    </>
  )
}

export default Page
