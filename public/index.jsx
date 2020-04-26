import React from 'react';
import { render } from 'react-dom';
import App from  './app.jsx';

const renderApp = (NextApp) => {
    render(<NextApp />,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App);
