'use strict';

function About() {
    return (
        <React.Fragment>
            <h2>About the Coder</h2>
            <a href="https://github.com/tavish-bell" target="_blank">
                Tavish's Github
            </a>
            <br/>
            <a href="/">Homepage</a>
        </React.Fragment>
    );
}

ReactDOM.render(<About />, document.querySelector('#about'));