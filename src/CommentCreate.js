import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
	const [content, setContent] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log("content", content);
		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content,
		});
		setContent("");
	};

	return (
		<div className="comment-create">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="comment-create-input">New Comment</label>
					<input
						onChange={(e) => setContent(e.target.value)}
						className="form-control"
						type="text"
						placeholder="Your comment"
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default CommentCreate;
