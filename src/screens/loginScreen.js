import React , { Component } from "react";
import { View, ScrollView, StyleSheet , Image, TextInput , Button, Text , TouchableOpacity} from "react-native";
import { WINDOW_HEIGHT, textbox_background } from "../shared";

/**
 * @author
 */

export default class logInScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <ScrollView style={styles.page}>

                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../assets/imgs/santos-logo.png')} />
                </View>
                
                <View style={styles.textContainer}>
                    <TextInput style={[ styles.textBox , {marginBottom : 20} ]} placeholder="E-Mail Address"  placeholderTextColor='#FFFFFF' underlineColorAndroid="transparent" spellCheck={false}/>
                    <TextInput style={styles.textBox} placeholder="E-Mail Address"  placeholderTextColor='#FFFFFF'/>
                </View>
                
                <View style={styles.textContainer2}>
                    <TouchableOpacity onPress={this.onLoginPress}>
                        {/* <TouchableOpacity onPress={this.props.onLoginPress}> */}
                        <View style={[ styles.loginBtn, { backgroundColor: '#FFFFFF' }]}>
                            <Text style={styles.loginButtonFont}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>


                    <Text style={ [styles.loginButtonFont, {marginTop: 30 , color: "white"} ]}>Forgot Password</Text>

                </View>

            </ScrollView>
        )
    }

    onLoginPress(){

    }
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: "#3185c7",
    },
  
    logoContainer: {
      flex: 0,
      justifyContent: "flex-start",
      alignItems: "center",
    //   backgroundColor: "red",
      
      
    },

    logo: {
      width: WINDOW_HEIGHT * 0.35,
      height: WINDOW_HEIGHT * 0.35
    },

    textContainer:{
        flex: 0,
        alignItems: "center",
        // backgroundColor: "white",
        marginVertical: 50,
    },
    
    textBox:{
        height: 40, 
        width: 150, 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor: textbox_background,
        borderRadius : 5,
        padding : 10
        
    },
    
    textContainer2:{
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "white"
    },
    loginBtn:{
        width: 150,
        height: 40,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // padding: VERTICAL_MARGIN * 1.3,
        borderRadius: 3,
        // margin: HORIZONTAL_MARGIN,
    },
    loginButtonFont:{
        color: "blue"
    }
  });