const memberName = 'John Snow';

const message = 'Hi $memberName, $guestName has just arrived at reception';

const replacedMessage = 'h';

const vars = ['$'];

const result = message.replace('$member', memberName, "$guestName", "hello");

console.log(result);
