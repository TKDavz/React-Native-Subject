import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'

import { colorsDefault, textColor } from '../../Root/RootValues'
import { ColorTextType } from '../../Root/RootTypes'

import ToolBar from '../Button/ToolBar'
import { IconLock, IconLogout, IconMoon, IconNotification, IconQuestion } from'../../assets/icon_svg/svg'
import SettingCart, { TypeSettingCart } from './Module/SettingCart'


const list = [
    {
        id: 1,
        title: "Account",
        icon: <IconNotification />,
        type: "more"
    },

    {
        id: 2,
        title: "Security",
        icon: <IconLock />,
        type: "more"
    },
    {
        id: 3,
        title: "Help",
        icon: <IconQuestion />,
        type: "more"
    },
    {
        id: 4,
        title: "Dark Mode",
        icon: <IconMoon />,
        type: "switch"
    },

    {
        id: 5,
        title: "Logout",
        icon: <IconLogout />,
        type: "button"
    }

]

type SettingProfileProps = {
    isDarkmode?: boolean | undefined;
}

const SettingProfile = (props: SettingProfileProps) => {
    const colorText: ColorTextType = props.isDarkmode ? textColor.darkmode : textColor.lightmode;

    // list.map((item) => {
    //     item.icon = React.cloneElement(item.icon, { fill: "red" })
    // })

    return (
        <View style={[{ display: "flex", padding: 20 }]}>
            <ToolBar
                title='Settings'
                type="back"
            // showLeftIconButton={false}
            />


            <View>
                <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <SettingCart
                            isDarkmode={props.isDarkmode}
                            title={item.title}
                            type={item.type as TypeSettingCart}

                            leftIcon={(color) => React.cloneElement(item.icon, { fill: color })}

                            style={{ marginVertical: 15 }}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

        </View>
    )
}

export default SettingProfile

const styles = StyleSheet.create({})