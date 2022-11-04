import React from 'react';

const Author = ({ author }) => {
	return (
		<div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
			<div className="absolute left-[50%] -top-14 translate-x-[-50%]">
				<img
					src={author.photo.url}
					alt={author.name}
					className="h-[100px] w-[100px] align-middle rounded-full object-cover"
				/>
			</div>
			<h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
			<p className="text-white text-lg">{author.bio}</p>
		</div>
	);
};

export default Author;
