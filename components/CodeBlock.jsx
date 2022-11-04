import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ children, language }) => {
	return (
		<SyntaxHighlighter showLineNumbers style={oneDark} language={language}>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
