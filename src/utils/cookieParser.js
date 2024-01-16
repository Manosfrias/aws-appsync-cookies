export function cookieParser(action){
    return (fetchedCookie) => {
        const data = fetchedCookie?.data?.[action]

        if(!data) {
            return null;
        }

        const fetchedUserapp = data?.userapp
        const [user, app] = fetchedUserapp?.split("-") ?? ["", ""]

        return {
            user,
            app,
            version: data?.version
        }
    }
}