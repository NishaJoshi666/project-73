import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity , KeyboardAvoidingView , ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import * as firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle:'',
            storyAuthor:'',
            story:''
        }
    }

    StorySubmit = async()=>{
        db.collection('Story').add({
            StoryTitle:this.state.storyTitle,
            StoryAuthor : this.state.storyAuthor,
            Story:this.state.story,
            date : firebase.firestore.Timestamp.now().toDate(),
        })
        ToastAndroid.show("Your Story has been Submitted",ToastAndroid.LONG)
    }

    render(){
        return(
            <KeyboardAvoidingView style = {styles.Container} behavior = "padding" enabled>
            <View>
                <Header backgroundColor={'green'}
                  centerComponent={{
                    text: 'StoryHub',
                    style: { color: 'white', fontSize: 30 , padding:20 },
                  }}
                />

                <View style = {styles.inputview}>
                    <TextInput style = {styles.inputbox} placeholder = 'write a Title of the story'
                    value={this.state.storyTitle}
                    onChangeText = {text=> this.setState({storyTitle:text})}/>
                </View>

                <View style = {styles.inputview}>
                    <TextInput style = {styles.inputbox1} placeholder = 'write the author name of the story'
                    value={this.state.storyAuthor}
                    onChangeText = {text=> this.setState({storyAuthor:text})}/>
                </View>

                <View style = {styles.inputview}>
                    <TextInput style = {styles.inputbox2} multiline={true} placeholder = 'write the story'
                    value={this.state.story}
                    onChangeText = {text=> this.setState({story:text})}/>
                </View>

                <View>
                    <TouchableOpacity style = {styles.button} onPress={async()=>{
                    this.StorySubmit()
                    this.setState({
                        storyTitle:'',
                        storyAuthor:'',
                        story:''
                    })}}>
                        <Text style = {styles.buttontext}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        justifyContent:'center'
    },
    inputview:{
        flexDirection:'row',
        margin:10
    },
    inputbox:{
        borderRadius:5,
        width:260,
        height:50,
        borderWidth:5,
        textAlign:'center',
        marginTop:7
    },
    inputbox1:{
        borderRadius:5,
        width:330,
        height:50,
        borderWidth:5,
        textAlign:'center',
        marginTop:7
    },
    inputbox2:{
        borderRadius:5,
        width:380,
        height:350,
        borderWidth:5,
        textAlign:'center',
        marginTop:7
    },
    button:{
        width:'80%',
        height:60,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:5,
        marginLeft:40,
        marginTop:5,
        borderRadius:66
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        textAlign:'center',
        color:'black',

    }
})