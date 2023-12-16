import { ImageSourcePropType, LayoutChangeEvent, ViewStyle } from "react-native";

export type NewsCartProps = {
    isDarkmode?: boolean | undefined;

    newsType?: string | undefined;
    newsTitle?: string | undefined;
    newsLogoAuthor?: ImageSourcePropType |  undefined;
    newsAuthorName?: string | undefined;
    newsTime?: string | undefined;

    newsImage: ImageSourcePropType ;

    style?: ViewStyle | ViewStyle[] | undefined;

    onPress?: () => void | undefined;
    onLongPress?: () => void | undefined;
    onLayout?: (event: LayoutChangeEvent) => void | undefined;
}

export type AuthorCarProps = {
    isDarkmode?: boolean | undefined,

    authorImage?: any,
    authorName?: string,
    authorFollowers?: number,
}


export type TopicsCartProps = {
    isDarkmode?: boolean | undefined;

    style?: ViewStyle | ViewStyle[] | undefined;

    topicTitle?: string | undefined;
    topicDescription?: string | undefined;
    imageTopics?: ImageSourcePropType| undefined;


    onPress?: () => void | undefined;

    onLongPress?: () => void | undefined;
}

export type NotificationCartProps = {
    isDarkmode?: boolean | undefined;
    authorName?: string | undefined;
    authorImage?:  ImageSourcePropType | undefined;

    bodyText?: string | undefined;
    time?: string | undefined;
    type?: "default" | "follow" | undefined;
    onPress?: () => void;
}

export type CountryCartProps = {
    isDarkmode?: boolean| undefined;
    isSelected?: boolean | undefined;
    nationalFlag?: ImageSourcePropType | React.ReactNode | undefined;
    countryName?: string | undefined;
    onPress?: () => void;
}
