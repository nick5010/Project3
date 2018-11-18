import React from "react";
import "./ChatLog.css";

const ChatLog = () => (
  <div className="card chatLog">
    <h5 className="card-header">Messages with User Test</h5>
    <div className="card-body">
      
      <p className="card-text">
      Marge, it takes two to lie. One to lie and one to listen. I didn't get rich by signing checks. That's why I love elementary school, Edna. The children believe anything you tell them. Me fail English? That's unpossible.

Yes! I am a citizen! Now which way to the welfare office? I'm kidding, I'm kidding. I work, I work. Well, he's kind of had it in for me ever since I accidentally ran over his dog. Actually, replace "accidentally" with "repeatedly" and replace "dog" with "son."

When I held that gun in my hand, I felt a surge of power…like God must feel when he's holding a gun. They only come out in the night. Or in this case, the day. What good is money if it can't inspire terror in your fellow man?

      </p>
      
    </div>
    <button className="btn waves-effect waves-light translateBtn">Translate Text</button>
  </div>
);

export default ChatLog;
