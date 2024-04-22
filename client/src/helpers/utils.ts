// optimize images
export const getResponsiveImage = (image: any) => {
    return image.replace(/upload\//, "$&q_auto,f_auto,fl_lossy/");
};

// get host name from localStorage and export as function
export const userIsGameHost = (hostName: string) => {

    let value;
    if (typeof window !== "undefined") {
        value = localStorage.getItem("deepdiive_host") || ""
      }
    return value === hostName;
}

// get guest name from localStorage and export as function
export const userIsGuest = (guestName: string) => {
    let value;
    if (typeof window !== "undefined") {
        value = localStorage.getItem("deepdiive_guests") || ""
      }
    return value === guestName;
}