import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { 
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated 
} from 'react-native'

export default class FabButton extends Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true
    }).start();

    this.open = !this.open;

  }

  render() {

    const likeStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -130]
          })
        }
      ]
    }

    const cameraStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70]
          })
        }
      ]
    }

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
          })
        }
      ]
    }

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={() => alert('CURTIR')}>
          <Animated.View style={[styles.button, styles.submenu, likeStyle]}>
            {/* <Text style={{color: '#fff'}}> Heart </Text> */}
            <Icon name="favorite" size={24} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert('CAMERA')}>
          <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
            {/* <Text style={{color: '#fff'}}> Camera </Text> */}
            <Icon name="add-a-photo" size={24} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            {/* <Text style={{color: '#fff'}}> BOTAO </Text> */}
            <Icon name="add" size={24} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute'
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    }
  },
  menu: {
    backgroundColor: '#00213b'
  },
  submenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#00213b'
  }
})
