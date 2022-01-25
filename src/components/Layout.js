import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';





function layout(props) {
    return (
        <div>

            {props.loading && (<Loader/>)}

            <Header/>
            <div className="content" >
                {props.children}
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default layout
