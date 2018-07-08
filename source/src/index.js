import React from 'react';
import ReactDOM from 'react-dom';
import MenuAppBar from './AppBar';
import SimpleExpansionPanel from './QuestionPanel';

ReactDOM.render(<div>
    <MenuAppBar />
    <div className="margin-top-50">
        <div className="container">
            <div className="row legend">
                <span>Challenges</span>
            </div>
            <div className="row">
                <SimpleExpansionPanel />
            </div>
        </div>
    </div>
</div>, document.getElementById('root'));


