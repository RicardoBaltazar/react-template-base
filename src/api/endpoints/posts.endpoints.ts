export class PostsEndpoints {
  fetchPosts() {
    return 'https://jsonplaceholder.typicode.com/posts';
  }

  delayedFetchPosts() {
    return 'http://slowwly.robertomurray.co.uk/delay/5000/url/https://jsonplaceholder.typicode.com/posts';
  }
}
