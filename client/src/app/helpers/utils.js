
export const userIsGameHost = (hostName) => {
    return localStorage.getItem("deepdiive_host") === hostName;
}

export const userIsGuest = (guestName) => {
    return localStorage.getItem("deepdiive_guests") === guestName;
}