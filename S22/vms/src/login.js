import React from "react";

function Header(){
return(
    <div className="header">
        Header content
          </div>
);
}

function Footer(){
    return(
        <div className="footer">
            Footer content
              </div>
    );
}

function Content(){
    return (
        <div className="Content">
            Hello World!...........
        </div>
    );
}

function login(){
    return(
        <div className="fullheight">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default login;