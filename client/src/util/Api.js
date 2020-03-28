import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:8882`,
  headers: {
    'Content-Type': 'application/json',
  }
});