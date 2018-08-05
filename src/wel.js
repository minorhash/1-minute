function Wel(props) {
return (
<h5>Hello, {props.name}</h5>
);

}

function App() {
const arr=["sara","tom","jon"]
    const ob=arr.map((num)=>
        <li>   {num}</li>
)
    return (
<ul>{ob}</ul>
)}


ReactDOM.render(
  <App />,
  document.getElementById('wel')
);

