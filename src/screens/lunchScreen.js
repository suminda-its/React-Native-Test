import React , { Component } from "react";
import { View , Image, StyleSheet } from "react-native";
import { WINDOW_HEIGHT } from "../shared";

export default class lunchScreen extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

        setTimeout(() => {            
            this.props.navigation.navigate('LogInNavigate');
        }, 1000);
    }

    render(){
        return(
            <View style={styles.page}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../assets/imgs/santos-logo.png')} />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#3185c7",
    justifyContent: "center",
    alignItems: "center"
  },

  logoContainer: {
    flex: 1,
    
  },

  logo: {
    width: WINDOW_HEIGHT * 0.35,
    height: WINDOW_HEIGHT * 0.35
  }
});