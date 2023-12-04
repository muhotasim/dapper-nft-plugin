import React, { Component } from 'react';
import gif from '../banner.gif';
import icon from '../opensea.png';
import background from '../banner_bg.jpg';
import { Modal } from 'react-bootstrap';
import { mint } from '../mint';

export class Mint extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: '',
            modal:false,
            mint:false,
            hash:'',
            mintingLimit:1,
        }
    }

    isMetaMaskConnected(){
        const ethereum = window.ethereum;
        if(ethereum){
            ethereum.request({method: 'eth_accounts'})
            .then(accounts => {
                if(accounts.length === 0 || localStorage.getItem('isMetaMaskConnected') === null){
                    this.setState({error:'Connect your wallet first!', modal:true})
                }else{
                    this.handleMint();
                }
                // console.log(accounts.length);
            })
            .catch(error => {
              console.error(error);
            })
        }else{
            this.setState({error: 'Connect your wallet first!', modal:true})
        }
    }

    async handleMint(){
        let txnHash = await mint(this.state.mintingLimit);
        if(txnHash.hash.length > 0){
            this.setState({mint:true, hash:txnHash.hash})
        }
    }

    
    render() {
        return (
            <main style={{backgroundImage:'url('+background+')'}}>

                <section className="banner__wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="banner__img">
                                    <img src={gif} alt="GIF"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner__content--wrap">
                                    <h2 className="banner--title">Welcome To <span>Dapper</span></h2>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                                    <div className="banner__price--wrap">
                                        <h4 className="price__title">Current Price</h4>
                                        <p className="price">0.05 ETH</p>
                                    </div>
                                    <div className="banner__btn--wrap">
                                        <a href="/#" className="btn btn__two" onClick={() => this.isMetaMaskConnected() }>MINT</a>
                                        <a href="https://testnets.opensea.io/collection/dapper-monkey-collection" target="_blank" rel="noreferrer" className="btn opensea__btn"><img src={icon} alt="ICON"/> OPENSEA</a>
                                    </div>
                                    { this.state.mint && <p className='mt-4'>Your Minting Successfull! <br/>Transaction Hash: <strong>{this.state.hash}</strong></p> }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal 
                        show={this.state.modal} 
                        onHide={() => this.setState({modal:false})} 
                        animation={false} 
                        centered style={{ zIndex:9999}}>
                        <Modal.Header closeButton>
                            <Modal.Title className='text-dark'>Connect Wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='text-danger' style={{padding:'26px 17px'}}>{this.state.error}</Modal.Body>
                    </Modal>
                </section>

            </main>
        )
    }
}

export default Mint
