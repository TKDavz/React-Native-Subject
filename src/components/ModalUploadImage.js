import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import { uploadImage } from '../News/NewsService'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Lottie from 'lottie-react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import CustomButton from '../components_tsx/Button/CustomButton';
import { IconAddBox, IconCamera, IconLink } from '../assets/icon_svg/svg';



const ModalUploadImage = ({ controlModal, onImageSelected = (e) => { }, onUploaded = (e) => { } }) => {
    const [isUploading, setIsUploading] = useState(false)
    const [isShowModal, setIsShowModal] = controlModal
    const handleAddImage = useCallback(async () => {
        await launchImageLibrary({
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }, handleImage)
    })

    const handleTakePhoto = useCallback(async () => {
        await launchCamera({
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }, handleImage)
    }, [])

    const handleImage = useCallback(async (data) => {
        if (data.assets) {
            onImageSelected(data.assets[0].uri)
            const { uri, type, fileName: name } = data.assets[0];
            const formData = new FormData();
            formData.append('image', { uri, name, type })
            setIsUploading(true)
            const { data: resUpload } = await uploadImage(formData)
            setIsUploading(false)
            onUploaded(resUpload.path)
        }
        setIsShowModal(false)
    }, [])

    const closeModal = useCallback(() => {
        if (isUploading) return;
        setIsShowModal(false)
    }, [])

    return (
        <Modal animationType="fade" transparent={true} visible={isShowModal} onRequestClose={closeModal}>
            <Pressable onPress={closeModal} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={styles.container}>
                    {isUploading ?
                        <Spinner
                            visible={isUploading}
                            textContent={'Loading...'}
                            textStyle={{ color: '#FFF' }}
                            size={"large"}
                            indicatorStyle={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }}
                        />
                        :
                        (<View>

                            <CustomButton
                                type="primary"
                                typeIcon='left'
                                firstIcon={(color) => {return <IconCamera fill={color} /> }}
                                title="Pick from gallery"
                                onPress={handleAddImage}
                            />


                            <CustomButton
                                style={{ marginTop: 16 }}
                                title="Pick from camera"
                                type="primary"
                                typeIcon='both'
                                firstIcon={(color) => { return <IconAddBox fill={color} /> }}
                                secondIcon={(color) => {return  <IconLink fill={color} /> }}
                                onPress={handleTakePhoto}
                            />

                        </View>)}
                </View>
            </Pressable>
        </Modal >
    )
}

export default ModalUploadImage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 6,
        padding: 16
    },

})