
export const userIsGameHost = (hostName) => {
    return localStorage.getItem("deepdiive_host") === hostName;
}