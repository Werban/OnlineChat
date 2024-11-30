export const Message = ({ messageInfo }) => {
	const formattedMessage = messageInfo.message.split('\n').map((line, index) => (
		<span key={index}>
			{line}
			<br />
		</span>
	));

	return (
		<div className="w-fit">
			<span className="text-sm text-slate-600">{messageInfo.userName}</span>
			<div className="p-2 bg-gray-100 rounded-lg shadow-md">
				{formattedMessage}
			</div>
		</div>
	);
};