import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

import constants from '../../helpers/constants'

import AOS from 'aos';
import 'aos/dist/aos.css';


class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: [],
            categories:[]
        }
        AOS.init({
            once: true
        });
        document.addEventListener('scroll', function (e) {
            AOS.init({
                once: true,
            });
        });


        this.url = `${constants.urls.API}/getCategories`;
    }

    componentDidMount() {
        fetch(this.url, {
            method: `GET`
        }).then( res =>{
            return res.json()
        })
            .then( result =>{
                this.setState({
                    categories: result.category
                })
            })
            .catch( err =>{
                console.log(err);
            })
    }

    render() {
        //console.log( this.state.categories )
        const categories = this.state.categories.map(( item, i ) => (

            <div key={i} className="col-lg-6 col-12 products--page__categories__col">
                <div className="products--page__categories__content products--page__categories__content--industries">
                    <div data-aos="fade-right" data-aos-duration="1000" className="full--height">
                        <NavLink to={`/industrial/${item.id}`} exact>
                            <h1 className=" page--title products--page__categories__content__title">
                                <span>{item.name}</span>
                            </h1>
                            <hr className="page--title__line products--page__categories__content--industries__line" />
                            <p className="text--content products--page__categories__content__text">
                                { item.description }
                            </p>
                        </NavLink>
                    </div>
                </div>
            </div>
        ))
    return(
        <div className="products--page overflow--hidden">
            <div className="container container--medium products--page__categories">
                <div className="row">
                    { categories }
                </div>
            </div>
        </div>

    )
    // }

}}
export default Products ;
