import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

class BackendApi {
  static async getPosts() {
    try {
      const resp = await axios.get(`${BASE_URL}/posts`);

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

      return resp;
    } catch (err) {
      return err;
    }
  }

  static async addPost(post) {
    try {
      const resp = await axios.post(`${BASE_URL}/posts`, post);
      console.log("IN API", resp.data)
      return resp;
    } catch (err) {
      return err;
    }
  }

  static async putPost(postId, post) {
    try {
      const resp = await axios.put(`${BASE_URL}/posts/${postId}`, post);
      console.log("IN API", resp.data)
      return resp;
    } catch (err) {
      return err;
    }
  }

  static async deletePost(postId) {
    try {
      const resp = await axios.delete(`${BASE_URL}/posts/${postId}`);
      return resp;
    } catch (err) {
      return err;
    }
  }

  static async addComment(postId, comment) {
    try {
      const resp = await axios.post(`${BASE_URL}/posts/${postId}/comments`,
        comment);
      return resp;
    } catch (err) {
      return err;
    }
  }

  static async deleteComment(postId, commentId) {
    try {
      const resp = await axios.delete(`${BASE_URL}/posts/${postId}/comments/${commentId}`);

      return resp;
    } catch (err) {
      return err;
    }
  }

}

export default BackendApi;