const checkForSpam = function (message) {
    const forbiddenWords = ['spam', 'sale'];
    const lowerCaseMessage = message.toLowerCase();
    for (const word of forbiddenWords) {
      if (lowerCaseMessage.includes(word)) {
        return true;
      }
    }
    return false;
  };
  console.log(checkForSpam('Latest technology news'));
  console.log(checkForSpam('JavaScript weekly newsletter')); 
  console.log(checkForSpam('Get best sale offers now!'));
  console.log(checkForSpam('[SPAM] How to earn fast money?'));
  