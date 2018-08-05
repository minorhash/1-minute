function Comment(props) {
  return React.createElement(
    "div",
    { className: "Comment" },
    React.createElement(
      "div",
      { className: "UserInfo" },
      React.createElement("img", { className: "Avatar",
        src: props.author.avatarUrl,
        alt: props.author.name
      }),
      React.createElement(
        "div",
        { className: "UserInfo-name" },
        props.author.name
      )
    ),
    React.createElement(
      "div",
      { className: "Comment-text" },
      props.text
    ),
    React.createElement(
      "div",
      { className: "Comment-date" },
      formatDate(props.date)
    )
  );

  ReactDOM.render(element, document.getElementById('comm'));
}