export const colorsDefault = {
    primaryColor: "#1877F2",
    white: "#FFFFFF",
    black: "#000000",
    lightGray: "#C4C4C4",

    error_Group: {
        default: "#ED2E7E",
        dark: "#C30052",
        light: "#FFF3F8",
        darkmode: "#FF84B7"
    },

    success_Group: {
        default: "#00BA88",
        dark: "#FF84B7",
        light: "#34EAB9",
        darkmode: "#34EAB9"
    },

    warning_Group: {
        default: "#F4B740",
        dark: "#946200",
        light: "#FFD789",
        darkmode: "#FFD789"
    },

    grayscaleColor_Group: {
        titleActive: "#050505",
        bodyText: "#4E4B66",
        buttonText: "#667080",
        placeholder: "#A0A3BD",
        button: "#EEF1F4",
        disableInput: "#EEF1F4",

        backgroudImage: "#EEF1F4",
    },

    darkmodeColor_Group: {
        background: "#1C1E21",
        input: "#3A3B3C",
        body: "#B0B3B8",
        title: "#E4E6EB"
    }
};

export const buttonText = {

    follow: {
        areFollowing: "Following",
        notFollowedYet: "Follow",
    },

    save: {
        saved: "Saved",
        notSavedYet: "Save",
    },
};

export const textColor = {
    darkmode:
    {
        tilte: colorsDefault.darkmodeColor_Group.title,
        body: colorsDefault.darkmodeColor_Group.body,
    },

    lightmode: {
        tilte: colorsDefault.black,
        body: colorsDefault.grayscaleColor_Group.bodyText
    }

};

export const iconColor = {
    darkmode:
    {
        normal: colorsDefault.darkmodeColor_Group.title,
        active: colorsDefault.primaryColor,
        error: colorsDefault.darkmodeColor_Group.body,
    },

    lightmode: {
        normal: colorsDefault.grayscaleColor_Group.bodyText,
        active: colorsDefault.grayscaleColor_Group.titleActive,
        error: colorsDefault.darkmodeColor_Group.body,
    }

};