import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostFrom from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostFrom 
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }}
    />
  )  
}


export default CreateScreen;