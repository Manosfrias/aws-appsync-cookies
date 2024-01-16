export const createCookieQuery = `
    mutation CreateCookieUserInfo($userapp: String!, $version: String!) {
        createCookieUserInfo(input: {userapp: $userapp, version: $version}) {
            userapp
            version
        }
    }
`