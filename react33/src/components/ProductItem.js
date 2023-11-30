import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'

 class ProductItem extends PureComponent {
  render() {
    const {image,name,price,id} = this.props.product
    const {isDisplayCart} = this.props
    return (
      <div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={image} alt="" />
            <a href="#">
              <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{name}</p>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price.toLocaleString('it-IT',{style: 'currency',currency:'USD'})}</p>
            {
              !isDisplayCart ? <button type='button' onClick={() =>{this.props.addToCart(this.props.product)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </button> : ' '
            }
            <button type='button' data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => {this.props.readItem(id)}} className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read More
            </button>
          </div>
      </div>
    )
  }
}

const mapDispatchToPros = (dispatch) =>{
  let action = {}
  return {
    addToCart: (product) =>{
      action = {
        type: "ADD_TO_CART",
        payload: product
      }
      dispatch(action)
    },

    readItem: (id) => {
        action ={
          type: "READ_MORE",
          payload: id
        }
        dispatch(action)
    }
  }
}

const mapStateToProps= (state) =>{
  return {
    inCart: state.productReducer.inCart
  }
}

export default connect(mapStateToProps,mapDispatchToPros)(ProductItem)

