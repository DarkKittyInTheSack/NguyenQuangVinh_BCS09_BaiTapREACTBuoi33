import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import ProductItem from './ProductItem'
import './input.css'
import { connect } from 'react-redux'

export default class ShoesStore extends Component {
  state = {
    isDisplayCart: false
  }
  render() {
    let handleDisplayCart = (isDisplayCart = false) =>{
        this.setState({
          isDisplayCart: isDisplayCart
        })
    }
    return (
      <div>
        <div className="container mx-auto">
          <h2 className='text-blue-800 text-3xl'>Shoes Store</h2>
          <div className='flex align-middle my-5'>
            <div className="left w-1/3">
                <button onClick={() => {handleDisplayCart()}} className='btn py-4 bg-white block text-center w-1/2'>Home</button>
                <button onClick={() => {handleDisplayCart(true)}} className='btn py-4 bg-white block text-center w-1/2'>Your cart</button>
            </div>
            <div className="right w-full">
              <ProductList isDisplayCart={this.state.isDisplayCart}/>           
            </div>
          </div>
          <Modal/>
        </div>
      </div>
    )
  }
}
