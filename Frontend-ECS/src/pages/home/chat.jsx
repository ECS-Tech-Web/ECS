// import { useState, useEffect, useRef } from "react";

// function Chat() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isOpen, setIsOpen] = useState(true); // Minimize toggle
//   const [isTyping, setIsTyping] = useState(false); // Typing indicator
//   const messagesEndRef = useRef(null);

//   // Auto-scroll to latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { type: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsTyping(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: input }),
//       });

//       const data = await response.json();
//       const botMessage = { type: "bot", text: data.reply };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       console.error(error);
//       const botMessage = { type: "bot", text: "Sorry, I couldn't respond." };
//       setMessages((prev) => [...prev, botMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Minimized Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-full text-white font-bold"
//         >
//           Chat
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 bg-gray-900 text-white rounded-xl shadow-lg p-4 flex flex-col space-y-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-center text-2xl font-bold text-emerald-400 mb-2">
//               Chat with ECE Bot
//             </h3>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-white font-bold text-xl"
//             >
//               &times;
//             </button>
//           </div>

//           <div className="flex-1 h-64 overflow-y-auto p-2 bg-gray-800 rounded-md space-y-2">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 rounded-lg max-w-[80%] ${
//                   msg.type === "user"
//                     ? "bg-emerald-500 self-end text-black"
//                     : "bg-gray-700 self-start"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="p-2 rounded-lg max-w-[80%] bg-gray-700 self-start italic text-sm">
//                 ECE Bot is typing...
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           <div className="flex space-x-2 mt-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 p-2 rounded-md text-black outline-none"
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md font-semibold"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chat;
