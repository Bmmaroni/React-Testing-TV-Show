import axios from 'axios'

const fetchShow = () => {
  axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => res.data);
}

export default fetchShow;