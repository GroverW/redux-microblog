import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

class BackendApi {
  static async getPosts() {
    try {
      const resp = await axios.get(`${BASE_URL}/posts`);
      console.log("inside api class", resp)
      const posts = resp.data
        .reduce((posts, post) => ({
          ...posts,
          [post.id]: {
            title: post.title,
            description: post.description,
            votes: post.votes
          }
        }), {});
      return posts;
    } catch (err) {
      return err;
    }
  }

  static async getPost(postId) {
    try {
      const resp = await axios.get(`${BASE_URL}/posts/${postId}`)
      console.log("inside api class", resp);

      return resp;
    } catch (err) {
      return err;
    }
  }
}

export default BackendApi;