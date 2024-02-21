import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Title from './components/layout/Title'
import AddContact from './components/forms/AddContact'
import Contacts from './components/lists/Contacts'
import AddCar from './components/forms/addCar'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Title />
        <AddContact />
        <AddCar />
        <Contacts />
      </div>
    </ApolloProvider>
  )
}

export default App
