export const getCookieQuery = `
    query GetCookieUserInfo($userapp: String!) {
        getCookieUserInfo(userapp: $userapp) {
            version
        }
    }
`
