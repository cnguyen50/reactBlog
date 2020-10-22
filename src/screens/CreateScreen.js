import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { State } from 'react-native-gesture-handler'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

}


export default CreateScreen;