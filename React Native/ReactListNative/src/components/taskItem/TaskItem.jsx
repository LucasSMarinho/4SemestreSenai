import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { TaskItemStyle } from './TaskItem';
import TrashImage from '../../../assets/trashIcon.png'
import PenImage from '../../../assets/penIcon.png'

export default function TaskItem(props) {
  return (
    <View style={TaskItemStyle.cardBox}>
      <Text style={TaskItemStyle.cardBoxText}>{props.nome}</Text>
      <View style={TaskItemStyle.cardImages}>
      <TouchableOpacity onPress={() => props.funcDelete(props)} style={[TaskItemStyle.taskPressableTrash, TaskItemStyle.taskPressable]}>
      <Image style={TaskItemStyle.taskItemImage} source={TrashImage}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.funcEdit(props)} style={[TaskItemStyle.taskPressablePen, TaskItemStyle.taskPressable]}>
      <Image style={TaskItemStyle.taskItemImage} source={PenImage}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}
