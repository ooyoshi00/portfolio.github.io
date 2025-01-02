'use client'
import { CalendarIcon, TagIcon } from 'lucide-react'
import { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter'

interface BlogPostProps {
  post: {
    title: string
    content: ReactElement
    date: string
    author: string
    tags: string[]
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <div className="flex items-center mb-4">
        {/* <Image
          src={post.author.image}
          alt={post.author.name}
          width={40}
          height={40}
          className="rounded-full mr-2"
        /> */}
        <span className="text-gray-600 mr-4">{post.author}</span>
        <CalendarIcon className="w-4 h-4 text-gray-400 mr-1" />
        <time className="text-gray-600">{post.date}</time>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm flex items-center"
          >
            <TagIcon className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <div className="prose prose-blue max-w-none">
        {post.content}
        {/* <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown> */}
      </div>
    </div>
  )
}

export default BlogPost