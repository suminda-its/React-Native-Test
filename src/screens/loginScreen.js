import React , { Component } from "react";
import { View, StyleSheet , Image, TextInput , Button, Text , TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import { WINDOW_HEIGHT, textbox_background, BASE_URL, LoginUrl, DEVICE_TOKEN } from "../shared";

/**
 * @author
 */

export default class logInScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading : false,
        }

        this.onLoginPress = this.onLoginPress.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
    }

    render(){
        
        if(this.state.isLoading == true){
            return(
            <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size="large" />
            </View>
            )
        }else{
        return(
                <View style={styles.page}>

                    <View style={styles.logoContainer}>
                        <Image resizeMode="contain" style={styles.logo} source={require('../../assets/imgs/santos-logo.png')} />
                    </View>
                    
                    <View style={styles.textContainer}>
                        <TextInput keyboardType="email-address"  value={this.state.email} style={[ styles.textBox , {marginBottom : 20} ]} placeholder="E-Mail Address"  placeholderTextColor='#FFFFFF' underlineColorAndroid="transparent" spellCheck={false} onChangeText={(mail) => this.setState({ email: mail.trim() })}/>
                        <TextInput value={this.state.password} style={styles.textBox} secureTextEntry={true} placeholder="Password"  placeholderTextColor='#FFFFFF' underlineColorAndroid="transparent" spellCheck={false} onChangeText={(pass) => this.setState({ password: pass })}/>
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

                </View>
            )
            
                
        }
    }

    onLoginPress(){
        if(!this.emailValidation(this.state.email)){
            Alert.alert("", "Please enter valid Email",[
                {text : "OK" },
            ], {cancelable: false });
        }else{

            this.setState({ isLoading: true });
            let formData = new FormData();
            formData.append('email', this.state.email);
            formData.append('token', this.state.password);
            formData.append('device', DEVICE_TOKEN);
            // formData.append('device', deviceToken);

            console.log("Form Data :", formData);
            fetch(BASE_URL + LoginUrl ,{
                headers: {
                    "Content-Type": "multipart/form-data",
                    // 'Referer' : "no-referrer",
                    // "multipart" : true,
                    // 'Authorization' : 'Bearer ' + apiToken
                },
                // mode: "cors",
                // referrer: "no-referrer",
                method: 'POST',
                body: formData,
            })
            .then(response => {

                this.setState({ isLoading: false });
                if(response.status === 200){
                    console.log("response :", response);
                    response.json().then( data => {
                        console.log("data :", data);
                    })
                }else{
                    response.json().then( err => {
                        console.log("err :", err);
                        Alert.alert(
                            'Error',
                            err.Message.toString(),
                            [
                              { text: 'OK' },
                            ],
                            { cancelable: false }
                          )
                    })
                }
                
                
                
            }).catch(error => {
                console.error("Error :", error);
                
                this.setState({ isLoading: false });
            });
        }
    }

    emailValidation(email){
        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            return true;
        }else{
            return false;
        }
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
        borderWidth: 2,
        backgroundColor: textbox_background,
        
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