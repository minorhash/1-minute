function Wel(props) {
    return React.createElement(
        "h5",
        null,
        "Hello, ",
        props.name
    );
}

function App() {
    var arr = ["sara", "tom", "jon"];
    var ob = arr.map(function (num) {
        return React.createElement(
            "li",
            null,
            "   ",
            num
        );
    });
    return React.createElement(
        "ul",
        null,
        ob
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('wel'));