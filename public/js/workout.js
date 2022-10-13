 const workout = {
    method: 'GET',
    headers: {
     'Accept': 'application/json',
     'Content-Type':'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
  "dataStreamName": "MyDataSource",
  "type": "derived",
  "application": {
    "detailsUrl": "http://example.com",
    "name": "Foo Example App",
    "version": "1"
  },
  "dataType": {
    "field": [
      {
        "name": "steps",
        "format": "integer"
      }
    ],
    "name": "com.google.step_count.delta"
  },
  "device": {
    "manufacturer": "Example Manufacturer",
    "model": "ExampleTablet",
    "type": "tablet",
    "uid": "1000001",
    "version": "1"
  }
})
}
    const url = process.env.GOOGLE_fit_url
    const fetchData = async (url, options) => {
        const response = await fetch(url, options)
        const data = await response.json();

    return data;
}

module.exports = {workout, fetchData};