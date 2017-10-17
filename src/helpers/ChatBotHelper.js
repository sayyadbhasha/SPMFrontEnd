import { hashHistory } from 'react-router';

export function chatResponse(data) {
  const respIntent = data;
  let respChat = 'Sorry i did not understand.';
  if (data.entities.intent !== undefined) {
    switch (respIntent.entities.intent[0].value) {
      case 'greeting':
        respChat = 'Hi, How can i help you.';
        break;

      case 'farewell':
        respChat = 'Good Bye.';
        break;

      case 'company':
        hashHistory.push('CompanyInfo');
        respChat = '';
        break;

      case 'employee':
        hashHistory.push('AddEmployee');
        respChat = '';
        break;

      case 'home':
        hashHistory.push('/');
        respChat = '';
        break;

      default:
        respChat = 'Sorry i did not understand.';
        break;
    }
  }

  return respChat;
}
