import React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import db from '../config';

export default class ReadStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            DataSource:[],
            lastVisibleStories:null,
        };
    }

    RetrieveStory = async()=>{
        const AllStories = await db.collection('Story').get();
        AllStories.docs.map((doc)=>{
            this.setState({
                DataSource:[...this.state.DataSource,doc.data()]
            })
        })
    }

    searchFilterFunction = async(text)=>{
        var enterText = text.split("")
        var text = text.toUpperCase()
        if(enterText[0].toUpperCase()==='L'){
            const storySearch = await db.collection('Story').where('StoryTitle','==',text).get();
            storySearch.docs.map((doc)=>{
                this.setState({
                    DataSource:[...this.state.DataSource,doc.data()],
                    lastVisibleStories:doc
                })
            })
        }
        else if(enterText[0].toUpperCase()==='S'){
            const storySearch = await db.collection('Story').where('StoryAuthor','==',text).get();
            storySearch.docs.map((doc)=>{
                this.setState({
                    DataSource:[...this.state.DataSource,doc.data()],
                    lastVisibleStories:doc
                })
            })
        }
    }
    
    render(){
        return(
            
                <View style = {styles.container}>
                    <View style = {styles.searchBar}>
                        <TextInput style = {styles.bar}
                        placeholder = 'enter story title or author name'
                        onChangeText = {(text)=>{this.setState({
                            search:text
                        })}}/>
                        <TouchableOpacity style = {styles.searchButton} onPress={()=>{this.searchFilterFunction(this.state.search)}}>
                            <Text>search</Text>
                        </TouchableOpacity>
                    </View>
                <ScrollView>
                    {this.state.DataSource.map((Story,index)=>{
                        return(
                            <View key = {index} style = {{borderBottomWidth:2}}>
                                <Text>{'StoryName:'+Story.StoryTitle}</Text>
                                <Text>{'AuthorName:'+Story.StoryAuthor}</Text>
                                <Text>{'Date:'+Story.date.toDate()}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
                </View>
        )
    }
        
    
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        marginTop: 20 
    }, 
    searchBar:{ 
        flexDirection:'row', 
        height:40, 
        width:'auto', 
        borderWidth:0.5, 
        alignItems:'center', 
        backgroundColor:'grey', 
    }, 
    bar:{ 
        borderWidth:2, 
        height:30, 
        width:300, 
        paddingLeft:10, 
    }, 
    searchButton:{ 
        borderWidth:1, 
        height:30, 
        width:50, 
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'green' 
    } 
})