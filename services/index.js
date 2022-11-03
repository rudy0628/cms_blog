import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query GetPosts {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
	const query = gql`
		query GetRecentPost {
			posts(orderBy: createdAt_ASC, last: 3) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.posts;
};

export const getSimilarPosts = async (category, slug) => {
	const query = gql`
		query GetSimilarPosts($slug: String!, $categories: [String!]) {
			posts(
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.posts;
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.categories;
};
