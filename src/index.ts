import fetch from 'node-fetch';
export default class Frontend {
  constructor() {
    console.log('Frontend constructor');
  }

  async fetch(url?: string) {
    // node fetch get url
    let f = await fetch('http://localhost:3000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let j = await f.json();
    
  }
}