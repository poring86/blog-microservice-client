const CommentList = ({ comments }) => {
	const renderedComments = comments.map((comment) => {
		let content;
		if (comment.status === "approved") {
			content = comment.content;
		}
		if (comment.status === "pending") {
			content = "Comment is awaiting moderation";
		}
		if (comment.status === "rejected") {
			content = "Comment has been rejected";
		}

		return (
			<li key={comment.id}>
				<p>{content}</p>
			</li>
		);
	});

	return <ul>{renderedComments}</ul>;
};

export default CommentList;
