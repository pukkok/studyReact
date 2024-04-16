import React from 'react'
import '../style/Cosmetic.css'
import Input from './Input'

class Cosmetic extends React.Component{
    state = {
        datas:[],
        filters : []
    }

    componentDidMount(){
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(res => res.json())
        .then((datas) => {
            this.setState({datas})
        })
    }

    sooort = () => {
        let {datas} = this.state
        datas.sort((a, b)=>{
            return a.price - b.price
        })
        this.setState({datas})
    }

    check = (e) => {
        let {datas} = this.state
        let inputValue = document.querySelector('header input').value
        let filtered = datas.filter(({name}) => {
            return name.toLowerCase().includes(inputValue.toLowerCase()) 
        })

        if(e.key==='Enter'){
            if(filtered.length===0) alert('검색 결과가 없습니다.')
            this.setState({filters: filtered })
        }

        if(inputValue.length===0) this.setState({filters:[]})    
    }

    abc = () => {
        let a = document.querySelector('select')
        a.click()
    }

    render(){
        const {datas, filters} = this.state

        return(
            <>
            <header>
            <select onMouseOver={this.abc}>
                <option>a</option>
                <option>b</option>
                <option>c</option>
            </select>

                <Input handleChange={this.check} size='small' color='tan' placeholder='상품명을 입력하세요'/>
                <button onClick={this.sooort} className='sort-btns'>Price</button>
            </header>
            <div className='container'>
                {(filters.length>0?filters:datas).map(({id, name, price, image_link, description}) => {
                    return (
                        <div key={id} className='product'>
                            <div className='product-img'>
                                <img src={image_link}/>
                            </div>
                            <div className='product-name'>{name}({price})</div>
                            <div className='product-description'>{description}</div>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }


}

export default Cosmetic

