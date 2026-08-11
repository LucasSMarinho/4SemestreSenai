import { StyleSheet } from "react-native";

export const TaskItemStyle = StyleSheet.create({
    cardBox: {
        width: '100%',
        marginBottom: 15,
        backgroundColor: '#31364D',


        padding: 15,
        paddingLeft: 25,
        height: 75,
        borderRadius: 5,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    cardBoxText:
    {
        flex: 1,
        color: 'white',
        fontSize: 18
    },

    cardImages:
    {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    taskPressable: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5
    },

    taskPressableTrash: {
        borderColor: '#D46E75',
    },

    taskPressablePen: {
        borderColor: '#9BB8ED',
    },

    taskItemImage: {
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'contain'
    }
})