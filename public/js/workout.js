export const workOut = const options = {
    method: 'GET',
    url: 'https://www.googleapis.com/fitness/v1/resourcePath?parameters',
    headers: {

    }
}
    export const fetchData = async (url, options) => {
        const response = await fetch(url, options)
        const data = await response.json();

    return data;
}
