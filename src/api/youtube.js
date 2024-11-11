import axios from 'axios';

const KEY = "AIzaSyDMYTNhYQiBuAmLPw5zMZiXRLYKNcnyd2o"; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
