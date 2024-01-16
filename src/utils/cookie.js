import { graphqlPort } from "./graphqlPort"
import { getCookieQuery } from "../querys/getCookieQuery"
import { createCookieQuery } from "../querys/createCookieQuery"
import { updateCookieQuery } from "../querys/updateCookieQuery"
import { cookieParser } from "./cookieParser"

export function cookieService(config) {
    async function getCookie(cookie){
        const userapp = `${cookie.user}-${cookie.app}`

        return await graphqlPort(
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

        return await graphqlPort(
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

        return await graphqlPort(
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
        getCookie,
        createCookie,
        updateCookie
    }
}