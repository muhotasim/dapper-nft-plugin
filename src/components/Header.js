import React from 'react';
import logo from '../logo.png';
import ConnectWalletButton from './ConnectWalletButton';


export default class Header extends React.Component {


    render(){
        
    
        return (
        <header>
            <div className="menu__area transparent__header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu__wrap">
                                <nav className="menu__nav">
                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="LOGO"/></a>
                                    </div>
                                    <div className="header__button">
                                        <ConnectWalletButton/>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}