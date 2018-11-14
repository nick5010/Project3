import React from "react";
import "./MessageInput.css";



const MessageInput = () => (
<div className="MessageInput" id="footer">
<div className="messageInputDiv card col s12 m12 l12">
    <div className="secondaryRow2 row valign-wrapper">
            <i class="material-icons prefix">mode_edit</i>
        <div className="messageContent card col s10 m10 l10 center-align">
            <form className="textInput">
                <input placeholder="Please type your message here!" type="text" />
            </form>
        </div>
        <div className="row col s2 m2 l2">
            
                <button className="translateBtn">Translate Text</button>
            
           
                <button className="sendBtn">Send</button>
            
        </div>
    </div>
</div>
</div>
)
export default MessageInput;