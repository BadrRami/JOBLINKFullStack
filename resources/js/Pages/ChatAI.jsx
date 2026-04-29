import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { route } from "ziggy-js";
import '../../css/ChatAI.css';
import Menu from "./Menu";

export default function ChatAI() {
    const [message, setMessage]   = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading]   = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMsg = { role: "user", content: message };
        setMessages(prev => [...prev, userMsg]);
        setMessage("");
        setLoading(true);

        try {
            const res = await axios.post(route('ai.ask'), { message }, {
    timeout: 180000  // 3 minutes en millisecondes
});
            setMessages(prev => [...prev, { role: "assistant", content: res.data.reply }]);
        } catch (err) {
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "Erreur : " + (err.response?.data?.reply || "Connexion échouée")
            }]);
        } finally {
            setLoading(false);
        }
    };

    return (
      <>
      <Menu />
        <div id="jl-chat">
            {/* ── Header ── */}
            <div id="jl-chat-header">
                <div id="jl-chat-avatar">
                    <i className="bi bi-robot"></i>
                </div>
                <div>
                    <p id="jl-chat-title">JobLink Assistant</p>
                    <p id="jl-chat-status">
                        <span id="jl-chat-dot"></span>
                        En ligne
                    </p>
                </div>
            </div>

            {/* ── Messages ── */}
            <div id="jl-chat-messages">
                {messages.length === 0 && (
                    <p id="jl-chat-empty">Pose ta première question…</p>
                )}
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`jl-msg-row ${msg.role === "user" ? "jl-msg-row--user" : "jl-msg-row--ai"}`}
                    >
                        {msg.role === "assistant" && (
                            <div className="jl-msg-avatar">
                                <i className="bi bi-robot"></i>
                            </div>
                        )}
                        <span className={`jl-bubble ${msg.role === "user" ? "jl-bubble--user" : "jl-bubble--ai"}`}>
                            {msg.content}
                        </span>
                    </div>
                ))}
                {loading && (
                    <div className="jl-msg-row jl-msg-row--ai">
                        <div className="jl-msg-avatar">
                            <i className="bi bi-robot"></i>
                        </div>
                        <span className="jl-bubble jl-bubble--ai jl-bubble--typing">
                            <span></span><span></span><span></span>
                        </span>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* ── Input ── */}
            <div id="jl-chat-input-row">
                <input
                    id="jl-chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Pose ta question…"
                    disabled={loading}
                />
                <button
                    id="jl-chat-send"
                    onClick={sendMessage}
                    disabled={loading}
                    aria-label="Envoyer"
                >
                    <i className="bi bi-send-fill"></i>
                </button>
            </div>
        </div>
        </>
    );
}