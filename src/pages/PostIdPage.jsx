import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, Error] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data);
	});
	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, []);

	return (
		<div>
			<h1>Page post = {params.id}</h1>
			{isLoading
				? <Loader />
				: <div>{post.id}. {post.title}</div>
			}
			<h1>
				Comments
			</h1>
			{isComLoading
				? <Loader />
				: <div>
					{comments.map(comm =>
						<div style={{ marginTop: 15 }}>
							<h5>{comm.email}</h5>
							<div>{comm.body}</div>
						</div>
					)}
				</div>
			}
		</div>
	);
};

export default PostIdPage;