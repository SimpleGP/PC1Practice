/**
 * @sumamry Service for fetching TV Shows from API (TVMAZE)
 * @author SimpleGP
 */

import axios from 'axios'
import {Show} from "../entities/show.js";

const API_URL ='https://api.tvmaze.com/search/shows?q=golden%20girls'

export function fetchShows(){
     return axios.get(API_URL).then(response=>{
         return response.data.map(item => new Show(item.show))
     })
}