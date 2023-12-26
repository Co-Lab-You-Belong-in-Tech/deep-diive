// optimize images
export const getResponsiveImage = (image: any) => {
    return image.replace(/upload\//, "$&q_auto,f_auto,fl_lossy/");
};