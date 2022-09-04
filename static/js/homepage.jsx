'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h2>Have a nice time!</h2>
      <a href="/cards">Trading cards</a><br/>
      <a href="/about">About Us</a>
      <img src="/static/img/balloonicorn.jpg" id="homepage-image"></img>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));