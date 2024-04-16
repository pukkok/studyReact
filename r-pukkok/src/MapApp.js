import React, {Component} from 'react'
import './App.css'

const coordinates = [
    {
        "name": "서울 강남",
        "coordinate": [
            37.497944,
            127.027618
        ]
    },
    {
        "name": "대구 동성로",
        "coordinate": [
            35.865467,
            128.593369
        ]
    },
    {
        "name": "부산 해운대",
        "coordinate": [
            35.1884,
            129.166957
        ]
    },
]

class App extends Component{
    state = {
        info : '',
        map: null,
        marker: null,
        selectValue: ''
    }

    decomposeArgs = (args) => {
        const { name, coordinate } = args
        const [ lat, lon ] = coordinate
        return [ lat, lon, name]
    }

    displayLocation = (lat, lon, name, mapObj, marker) => {
        const map = mapObj.setView([lat, lon], 13) // 지도 초기 설정
        
        // 지도 타일맵 스타일 설정
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // 지도 타일맵 스타일 설정
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        // 마커 위치 설정
        marker.setLatLng([lat, lon])
        .bindPopup(name) // 마커에 대한 말풍선 표시
        .openPopup()

        this.setState({
            info:`
                지역 : ${name}
                위치 : ${lat} 위도 / ${lon} 경도
            `  
        })
    }

    display = (map, marker, location) => {
        const [ lat, lon, name] = this.decomposeArgs(location)
        this.displayLocation(lat, lon, name, map, marker)

    }

    componentDidMount(){
        const map = window.L.map('map') // 지도 객체 조회하기
        const marker = window.L.marker([0, 0]).addTo(map) // 마커 객체 조회하기
        const firstLocation = coordinates[0] // 초기 위치정보 조회하기
        // 초기 위치정보로 지도에 마커 표시
        this.display(map, marker, firstLocation)
        this.setState({map, marker}) // map, marker 객체는 초기 렌더링시에 한번만 조회하기
    }

    selectItem = (e) => {
        // console.log(e.target.selectedIndex)
        const { map, marker } = this.state
        const selectedLocation = coordinates[e.target.selectedIndex]
        this.display(map, marker, selectedLocation)
        this.setState({selectValue: e.target.value})
    }

    render(){
        const { info , selectValue } = this.state

        return(
            <div className='App'>
                <select onChange={this.selectItem} value={selectValue}>
                    {coordinates.length > 0 && coordinates.map((coord, id)=>{
                        return <option key={id} value={coord.name}>{coord.name}</option>
                    })}
                </select>
                <div id='map'></div>
                <p>{info}</p>
            </div>
        )
    }   
}

export default App