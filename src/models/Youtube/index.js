import { YoutubeDataAPI } from 'youtube-v3-api';
import API_KEY from './api-key'; // Rename 'api-key.js.example' to 'api-key.js'

const YoutubeApi = new YoutubeDataAPI(API_KEY);


export default YoutubeApi;
