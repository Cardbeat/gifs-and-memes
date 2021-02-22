import { GiphyFetch } from "@giphy/js-fetch-api";

const giphyFetch = new GiphyFetch("915OdJ27PgvbB73j4AMYNyV2IZn4Oe4C");

export async function getSearch(palavra, offset, limit) {
  try {
    const response = await giphyFetch.search(palavra, {
      offset: offset,
      limit: limit,
    });

    if (response) {
      return response;
    }

    return null;
  } catch (error) {
    console.log("erro na requisição de pesquisa com a palavra " + palavra);
  }
}
