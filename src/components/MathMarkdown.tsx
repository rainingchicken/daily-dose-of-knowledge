import React from "react";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

interface MathMarkdownProps {
  markdown: string;
}
const MathMarkdown = ({ markdown }: MathMarkdownProps) => {
  return (
    <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {markdown}
    </Markdown>
  );
};

export default MathMarkdown;
