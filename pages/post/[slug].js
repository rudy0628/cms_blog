import React from 'react';

import { getPosts, getPostDetails } from '../../services/index';

import { serialize } from 'next-mdx-remote/serialize';

import {
	PostDetail,
	Categories,
	PostWidget,
	Author,
	Comments,
	CommentsForm,
} from '../../components';

const PostDetails = ({ post, source }) => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="col-span-1 lg:col-span-8">
					<PostDetail post={post} source={source} />
					<Author author={post.author} />
					<CommentsForm slug={post.slug} />
					<Comments slug={post.slug} />
				</div>
				<div className="col-span-1 lg:col-span-4">
					<div className="relative lg:sticky top-8">
						<PostWidget
							slug={post.slug}
							categories={post.categories.map(category => category.slug)}
						/>
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);
	const mdxSource = await serialize(data.content);

	return {
		props: {
			post: data,
			source: mdxSource,
		},
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: false,
	};
}

export default PostDetails;
