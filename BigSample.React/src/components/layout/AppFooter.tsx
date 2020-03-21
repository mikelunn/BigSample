import React from 'react';

function AppFooter(){
    return(
        <div className="layout-footer">
                <span className="footer-text" style={{'marginRight': '5px'}}>PrimeReact</span>
                <img src="assets/layout/images/logo.svg" alt="" width="80"/>
                <span className="footer-text" style={{'marginLeft': '5px'}}>Theme and Layout</span>
            </div>
    )
}
export default AppFooter;