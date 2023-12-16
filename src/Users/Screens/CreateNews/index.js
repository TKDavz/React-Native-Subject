import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView , ScrollView, KeyboardAvoidingView} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { createNews } from '../../../News/NewsService'

import ModalUploadImage from '../../../components/ModalUploadImage'

import ToolBar from '../../../components_tsx/Button/ToolBar'
import FillText from '../../../components_tsx/CreateNews/Module/FillText'
import EditText from '../../../components_tsx/CreateNews/Module/EditText'
import { IconPlus } from '../../../assets/icon_svg/svg'

const ButtonFormat = ({ src }) => {
    return (
        <TouchableOpacity style={{ margin: 8 }}>
            <Image source={src} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    )
}


const CreateNews = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [thumbUrl, setThumbUrl] = useState(null)
    const [publishClicked, setPublishClicked] = useState(false)
    const [canPublish, setCanPublish] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)

    useEffect(() => {
        if (publishClicked) {
            (async function () {
                const res = await createNews(title, content, thumbUrl);
                if (res?.statusCode === 200) {
                    console.log(res.data)
                    resetForm();
                } else {
                    console.log( "pla pla",res)
                }
            })()
        }
    }, [publishClicked])

    useEffect(() => {
        setCanPublish(title.length > 5 && content.length > 10)
    }, [title, content])

    const handlePublish = useCallback(() => {
        setPublishClicked(true);
    })

    const handleImageSelected = useCallback((uri) => {
        setImage(uri)
    }, [])

    const handleUploaded = useCallback((url) => {
        setThumbUrl(url)
        console.log('thumbUrl: ', url)
    }, [])


    const resetForm = () => {
        setTitle('');
        setContent('');
        setImage(null);
        setPublishClicked(false);
    };


    return (
        <KeyboardAvoidingView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView style={styles.container}>
                <ToolBar title='Create News'
                    onPressLeftIconButton={() => { props.navigation.goBack() }}
                />
                <TouchableOpacity style={styles.btnAddImage} onPress={() => setIsShowModal(!isShowModal)} >
                    {image ? (
                        <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: image }} />
                    ) : (
                        <View style={{ alignItems: 'center' }}>
                            <IconPlus />
                            <Text style={{ marginTop: 8 }}>Add Cover Photo</Text>
                        </View>
                    )}
                </TouchableOpacity>

                <ModalUploadImage controlModal={[isShowModal, setIsShowModal]} onImageSelected={handleImageSelected} onUploaded={handleUploaded} />


                <FillText
                    style={{ minHeight: 300, backgroundColor: "#ffffff" }}
                    titleValue={title}
                    contentValue={content}
                    onChangeTitle={setTitle}
                    onChangeContent={setContent}

                />

                <EditText
                    disabledButton={!canPublish}
                    onButtonPress={handlePublish}
                    style={[{ borderRadius: 6, backgroundColor: "#ffffff"}]}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default CreateNews

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingHorizontal: 24,
        marginBottom: 24,
        backgroundColor: 'white',
        flex: 1,
    },

    btnAddImage: {
        marginVertical: 8,
        borderRadius: 6,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF1F3',
        borderWidth: 1.5,
        borderColor: '#4E4B66',
        borderStyle: 'dashed',
    },

})