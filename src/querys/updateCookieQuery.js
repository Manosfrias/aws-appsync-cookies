export const updateCookieQuery = `
    mutation UpdateCookieUserInfo($userapp: String!, $version: String!) {
        updateCookieUserInfo(input: {userapp: $userapp, version: $version}) {
            userapp
            version
        }
    }
`
