const BASE_API = 'https://yts.am/api/v2/'

class Api {
  async getSuggestion(id) {
    return this.getQuery(`movie_suggestions.json?movie_id=${id}`)
  }
  async getMovies() {
    return this.getQuery('list_movies.json')
  }
  async searchMovie(title) {
    return this.getQuery(`list_movies.json?limit=1&sort_by=rating&query_term=${title}`)
  }

  async getQuery(queryType) {
    const query = await fetch(`${BASE_API}${queryType}`)
    const { data } = await query.json();
    return data.movies
  }
}

export default new Api()