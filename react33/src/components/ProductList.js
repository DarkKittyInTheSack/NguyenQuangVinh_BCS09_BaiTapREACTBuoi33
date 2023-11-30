import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'

class ProductList extends Component {
  render() {
    let listProduct = []
    const {isDisplayCart} = this.props
    !isDisplayCart ? listProduct = this.props.listProduct : listProduct = this.props.inCart
    
    return (
      <div>
        <div className="grid grid-cols-3 w-full gap-4">
          {
            listProduct.map((item,index) => {
              return <ProductItem product = {item} isDisplayCart = {isDisplayCart}/>
            })
          }
          
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    listProduct : state.productReducer.arrProduct,
    inCart: state.productReducer.inCart
  }
}

export default connect(mapStateToProps)(ProductList)
