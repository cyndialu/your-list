import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";

const Item = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <Icon
                name='pencil-square-o'
                type='font-awesome'
                size={15}
                iconStyle={{ width: 15 }}
                color={'#55BCF6'}
            />
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <Icon
                name='minus'
                type='font-awesome'
                size={15}
                iconStyle={{ width: 15 }}
                color={'#9d3553'}
                onPress={() => props.deleteItem(props.id)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#f5f5f5',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText: {
        maxWidth: '75%',
        marginLeft: 15
    },
});

export default Item;