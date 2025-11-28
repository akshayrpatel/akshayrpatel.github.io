import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

interface MessageRendererProps {
	content: string;
	isUser?: boolean;
}

const MessageRenderer: FC<MessageRendererProps> = ({ content, isUser }) => (
	<div
		className={
			isUser
				? "markdown-chat text-base leading-snug text-white"
				: "markdown-chat text-base leading-snug text-gray-900"
		}
	>
		<ReactMarkdown
			remarkPlugins={[remarkGfm, remarkBreaks]}
			components={{
				h1: (props) => (
					<h1
						className={`font-bold text-lg mt-1 mb-1 ${
							isUser ? "text-white" : "text-blue-700"
						}`}
						{...props}
					/>
				),
				h2: (props) => (
					<h2
						className={`font-semibold text-base mt-1 mb-1 ${
							isUser ? "text-white" : "text-blue-600"
						}`}
						{...props}
					/>
				),
				h3: (props) => (
					<h3
						className={`font-semibold text-base mt-1 mb-1 ${
							isUser ? "text-white" : "text-blue-500"
						}`}
						{...props}
					/>
				),
				p: (props) => <p className="my-1" {...props} />,
				ul: (props) => <ul className="list-disc ml-4 my-1" {...props} />,
				ol: (props) => <ol className="list-decimal ml-4 my-1" {...props} />,
				li: (props) => <li className="my-0.5" {...props} />,
				code: (props) => (
					<code
						className={`bg-white/20 rounded px-1 ${
							isUser ? "text-white" : "text-gray-900"
						}`}
						{...props}
					/>
				),
				pre: (props) => (
					<pre
						className={`bg-white/20 rounded p-2 overflow-x-auto my-1 ${
							isUser ? "text-white" : "text-gray-900"
						}`}
						{...props}
					/>
				),
				blockquote: (props) => (
					<blockquote
						className={`border-l-4 ${
							isUser ? "border-white/40" : "border-blue-200"
						} pl-2 italic my-1`}
						{...props}
					/>
				),
				img: (props) => <img className="rounded-lg max-h-40 my-2" {...props} />,
				a: (props) => (
					<a
						className={`underline ${isUser ? "text-white" : "text-blue-600"}`}
						{...props}
					/>
				),
			}}
		>
			{(content || "").trim()}
		</ReactMarkdown>
	</div>
);

export default MessageRenderer;
