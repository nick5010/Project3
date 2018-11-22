import React from "react";
import "./MessageContent.css";
import { Input } from "react-materialize";



//THIS KEY NEEDS TO BE HIDDEN//
const googleApiKey = "AIzaSyBqxoLKtpqHsvMm9aNpa6NWJ42t2OYnN9A"
const googleTranslate = require("google-translate")(googleApiKey);

class MessageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageSent: false,
      translated: false,
      translatedText: "",

      langCodeList: [
        "af",
        "sq",
        "ar",
        "az",
        "eu",
        "bn",
        "be",
        "bg",
        "ca",
        "zh-CN",
        "zh-TW",
        "hr",
        "cs",
        "da",
        "nl",
        "en",
        "eo",
        "et",
        "tl",
        "fi",
        "fr",
        "gl",
        "ka",
        "de",
        "el",
        "gu",
        "ht",
        "iw",
        "hi",
        "hu",
        "is",
        "id",
        "ga",
        "it",
        "ja",
        "ko",
        "la",
        "lv",
        "lt",
        "mk",
        "ms",
        "mt",
        "no",
        "fa",
        "pl",
        "pt",
        "ro",
        "ru",
        "sr",
        "sk",
        "sl",
        "es",
        "sw",
        "sv",
        "ta",
        "te",
        "th",
        "tr",
        "uk",
        "ur",
        "vi",
        "cy",
        "yi"
      ],

      langList: [
        "Afrikaans",
        "Albanian",
        "Arabic",
        "Azerbaijani",
        "Basque",
        "Bengali",
        "Belarusian",
        "Bulgarian",
        "Catalan",
        "Chinese Simplified",
        "Chinese Traditional",
        "Croatian",
        "Czech",
        "Danish",
        "Dutch",
        "English",
        "Esperanto",
        "Estonian",
        "Filipino",
        "Finnish",
        "French",
        "Galician",
        "Georgian",
        "German",
        "Greek",
        "Gujarati",
        "Haitian Creole",
        "Hebrew",
        "Hindi",
        "Hungarian",
        "Icelandic",
        "Indonesian",
        "Irish",
        "Italian",
        "Japanese",
        "Kannada",
        "Korean",
        "Latin",
        "Latvian",
        "Lithuanian",
        "Macedonian",
        "Malay",
        "Maltese",
        "Norwegian",
        "Persian",
        "Polish",
        "Portuguese",
        "Romanian",
        "Russian",
        "Serbian",
        "Slovak",
        "Slovenian",
        "Spanish",
        "Swahili",
        "Swedish",
        "Tamil",
        "Telugu",
        "Thai",
        "Turkish",
        "Ukrainian",
        "Urdu",
        "Vietnamese",
        "Welsh",
        "Yiddish"
      ]
    };
  }

  translate = (message, language) => {
    let that = this;
    if (this.props.msgToBeTranlated.length) {
      googleTranslate.translate(this.props.msgToBeTranlated, "es", function(
        err,
        translation
      ) {
        console.log(translation.translatedText);
        console.log(that);

        that.setState({
          translatedText: translation.translatedText,
          translated: true
        });
      });
    } else return;
  };
languageSelect = (message, language) => {
 
}
  render() {
    return (
      <div className="messageContentParent">
        <li className="messageContentDiv">
          <div className="row">
            <div className="profilePic col s1 m1 l1">
              {/* Prop of component will replace this placeholder */}
              {/* {this.props.profilePic} */}
              <a href="https://www.placeholder.com">
                {" "}
                <img src="https://via.placeholder.com/40" alt="" />
              </a>
            </div>
            <div className="messageContent col s9 m9 l9">
              {!this.state.translated ? (
                <p className="messageText">{this.props.msgToBeTranlated}</p>
              ) : (
                <p className="messageText">{this.state.translatedText}</p>
              )}
            </div>
            <div className="messageDateTimeDiv col s2 m2 l2">
              {/* 11:29 AM / 09-20-18 {formatDate(props.date)} */}
              <p className="messageDateTime">11:29 AM / 11/21/18</p>


              <Input
            name="chosenLang"
              s={12}
              type="select"
              onChange={this.languageSelect}
              className="langDrop"
              
            >
              {this.state.langList.length
                ? this.state.langList.map((language, index) => (
                    <option value={language} key={index}>
                      {language}
                    </option>
                  ))
                : "Nope"}
            </Input>

            
              <button
                onClick={this.translate}
                className="btn waves-effect waves-light translateBtn"
              >
                Translate Text
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default MessageContent;
