import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontFamily: 'SansitaSwashed-Regular',
        fontSize: 20
    },
    from: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: 400,
        height: 40,
        borderColor: '#000',
        borderWidth: 2,
        marginHorizontal: 5,
        marginTop: 5,
        marginBottom: 5
    },
    button: {
        backgroundColor: '#ee6e73',
        width: width - 20,
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#fff',
        fontFamily: 'SansitaSwashed-Light'
    }
});

export default styles;