function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    
    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )

}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);

// function MyButton(props) {
//     const [isClicked,setIsClicked] = React.useState(false);

//     return React.createElement(
//         'button',
//         { onclick : () => setIsClicked(true)},
//         isClicked ? 'clicked!' : 'Click here!'
//     )
// }

// const domContainer = document.querySelector('#root');
// ReactDom