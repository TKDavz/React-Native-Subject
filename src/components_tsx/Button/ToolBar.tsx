import { StyleSheet, Text, View, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'

import { colorsDefault, textColor } from '../../Root/RootValues'
import { ColorTextType } from '../../Root/RootTypes'

import { IconBack, IconCheck, IconClose, IconMoreVertical, IconSetting, IconShare } from '../../assets/icon_svg/svg';
import { textStyles } from '../../Styles/TextStyle';
import { flextStyles } from '../../Styles/FlexStyles';

type ToolBarProps = {
    isDarkmode?: boolean | undefined;

    type?: "normal" | "back" | "edit" | "setting" | "more" | undefined;
    style?: ViewStyle | ViewStyle[] | undefined;
    title?: string | undefined;

    showLeftIconButton?: boolean | undefined;
    showRightIconButton?: boolean | undefined;

    showShareIconButton?: boolean | undefined;

    onPressLeftIconButton?: () => void;
    onPressRightIconButton?: () => void;
    onPressShareIconButton?: () => void;

}

const ToolBar = (props: ToolBarProps) => {

    const type = props.type || "normal";
    const colorText: ColorTextType = props.isDarkmode ? textColor.darkmode : textColor.lightmode;

    //set show icon button ưu tiên giá trị props truyền vào
    console.log(props.showLeftIconButton, props.showRightIconButton);

    const showIconButton: { left?: boolean, right?: boolean } = type === "back" ? {
        left: true,
        right: false
    }
        : type === "edit" ? {
            left: true,
            right: true
        }
            : type === "setting" ? {
                left: false,
                right: true
            }
                : type === "more" ? {
                    left: true,
                    right: true
                }
                    : {
                        left: true,
                        right: false
                    };


    showIconButton.left = props.showLeftIconButton === undefined ? showIconButton.left : props.showLeftIconButton;
    showIconButton.right = props.showRightIconButton === undefined ? showIconButton.right : props.showRightIconButton;


    const icons: { left?: React.JSX.Element, right?: React.JSX.Element } = type === "back" ? {
        left: <IconBack fill={colorText.body} />,
        right: undefined
    }
        : type === "edit" ? {
            left: <IconClose fill={colorText.body} />,
            right: <IconCheck fill={colorText.body} />
        }
            : type === "setting" ? {
                left: <IconBack fill={colorText.body} />,
                right: <IconSetting fill={colorText.body} />
            }
                : type === "more" ? {
                    left: <IconBack fill={colorText.body} />,
                    right: <IconMoreVertical fill={colorText.body} />
                }
                    : {
                        left: <IconBack fill={colorText.body} />,
                        right: undefined
                    }

    return (
        <View style={[props.style, flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween]}>

            {

                showIconButton.left &&
                <View style={[flextStyles.rowFlexBox, styles.leftButtonGroup]}>
                    {

                        showIconButton.left &&
                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={props.onPressLeftIconButton}>
                            {icons.left}
                        </TouchableOpacity>

                    }
                </View>

            }

            <View style={[flextStyles.rowFlexBox, { flex: 0 , width: "100%"}]}>
                <Text style={[textStyles.textMedium, { color: colorText.tilte }, styles.titleText]}>{props.title}</Text>
            </View>

            {

                (showIconButton.right || props.showShareIconButton) &&

                <View style={[flextStyles.rowFlexBox, styles.rightButtonGroup]}>
                    {
                        props.showShareIconButton &&

                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={props.onPressShareIconButton}>
                            <IconShare fill={colorText.body} />
                        </TouchableOpacity>

                    }

                    {
                        showIconButton.right &&

                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={props.onPressRightIconButton}>
                            {icons.right}
                        </TouchableOpacity>

                    }

                </View>

            }

        </View>
    )
}

export default ToolBar

const styles = StyleSheet.create({
    leftButtonGroup: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 10
    },

    rightButtonGroup: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 10
    },

    titleText: {
        flex: 0.5,
        textAlign: "center"
    },

    button: {
        width: 22,
        height: 22,

        justifyContent: "center",
        alignItems: "center"
    }

})