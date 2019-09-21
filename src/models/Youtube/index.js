import { YoutubeDataAPI } from 'youtube-v3-api';

const API_KEY = '<ENTER YOUR API KEY HERE>';
const api = new YoutubeDataAPI(API_KEY);

const query = '';
const maxResults = 0;

api.searchAll(query, maxResults).then((data) => {
  console.log(data);
},(err) => {
  console.error(err);
})
