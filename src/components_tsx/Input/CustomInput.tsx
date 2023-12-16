import { StyleSheet, Text, View, Pressable, TextInput, ViewStyle } from 'react-native'
import React, { useState } from 'react'

import { IconFilter, IconSearch, IconClose, IconInvalid, IconEyeClose, IconEye } from '../../assets/icon_svg/svg';

// import { IconClose } from '../../assets/icon_svg/svg';

import { flextStyles } from '../../Styles/FlexStyles';
import { buttonStyles } from '../../Styles/ButtonStyles';
import { textStyles } from '../../Styles/TextStyle';
import { colorsDefault } from '../../Root/RootValues';

type CustomInputColorType = {
    background: string;
    text: string;
    icon: string;
}

export type TypeInputCustomInput = "text" | "number" | "password" | "email" | "tel" | "search" | "url" | undefined;

export type CustomInputProps = {
    title?: string | undefined;

    important?: boolean | undefined;
    haveFilter?: boolean | undefined;
    type?: TypeInputCustomInput;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;

    showClearButton?: boolean | undefined;

    value?: string | undefined;
    onChangeText?: (text: string) => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    onBlur?: (e: any) => void;

    style?: ViewStyle | ViewStyle[] | undefined;

    leftIcon?: (iconColor: string) => React.ReactNode | undefined;

    regex?: string | RegExp | undefined;

    iconInvalid?: React.ReactNode | undefined;
    notificationTextWhenInvalid?: string;
    onValueIsInvalidChange?: (value: boolean) => void;
    isDarkmode?: boolean | undefined;
};


