import { graphqlClient } from "./graphqlClient"
import { getCookieQuery } from "../querys/getCookieQuery"
import { createCookieQuery } from "../querys/createCookieQuery"
import { updateCookieQuery } from "../querys/updateCookieQuery"
import { cookieParser } from "./cookieParser"

export function cookieService(config) {

    async function getCookieVersion(cookie){
        const userapp = `${cookie.user}-${cookie.app}`

        return await graphqlClient(
            {
                config,
                body:{
                    query: getCookieQuery,
                    variables: {userapp}
                }
            },
            cookieParser("getCookieUserInfo")
        )
    }

    async function createCookie(cookie){
        const userapp = `${cookie.user}-${cookie.app}`
        const version = cookie.version

        return await graphqlClient(
            {
                config,
                body:{
                    query: createCookieQuery,
                    variables: {userapp, version}
                }
            },
            cookieParser("createCookieUserInfo")
        )
    }

    async function updateCookie(cookie){
        const userapp = `${cookie.user}-${cookie.app}`
        const version = cookie.version

        return await graphqlClient(
            {
                config,
                body:{
                    query: updateCookieQuery,
                    variables: {userapp, version}
                }
            },
            cookieParser("updateCookieUserInfo")
        )
    }

    return {
        getCookieVersion,
        createCookie,
        updateCookie
    }
}