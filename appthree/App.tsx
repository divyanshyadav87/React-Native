import { View, Text, ScrollView } from 'react-native'
import React, { Children } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCards'
import ContactList from './components/ContactList'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App