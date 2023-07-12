async function getNumTransactions(username) {
    try {
      const url = `https://jsonmock.hackerrank.com/api/article_users?username=${username}`;
      const response = await fetch(url);
      const userData = await response.json();
      const userId = userData.data.id;
  
      const gtUrl = `https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`;
      const gtResponse = await fetch(gtUrl);
      const gtData = await gtResponse.json();
      const total = gtData.total;
  
      if (total) {
        return total;
        console.log(total);
      } else {
        return 'Username Not found';
        console.log('s')
      }
    } catch (error) {
      console.log(error);
    }
  }
  getNumTransactions(jay);