import { Button, CloseButton, Heading, Textarea } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Message } from "./Message";

export const Chat = ({ messages, chatRoom, sendMessage, closeChat }) => {
	const [message, setMessage] = useState("");
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current.scrollIntoView();
	}, [messages]);

	const onSendMessage = () => {
		if (message.trim()) {
			sendMessage(message);
			setMessage("");
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault(); // Предотвращаем стандартное поведение (отправка формы)
			onSendMessage(); // Отправляем сообщение
		}
	};

	return (
		<div className="w-1/2 bg-white p-8 rounded shadow-lg">
			<div className="flex flex-row justify-between mb-5">
				<Heading size="lg">{chatRoom}</Heading>
				<CloseButton onClick={closeChat} />
			</div>

			<div className="flex flex-col overflow-auto scroll-smooth h-96 gap-3 pb-3">
				{messages.map((messageInfo, index) => (
					<Message messageInfo={messageInfo} key={index} />
				))}
				<span ref={messagesEndRef} />
			</div>
			<div className="flex gap-3">
				<Textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Введите сообщение"
					onKeyDown={handleKeyDown}
					resize="none" // Отключаем возможность изменения размера
				/>
				<Button colorScheme="blue" onClick={onSendMessage}>
					Отправить
				</Button>
			</div>
		</div>
	);
};