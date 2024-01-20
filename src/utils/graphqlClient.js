import { fetchGraphqlData } from "./fetchGraphqlData";

export async function graphqlClient(queryconfig, dataParser){

    const data = await fetchGraphqlData(queryconfig)

    if(!data) {
        return null
    }

    if(!dataParser){
        return data 
    }

    return dataParser(data);
}