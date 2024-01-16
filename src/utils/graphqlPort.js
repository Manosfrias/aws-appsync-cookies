import { fetchGraphqlData } from "./fetchGraphqlData";

export async function graphqlPort(queryconfig, dataParser){
    const data = await fetchGraphqlData(queryconfig)

    if(!data) {
        return null
    }

    if(!dataParser){
        return data 
    }

    return dataParser(data);
}