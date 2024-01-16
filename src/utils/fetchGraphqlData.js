export async function fetchGraphqlData(queryconfig){
    const {config, body} = queryconfig;

    const data = await fetch(config.apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": config.apiKey
        },
        body: JSON.stringify(body)
    })

    if(!data) {
        return null
    }

    const parsedData = data.json();

    if(parsedData?.errors) {
        parsedData.errors.forEach(error => {
            console.error(`${error.errorType}: ${error.message}`)
        });
    }

    return parsedData;
}