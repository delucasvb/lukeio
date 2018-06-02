import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'aos/dist/aos.css'
import 'aos/dist/aos'
import './fonts/catamaran.css'
import './fonts/lato.css'
import './index.css'
import 'animate.css/animate.min.css'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
document.body.setAttribute('data-spy', 'scroll');
document.body.setAttribute('data-target', '#navbar');
document.body.setAttribute('data-offset', '100');
registerServiceWorker();