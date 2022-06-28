export const responseStatus = {
  status: '',
  message: ''
}

export default class PostService {
  static async postData (body) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'credentials': 'include',
        'mode': 'cors',
        'strict-origin-when-cross-origin': 'origin'
      }
    })
    const data = await response.json();
  }
}