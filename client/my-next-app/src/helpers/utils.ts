// optimize images
export const getResponsiveImage = (image: any) => {
    return image.replace(/upload\//, "$&q_auto,f_auto,fl_lossy/");
};

// get host name from localStorage and export as function
export const userIsGameHost = (hostName: string) => {
    return localStorage.getItem("deepdiive_host") === hostName;
}

// get guest name from localStorage and export as function
export const userIsGuest = (guestName: string) => {
    return localStorage.getItem("deepdiive_guests") === guestName;
}