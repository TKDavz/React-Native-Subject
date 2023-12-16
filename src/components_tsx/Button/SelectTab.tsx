import { StyleSheet, Text, View, TouchableOpacity, ViewStyle, FlatList , ScrollView} from 'react-native'
import React from 'react'

import { colorsDefault, textColor } from '../../Root/RootValues'
import { ColorTextType } from '../../Root/RootTypes'

import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'


export const selectedItemStringValues = {
    news: "News",
    toppic: "Toppic",
    author: "Author"
}

export type SelectedItemType = {
    id: number,
    nameType: string,
    active: boolean
}


type SelectTabProps = {
    isDarkmode?: boolean | undefined;
    style?: ViewStyle | ViewStyle[] | undefined;

    styleItemActive?: { height?: number, top?: number, paddingHorizontal?: number } | undefined;
    selectedItemArrayValues: SelectedItemType[];

    selectedItemStart?: string;
    onChangeSelectedItem?: (selectedItem: string) => void;
}

const SelectTab = (props: SelectTabProps) => {

    const [selectedItem, setSelectedItem] = React.useState(props.selectedItemArrayValues);

    React.useEffect(() => {
        const positionStart = props.selectedItemStart ? selectedItem.findIndex(item => item.nameType === props.selectedItemStart) : 0;
        chooseById(selectedItem[positionStart].id);
    }, [props.selectedItemStart]);

    const chooseById = (chooseId: number) => {
        setSelectedItem(selectedItem.map((item, index) => {
            if (item.id === chooseId) {
                return {
                    ...item,
                    active: true
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        }));

        const position = selectedItem.findIndex(item => item.id === chooseId);
        props.onChangeSelectedItem && props.onChangeSelectedItem(props.selectedItemArrayValues[position].nameType);
    }

    const isDarkmode = props.isDarkmode === undefined ? false : props.isDarkmode;
    const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;

    return (
        <View style={[flextStyles.rowFlexBox, props.style]}>
            {/* {
            
                selectedItem.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}
                            style={[styles.touchableOpacity, item.active ? styles.btnActive : {}]}
                            onPress={() => {
                                chooseById(item.id);
                            }}>

                            <Text style={[textStyles.textMedium, item.active ? { color: colorText.tilte } : { color: colorText.body }]}>
                                {item.nameType}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            } */}

            <FlatList
                data={selectedItem}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity key={index}
                            style={[styles.touchableOpacity, item.active ? styles.btnActive : {},

                            (item.active && props.styleItemActive) && {
                                borderBottomWidth: props.styleItemActive.height,
                                paddingBottom: props.styleItemActive.top,
                                paddingHorizontal: props.styleItemActive.paddingHorizontal
                            }]}

                            onPress={() => {
                                chooseById(item.id);
                            }}>

                            <Text style={[textStyles.textMedium, item.active ? { color: colorText.tilte } : { color: colorText.body }]}>
                                {item.nameType}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={[flextStyles.rowFlexBox, {gap: 0, minWidth: "100%"}]}
            />



        </View >
    )
}

export default SelectTab

const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: "transparent",
        paddingHorizontal: 2,
        paddingBottom: 8,
        marginVertical: 5,
        marginHorizontal: 10
    },

    btnActive: {
        borderBottomWidth: 4,
        borderBottomColor: colorsDefault.primaryColor,
    },
})
