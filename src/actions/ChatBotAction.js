import axios from 'axios';
// import jsonp from 'jsonp';
import { ChatBotType, ErrorType } from './ActionType';
import { ChatBotUrl } from './ActionURL';
import { Configs } from './ActionConfigs';
import { chatResponse } from '../helpers/ChatBotHelper';

export function sendChat(chatbotHistory, chatMessage) {
  return function (dispatch) {
    const chatHistory = chatbotHistory;
    dispatch({ type: ChatBotType.INCHAT, chatHistory });
    // const div = document.getElementById('chatboxContent');
    // div.scrollTop = div.scrollHeight - div.clientHeight;
    axios
      .get(`${ChatBotUrl.CHATBOT + chatMessage}`, Configs.CHATBOTCONFIG)
      .then(response => {
        console.log(response);
        const respChat = chatResponse(response.data);
        if (respChat !== '') { chatHistory.push({ message: respChat, inChat: false }); }
        dispatch({ type: ChatBotType.INCHAT, chatHistory });
        // div.scrollTop = div.scrollHeight - div.clientHeight;
      })
      .catch(err => {
        dispatch({ type: ErrorType.ERROR_LOG, mesage: err.message });
      });
  };
}
