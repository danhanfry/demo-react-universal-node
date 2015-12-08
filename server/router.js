
import React from 'react';
import { renderToString } from 'react-dom/server';

import AppComponet from '../universal/app';


var func = require('./func')

module.exports = function(app) {

    app.get('*', (req, res) => {

        const state = func.data()

        console.log('........', func.data() )

        const renderHtml = renderToString(<AppComponet {...state}/>);
        res.render('index', { renderHtml })

    });

}
