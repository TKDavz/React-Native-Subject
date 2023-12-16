export type ColorTextType = {
    tilte: string;
    body: string;
}

export type ColorType = {
    default: string;
    dark: string;
    light: string;
    darkmode: string;
}

export type ButtonTextType = {
    areFollowing: string;
    notFollowedYet: string;
}

export type ButtonType = {
    follow: ButtonTextType;
    save: ButtonTextType;
}

export type TextColorType = {
    darkmode: ColorTextType;
    lightmode: ColorTextType;
}
