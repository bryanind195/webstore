import React from 'react';
import Header from './Header';
import Footer from './Footer';





function layout(props) {
    return (
        <div>
            <Header/>
            <div className="content" >
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default layout
