import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import classicTee from '../../assets/images/classic-tee.jpg'
import './Home.css'
import {handleAddToCart} from "../shoppingCart/store/action";
import {handleAddProductError, handleAddProductSuccess} from "../../basic/Notification";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 0,
                name: 'Classic Tee',
                price: '75.00',
                selectSize: null,
                size: ['S', 'M', 'L']
            },
            isSelect: false
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="home-bg-img align-content-center" src={classicTee} alt={"product-item"}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 product-detail-wrapper">
                            <p className="product-name text-border">Classic Tee</p>
                            <p className="product-price text-border">$75.00</p>
                            <p className="product-content">The seeds for Moustache Republic were sown by founder Tony
                                Hou in 2009.</p>
                            <p className="product-content">
                                Already a highly talented developer, Tony was looking for a new challenge; that
                                challenge was the world of ecommerce. The more he learned, the more he loved it. Tony
                                built his own online shops, learning about digital marketing, how to convert browsers
                                into customers and how to integrate multi-channelled cross-border ecommerce to maximum
                                effect.Ecommerce became his passion, and he decided this was what he wanted to do for
                                the rest of his life.</p>
                            <p className="product-content-size">SIZE
                                {this.state.isSelect ? null : <span className="size-require">*</span>}
                                <span
                                    className="product-content-select-size">&nbsp;&nbsp;{this.state.product.selectSize}</span>
                            </p>
                            <div>
                                {
                                    this.state.product.size.map((item, index) =>
                                        <a href="# " key={index}
                                           className={item === this.state.product.selectSize ? 'product-size-active' : 'product-size'}
                                           onClick={() => this.handleChooseSize(item)}>
                                            <p>{item}</p>
                                        </a>)
                                }
                            </div>
                            {
                                this.state.product.selectSize ?
                                    <button className="btn-add-cart"
                                            onClick={(e) => {
                                                this.props.handleAddToCart(this.state.product);
                                                handleAddProductSuccess(e)
                                            }}>
                                        ADD TO CART</button> :
                                    <button className="btn-add-cart"
                                            onClick={(e) => {
                                                handleAddProductError(e)
                                            }}>
                                        ADD TO CART </button>
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    handleChooseSize = value => {
        let product = this.state.product;
        product.selectSize = value;
        let isSelect = true;
        this.setState({product, isSelect})
    };
}

const mapDispatchToProps = (dispatch) => ({
    handleAddToCart(product) {
        dispatch(handleAddToCart(product));
    }
});

export default connect(null, mapDispatchToProps)(Home);
