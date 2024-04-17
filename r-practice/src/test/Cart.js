import React, { Component, useState } from 'react'

function Cart () {
    const [cart, setCart] = useState([])

    const addProduct = () => {
        const product = prompt("원하시는 상품을 추가해주세요 !")
        setCart([ ...cart, product ])
        
    }

    return (
        <>
            <button onClick={addProduct}>상품 목록 생성기</button>
            <h1>상품 목록</h1>
            -----------------
            {cart.map((list, i) => {
                return <h4 key={i}>{list}</h4>
            })}
        </>
    )
}
export default Cart

// class Cart extends Component{
//     state = {
//         cart: []
//     }

//     //구현하기
//     addProduct = () => {
//         const product = prompt("원하시는 상품을 추가해주세요 !")
//         this.setState(prevState => {
//             prevState.cart.push(product)
//             return {cart : prevState.cart}
//         })
//     }
    
//     // 구현하기
//     render(){
//         const { cart } = this.state
//         return (
//             <>
//                 <button onClick={this.addProduct}>상품 목록 생성기</button>
//                 <h1>상품 목록</h1>
//                 -----------------
//                 {cart.map((list, i) => {
//                    return <h4 key={i}>{list}</h4>
//                 })}
//             </>
//         )
//     }
// }
// export default Cart