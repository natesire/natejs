import fetch from 'node-fetch';
export default class Frontend {
  constructor() {
    console.log('Frontend constructor');
  }

  fetch(url?: string) {
    // node fetch get url
    fetch('http://localhost:3000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  }
}