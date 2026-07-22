import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div
      className="
prose
prose-neutral
max-w-none

dark:prose-invert

prose-headings:
font-heading

prose-headings:
tracking-tight

prose-p:
leading-8

prose-li:
leading-7

prose-strong:
text-foreground

"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}

        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
