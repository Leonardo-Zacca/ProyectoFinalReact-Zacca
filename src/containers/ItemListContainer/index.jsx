import React from 'react'
import Item from '../../components/NavBar/Card'
import './styles.scss'


const ItemListContainer = () => {
  return (
    <div className='item-list-container'>
        <Item title={"gatito 1"} description={"Un gatito número 1"}/>
        <Item title={"gatito 2"} description={"Un gatito número 2"}/>
        <Item title={"gatito 3"} description={"Un gatito número 3"}/>
        <Item title={"gatito 4"} description={"Un gatito número 4"}/>
        <Item title={"gatito 5"} description={"Un gatito número 5"}/>
    </div>
  )
}

export default ItemListContainer