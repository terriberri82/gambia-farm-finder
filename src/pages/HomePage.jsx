import SearchBar from '../shared/SearchBar' 
import { useState } from 'react'
import styles from './HomePage.module.css';
import '../App.css'
import FarmList from '../features/farms/FarmList' 

function HomePage({allFarms}){
const [searchValue, setSearchValue] = useState('')
const [hasSearched, setHasSearched] = useState(false)

//handler function
 const onSubmit =() => {
    console.log('submit clicked', searchValue)
    setHasSearched(true);
 }
 const filteredFarms = allFarms.filter(farm => {
    if (farm.name.toLowerCase().includes(searchValue.toLowerCase())||
    farm.area.toLowerCase().includes(searchValue.toLowerCase())||
    farm.produce.some(item => item.toLowerCase().includes(searchValue.toLowerCase()))){
        return true;
    }
    return false
 }) 
    return(
        <>
        <div className={styles.welcome}>
            <p>Welcome to the Gambian Farm Finder, your friendly guide to discovering amazing farms across the Smiling Coast of Africa! The Gambia is a land full of agricultural heart, where farmers lovingly grow everything from golden groundnuts and lush rice fields to juicy mangoes, cashews, and fresh vegetables that nourish communities from Banjul to the furthest corners of the country. But finding your way to these incredible local farms has never been all that easy. Roads go unnamed, directions get passed around by word of mouth, and so many wonderful farms stay hidden from the people who would love them most. Whether you are a local searching for the freshest produce, a visitor excited to connect with the land, or a buyer looking for reliable suppliers, we are so happy you are here. Let the Gambian Farm Finder help lead the way!</p>
        </div>
         
         <SearchBar
            elementId="farm-search"
            labelText="Search Farms:"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSubmit={onSubmit}/>
        {hasSearched &&  <FarmList allFarms={filteredFarms}/> }
        </>
    )
}

export default HomePage