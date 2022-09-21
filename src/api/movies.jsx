const apiKey = "47f0f0ffa81364c3caf18e1b13bf8559";
const apiDomain = "https://api.themoviedb.org/3/";

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${apiDomain}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
