
const ViewTicket = () => {
    return (
        <div className="mt-10">
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="/logo512.png" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">
                    That's never been done in the history of the Jedi. It's insulting!
                    It was said that you would, destroy the Sith, not join them.
                    It was said that you would, destroy the Sith, not join them.
                </div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="/default-avatar.png" />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">
                    That's never been done in the history of the Jedi. It's insulting!
                    It was said that you would, destroy the Sith, not join them.
                    It was said that you would, destroy the Sith, not join them.
                </div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
        </div>
    )
}

export default ViewTicket
