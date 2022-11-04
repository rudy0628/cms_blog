import React from 'react';
import moment from 'moment/moment';
import CodeBlock from './CodeBlock';

import { MDXRemote } from 'next-mdx-remote';

const components = { CodeBlock };

const PostDetail = ({ post, source }) => {
	return (
		<div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
			<div className="relative overflow-hidden shadow-md mb-6">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					className="object-top h-full w-full rounded-t-lg"
				/>
			</div>
			<div className="px-4 lg:px-0">
				{/* date and author */}
				<div className="block lg:flex text-center items-center justify-center mb-8 w-full">
					<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
						<img
							src={post.author.photo.url}
							alt={post.author.name}
							className="align-middle rounded-full h-10 w-10"
						/>
						<p className="inline align-middle text-gray-700 ml-2 text-lg">
							{post.author.name}
						</p>
					</div>
					<div className="font-medium text-gray-700">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 inline mr-2 text-pink-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
					</div>
				</div>
				<h1 className="mb-8 text-3xl font-semibold text-center">
					{post.title}
				</h1>
				{/* content */}
				<div className="content">
					<MDXRemote {...source} components={components} />
				</div>
			</div>
		</div>
	);
};

export default PostDetail;
