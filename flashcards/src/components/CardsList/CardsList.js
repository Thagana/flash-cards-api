import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './CardsList.style';

export default function CardsList({props}) {

    const data = [
        {
            id: '1',
            title: 'How To make Pancakes',
            cartigory: "baking",
            image: require('../../assets/icons/image_1.jpg')
        },
        {
            id: '2',
            title: 'How to dance amapiano music',
            cartigory: "dancing",
            image: require('../../assets/icons/image_2.jpg')
        },
        {
            id: '3',
            title: 'How to Belly dance',
            cartigory: "dancing",
            image: require('../../assets/icons/image_3.jpg')
        },
    ];
    function trim(text){
        if(text.length > 20){
            return text.substr(0, 20 - 1) + ' ...';
        }
        return text;
    }

    function Card({ item }) {
        const { image, title, cartigory } = item;
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => {  props.navigation.navigate('Cards')  }}>
                <View style={styles.imageConatiner}>
                    <Image source={image} style={styles.image}/>
                </View>
                <View>
                    <View>
                        <Text style={styles.title} numberOfLines={1}>
                            {trim(title)}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cartigory}>
                            {`@${cartigory}`}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{
            justifyContent: 'space-evenly',
            alignItems: "center"
        }}>
            <FlatList
                data={data}
                renderItem={Card}
                keyExtractor={(data, index) => data.id}
            />
        </View>
    )
}
