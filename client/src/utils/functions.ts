export const firstLetterMayus = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const shortText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    } else {
        return text;
    }
};
