import { YoutubeDataAPI } from 'youtube-v3-api';
import API_KEY from './api-key'; // Rename 'api-key.js.example' to 'api-key.js'

const api = new YoutubeDataAPI(API_KEY);

const query = '';
const maxResults = 0;

api.searchAll(query, maxResults).then((data) => {
  console.log(data);
},(err) => {
  console.error(err);
})
