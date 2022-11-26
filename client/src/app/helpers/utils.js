// get host name from localStorage and export as function
export const userIsGameHost = (hostName) => {
    return localStorage.getItem("deepdiive_host") === hostName;
}

// get guest name from localStorage and export as function
export const userIsGuest = (guestName) => {
    return localStorage.getItem("deepdiive_guests") === guestName;
}

// optimize images
export const getResponsiveImage = (image) => {
    return image.replace(/upload\//, "$&q_auto,f_auto,fl_lossy/");
};