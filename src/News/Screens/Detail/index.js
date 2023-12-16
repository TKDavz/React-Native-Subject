import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import moment from 'moment'
import { getNewsById, shareNews } from '../../NewsService';
import Snackbar from 'react-native-snackbar';
import Lottie from 'lottie-react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import ToolBar from '../../../components_tsx/Button/ToolBar';
import { IconBookmark, IconBookmarkFilled, IconComment, IconHeart, IconHeartFilled, IconImage } from '../../../assets/icon_svg/svg';
import CustomButton from '../../../components_tsx/Button/CustomButton';
import { flextStyles } from '../../../Styles/FlexStyles';
import { colorsDefault } from '../../../Root/RootValues';

const parseTime = (timeString) => {
    const parsedTime = moment(timeString);
    return parsedTime.fromNow();
}


const Detail = (props) => {
    const { navigation, route } = props;
    const { id, createdBy } = route.params;

    const [loading, setLoading] = useState(false);
    const [thumbUrl, setThumbUrl] = useState('https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg');
    const [avatarAuthor, setAvatarAuthor] = useState('https://img.icons8.com/ios-filled/50/user-male-circle.png');
    const [nameAuthor, setNameAuthor] = useState('');
    const [publishTime, setPublishTime] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);


    useEffect(() => {
        (async function () {
            setLoading(true);
            const res = await getNewsById(id);
            if (res?.statusCode === 200) {
                const { createdAt, title, content, image } = res.data[0];
                !!image && setThumbUrl(image);
                !!createdBy?.avatar && setAvatarAuthor(createdBy.avatar);
                setNameAuthor(createdBy?.name ?? 'Anonymous');
                setPublishTime(createdAt);
                setTitle(title);
                setContent(content);
            }
            setLoading(false);
        })()
    }, [])

    const handleShare = useCallback(async () => {
        await shareNews({
            message: title,
            title: title
        }, () => {
            Snackbar.show({
                text: 'Cập nhật thông tin thành công!',
                duration: Snackbar.LENGTH_LONG
            });
        })
    }, [])

    console.log('thumbUrl', thumbUrl);
    console.log('avatarAuthor', avatarAuthor);


    return (
        <View style={{ flex: 1 }}>

            {
                loading ?

                    <Spinner
                        visible={loading}
                        textContent={'Loading...'}
                        textStyle={{ color: '#FFF' }
                        }
                        indicatorStyle={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }
                        }
                    />
                    : (
                        <View style={{ flex: 1 }}>
                            <ScrollView style={[styles.body, { marginBottom: 78 }]}>

                                <ToolBar
                                    type="more"
                                    showShareIconButton={true}
                                    onPressLeftIconButton={() => navigation.goBack()}
                                    onPressShareIconButton={handleShare}
                                />

                                <View style={[flextStyles.justifyContentSpaceBetween, { flex: 1, width: "100%", display: "flex", position: "relative" }]}>

                                    <View style={{ flex: 1 }}>

                                        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { marginVertical: 10 }]}>
                                            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart]}>
                                                <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentCenter]}>
                                                    {
                                                        (!!avatarAuthor) ?
                                                            <Image style={[styles.imageLogo]} source={!!avatarAuthor ? { uri: avatarAuthor } : 0}></Image>
                                                            :
                                                            <View style={[styles.imageLogo, { backgroundColor: colorsDefault.grayscaleColor_Group.bodyText  }]}>
                                                                <IconImage width={24} height={24} fill={colorsDefault.grayscaleColor_Group.disableInput} />
                                                            </View>

                                                    }
                                                </View>

                                                <View style={[styles.columnFlexBox, styles.justifyContentCenter, { gap: 0 }]}>
                                                    <Text style={styles.titleC}>{nameAuthor}</Text>
                                                    <Text style={styles.timeText}>{parseTime(publishTime)}</Text>
                                                </View>
                                            </View>

                                            <CustomButton
                                                title="Following"
                                                type="primary"
                                                onPress={() => console.log("Follow")}
                                            />


                                        </View>


                                        <View>
                                            {
                                                (!!thumbUrl) ?
                                                    <Image source={!!thumbUrl ? { uri: thumbUrl } : 0} style={[styles.imageThumb, { backgroundColor: colorsDefault.grayscaleColor_Group.disableInput }]} ></Image>
                                                    :
                                                    <View style={[styles.imageThumb, { backgroundColor: colorsDefault.grayscaleColor_Group.disableInput }]}>
                                                        <IconImage width={24} height={24} />
                                                    </View>

                                            }
                                            {/* <Image source={!!thumbUrl ? { uri: thumbUrl } : 0}
                                                style={{ width: "100%", height: 248, backgroundColor: 'cyan', borderRadius: 6 }}></Image> */}
                                        </View>

                                        <Text>Europe</Text>
                                        <Text style={styles.title}>{title}
                                        </Text>

                                        <Text style={styles.text}>{content}</Text>
                                    </View>



                                </View>
                            </ScrollView>

                            <View
                                style={[{ height: 78, position: "absolute", zIndex: 100, backgroundColor: "white", bottom: 0, left: 0, right: 0, paddingHorizontal: 10 }]}
                            >

                                <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { height: 72 }]}>
                                    <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentCenter, { paddingHorizontal: 10 }]}>
                                        <TouchableOpacity style={[flextStyles.rowFlexBox, { height: 70, width: 70 }]}
                                            onPress={() => setIsLiked(!isLiked)}>
                                            {
                                                isLiked ? <IconHeartFilled fill={colorsDefault.error_Group.default} /> : <IconHeart />
                                            }

                                            <Text>24.5K</Text>
                                        </TouchableOpacity>

                                        <View style={[flextStyles.rowFlexBox, { height: 70, width: 70 }]}>
                                            <IconComment />
                                            <Text >1K</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity style={[flextStyles.rowFlexBox, { height: 70, width: 70 }]}
                                        onPress={() => setIsBookmarked(!isBookmarked)}>
                                        {

                                            isBookmarked ? <IconBookmark /> : <IconBookmarkFilled fill={colorsDefault.primaryColor} />

                                        }
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </View>
                    )}


        </View>


    )
}

export default Detail

const styles = StyleSheet.create({


    body: {
        padding: 24,
        backgroundColor: "White",
        flex: 1,
        paddingBottom: 0

    },


    title: {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.12,
        color: "#000000",
    },

    titleC: {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: "#000000",
    },


    timeText: {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: "#4E4B66",
    },

    imageLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    imageThumb:
    {
        width: "100%",
        height: 220,
        backgroundColor: 'cyan',
        borderRadius: 6
    },


    text: {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: "#4E4B66",
    }
})