const CustomInput = (props: CustomInputProps) => {
    // lấy các props và set giá trị mặc định
    const isDarkmode = props.isDarkmode ? props.isDarkmode : false;
    const type = props.type ? props.type : "text";
    const placeholder = props.placeholder !== undefined ? props.placeholder : "Input";
    const important = props.important !== undefined ? props.important : false;
    const disabled = props.disabled !== undefined ? props.disabled : false;
    const showClearButton = props.showClearButton !== undefined ? props.showClearButton : true;
    const showTitle = props.title ? true : false;



    // nếu regex tồn tại thì nếu regex là string thì chuyển sang RegExp, nếu không thì lấy luôn
    const regex = props.regex ? typeof props.regex === "string" ? new RegExp(props.regex)
        : props.regex
        : undefined;

    // tìm kiểu của input để set kiểu bàn phím
    const keyboardType = props.type === "number" ? "numeric"
        : props.type === "email" ? "email-address"
            : props.type === "tel" ? "phone-pad"
                : "default";

    // useState lưu giá trị của input
    // const [value, setValue] = useState(props.value !== undefined ? props.value : "");
    let value = props.value !== undefined ? props.value : "";

    // useState lưu giá trị của input có khớp với regex hay không 
    const [isInvalid, setIsInvalid] = useState(false);
    const [isNull, setIsNull] = useState(false);


    // useState lưu giá trị showPassword
    const [showPassword, setShowPassword] = useState(false);


    // nếu disabled === true thì set 
    const color: CustomInputColorType =
        disabled ?
            isDarkmode ?
                {
                    // disabled === true và darkmode === true
                    background: colorsDefault.grayscaleColor_Group.button,
                    text: colorsDefault.darkmodeColor_Group.body,
                    icon: colorsDefault.darkmodeColor_Group.body
                } : {
                    // disabled === true và darkmode === false
                    background: colorsDefault.grayscaleColor_Group.disableInput,
                    text: colorsDefault.grayscaleColor_Group.bodyText,
                    icon: colorsDefault.grayscaleColor_Group.bodyText
                }
            : (isNull || isInvalid) ? // nếu important === true và value === "" có thể tahy thế cho isInvalid
                isDarkmode ? {
                    // disabled === false và darkmode === true và isInvalid === true 
                    background: colorsDefault.error_Group.light,
                    text: colorsDefault.darkmodeColor_Group.background,
                    icon: colorsDefault.error_Group.darkmode

                } : {
                    // disabled === false và darkmode === false và isInvalid === true
                    background: colorsDefault.error_Group.light,
                    text: colorsDefault.grayscaleColor_Group.titleActive,
                    icon: colorsDefault.error_Group.dark

                }
                : isDarkmode ? {
                    // disabled === false và darkmode === true và isInvalid === false
                    background: colorsDefault.darkmodeColor_Group.input,
                    text: colorsDefault.white,
                    icon: colorsDefault.darkmodeColor_Group.body
                } : {
                    // disabled === false và darkmode === false và isInvalid === false
                    background: "transparent",
                    text: colorsDefault.black,
                    icon: colorsDefault.grayscaleColor_Group.bodyText
                };


    // tạo hàm kiểm tra input có khớp với regex hay không
    const validateInput = (text: string) => {


        if (regex !== undefined) {

            const result = regex.test(text);
            setIsInvalid(!result);

            console.log("regex", regex);
            console.log("text", text);
            console.log("result", result);

            if (props.onValueIsInvalidChange) {
                props.onValueIsInvalidChange(!result);
            }
        } else {
            setIsInvalid(important && value === "");
            if (props.onValueIsInvalidChange) {
                props.onValueIsInvalidChange(important && value === "");
            }
        }


        (important && value === "") ? setIsNull(true) : setIsNull(false);
    };

    const setValueOnChangeText = (text: string) => {
        // setValue(text);
    };



    return (
        <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, { gap: 4 }, customInputStyles.box, props.style]}>

            {

                showTitle &&
                <Text style={[textStyles.textSmall, { color: color.text }]}>
                    {props.title}

                    <Text style={isDarkmode ? { color: colorsDefault.error_Group.darkmode } : { color: colorsDefault.error_Group.dark }}>
                        {important && "*"}
                    </Text>
                </Text>

            }


            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, customInputStyles.inputBox,
            { backgroundColor: color.background, borderColor: color.icon }, disabled && { borderColor: color.icon + "7F" }]}>

                {
                    props.leftIcon ? props.leftIcon(color.icon)
                        : type === "search" &&
                        <Pressable
                            style={buttonStyles.iconButton}>
                            <IconSearch fill={color.icon} />
                        </Pressable>

                }


                <TextInput
                    onPressIn={props.onPressIn}
                    onPressOut={props.onPressOut}
                    value={value}
                    style={[customInputStyles.textInput, { color: color.text }]}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    placeholderTextColor={color.text + "3F"}
                    editable={!disabled}

                    // lấy text từ onBlur để kiểm tra
                    onBlur={e => {
                        validateInput(value);
                        props.onBlur && props.onBlur(e);
                    }}

                    onChangeText={text => {
                        // validateInput(text);
                        setValueOnChangeText(text);
                        props.onChangeText && props.onChangeText(text);
                    }}

                    secureTextEntry={type === 'password' && !showPassword}
                />

                {
                    (value && showClearButton) &&
                    <Pressable
                        onPress={() => {
                            value = ""
                            props.onChangeText && props.onChangeText("");
                        }}
                        style={buttonStyles.iconButton}>
                        <IconClose fill={color.icon} />
                    </Pressable>
                }


                {
                    type === "password" &&
                    <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        style={buttonStyles.iconButton}>
                        {showPassword ? <IconEye fill={color.icon} /> : <IconEyeClose fill={color.icon} />}
                    </Pressable>
                }

                {
                    props.haveFilter &&
                    <Pressable style={buttonStyles.iconButton}>
                        <IconFilter fill={color.icon} />
                    </Pressable>
                }


            </View>

            {

                (isNull || isInvalid) && (
                    <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart, { paddingHorizontal: 2 }]}>
                        {
                            props.iconInvalid ? props.iconInvalid :
                                <IconInvalid fill={color.icon} />
                        }

                        <Text style={[textStyles.invalidText, { color: color.icon }]}>
                            {isNull ? "Required field (Because : Important)" :
                                props.notificationTextWhenInvalid ? props.notificationTextWhenInvalid
                                    : "Invalid" + (props.title ? " " + props.title : "")}

                        </Text>
                    </View>
                )

            }
        </View>

    )
}
export default CustomInput

const customInputStyles = StyleSheet.create({
    box: {
        width: "100%",
    },

    inputBox: {
        padding: 10,

        width: "100%",
        height: 48,

        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: colorsDefault.grayscaleColor_Group.bodyText,
        borderStyle: "solid",
        borderRadius: 6,

        alignSelf: "stretch",
    },

    textInput: {
        flex: 1,
        height: "100%",
        padding: 0,
    },

})