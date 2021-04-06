const api = "https://www.skiddle.com/api/v1/events/search/";
const apiKey = "008f1e6099ecc48e990e3776784d447b"

export const getEvents =  async () => {

    return fetch(api + apiKey)
    .then(resp => resp.json());


}