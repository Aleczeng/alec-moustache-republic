import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import './Header.css'
import classicTee from "../../assets/images/classic-tee.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOnClick: false
        }
    }

    render() {
        return (
            <Fragment>
                <nav className="nav-bar">
                    <a href="#" onClick={() => this.handleClickCart()}>
                        <div className={this.state.cartOnClick ? "nav-cart-active" : "nav-cart"}>
                            <span className="head-cart-text">My Cart</span>
                            <FontAwesomeIcon className="head-cart-icon" icon={faShoppingCart}/>
                            <span> ({this.props.totalCount})</span>
                        </div>
                    </a>
                    {this.state.cartOnClick ?
                        <div className="nav-cart-content cart-content">{this.handleDisplayCartProduct()} </div> : null}
                </nav>
            </Fragment>
        )
    }

    handleDisplayCartProduct = () => {
        if (this.props.cartProductList.length > 0) {
            return (
                this.props.cartProductList.map((item, index) =>
                    <div className="row" key={index}>
                        <div className="col-6">
                            <img className="home-bg-img" src={classicTee} alt={"product-item"}/>
                        </div>
                        <div className="col-6 cart-product-info">
                            <p className="product-name text-border">{item.name}</p>
                            <p className="product-name text-border">{item.count} ×
                                &nbsp;<strong>${item.price}</strong>
                            </p>
                            <p className="product-price text-border">Size: {item.selectSize}</p>
                        </div>
                    </div>
                ))
        } else {
            return <p>Your cart is empty</p>
        }
    };

    handleClickCart = () => {
        let cartOnClick = !this.state.cartOnClick;
        this.setState({cartOnClick})
    }
}

const mapStateToProps = (state) => ({
    totalCount: state.cart.totalCount,
    cartProductList: state.cart.cartProductList,
});

export default connect(mapStateToProps, null)(Header);
