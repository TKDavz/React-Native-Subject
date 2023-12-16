import { StyleSheet, Text, View, ViewStyle, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState, useCallback } from 'react'

import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { CameraOptions, ImagePickerResponse } from 'react-native-image-picker'

import { colorsDefault, textColor } from '../../../Root/RootValues'
import { ColorTextType } from '../../../Root/RootTypes'

import { IconPlus } from '../../../assets/icon_svg/svg'

import { textStyles } from '../../../Styles/TextStyle'
import { flextStyles } from '../../../Styles/FlexStyles'
import { imageStyles } from '../../../Styles/ImageStyles'

import CustomButton from '../../Button/CustomButton'
import ToolBar from '../../Button/ToolBar'

type SelectImageProps = {
    isDarkmode?: boolean | undefined;
    style?: ViewStyle | ViewStyle[] | undefined;
}

const SelectImage = (props: SelectImageProps) => {

    const colorText: ColorTextType = props.isDarkmode ? textColor.darkmode : textColor.lightmode;

    const [image, setImage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onTakePhoto = useCallback(async (data: ImagePickerResponse) => {
        if (data.didCancel) {
            setModalVisible(false);
        } else if (data.errorCode) {
            setModalVisible(false);
            console.log(data.errorCode);
            console.log(data.errorMessage);
        } else if (data.errorMessage) {
            setModalVisible(false);
            console.log(data.errorMessage);
        } else if (data.assets && data.assets.length > 0) {
            setImage(data?.assets[0]?.uri || '');

            setModalVisible(false);
        }
    }, []);

    const openCamera = useCallback(async () => {
        const options: CameraOptions = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }

        launchCamera(options, (response) => {
            onTakePhoto(response);
        });

    }, []);

    const openGallery = useCallback(async () => {
        const options: CameraOptions = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }

        launchImageLibrary(options, (response) => {
            onTakePhoto(response);

        });

    }, []);


    return (
        <TouchableOpacity style={[flextStyles.rowFlexBox, props.style]}

            onPress={() => {
                setModalVisible(true);
                // launchImageLibrary({
                    
                //     mediaType: 'photo',
                //     includeBase64: false,
                //     includeExtra: true,
                // }, (response) => {
                //     onTakePhoto(response);
                // })
            }}


        >

            {
                image ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> :

                    <View style={[flextStyles.columnFlexBox, imageStyles.newsImageVertical, styles.box, props.isDarkmode && { backgroundColor: colorsDefault?.darkmodeColor_Group.input, borderColor: colorsDefault?.darkmodeColor_Group?.body }]}>
                        <IconPlus color={colorText.body} />
                        <Text style={[textStyles.textSmall, { color: colorText.body }]}>Add Cover Photo</Text>
                    </View>


            }

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}>
                <View style={[flextStyles.columnFlexBox,styles.modalContainer]}>
                    <View style={[flextStyles.columnFlexBox,styles.modalContent]}>

                        <ToolBar
                            title="Select Image"
                            onPressLeftIconButton={() => setModalVisible(false)}
                        />
                        {/* <CustomButton
                            title="Back"
                            onPress={() => setModalVisible(false)}
                        /> */}

                        <CustomButton
                            title="Open Camera"
                            onPress={() => {
                                openCamera();
                            }}
                        />

                        <CustomButton
                            title="Open Galery"
                            onPress={() => {
                                launchImageLibrary({
                                    mediaType: "photo",
                                    includeBase64: false,
                                    maxHeight: 200,
                                    maxWidth: 200,
                                }, (response) => {
                                    console.log(response)
                                })
                            }}

                        />

                    </View>

                </View>

            </Modal>



        </TouchableOpacity>
    )
}

export default SelectImage

const styles = StyleSheet.create({
    box: {
        borderColor: colorsDefault.grayscaleColor_Group.bodyText,
        borderWidth: 2,
        borderStyle: "dashed",
    },

    modalContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
    },

    modalContent: {
        padding: 20,
        width: "80%",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.8)",
    }
})