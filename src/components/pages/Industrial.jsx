import {React, useState, setStatus, useEffect} from 'react';
import { Image, Tab, Tabs, Collapse } from 'react-bootstrap';
// import Handroll from '../../img/Product-category/IndustrialSolutions/222Handroll.jpg';
// import img1 from '../../img/Product-category/IndustrialSolutions/111.jpg';
// import img2 from '../../img/Product-category/IndustrialSolutions/333.jpg';
// import img3 from '../../img/Product-category/IndustrialSolutions/4444.jpg';
// import img4 from '../../img/Product-category/IndustrialSolutions/5555.jpg';
import arrowUp from '../../img/Product-category/arrow-up.svg';
import arrowDown from '../../img/Product-category/arrow-down.svg';
// import image from '../../img/Product-category/AvialablePossibilities.png';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import constants from "../../helpers/constants";
// import {forEach} from "react-bootstrap/ElementChildren";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className = 'slick-next slick--slider--arrow' onClick={onClick}><svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className = 'slick-prev slick--slider--arrow' onClick={onClick}><svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>
    );
}

function Industrial(props){
    const id = props.match.params.id;
    const url = `${constants.urls.API}/getProductsByCategory/${id}`;

    const [isActiveCollapse, setActiveCollapse] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
    });
    const toggleCollapseItem = index => {
        setActiveCollapse(prevState => ({...prevState, [index]: !Boolean(prevState[index])}));
    };

    // find out if tab is open or closed

    const [ data, setData ] = useState(null);
    const [ selectedProduct, setSelectedProduct ] = useState(null);


    useEffect(()=>{
        Promise.all([
            fetch(url, {
                method: `GET`
            }),

        ]).then( res =>{
            return Promise.all(
                res.map( response => {
                    return response.json()
                })
            )
        }) .then( result =>{
            let newState = {}
            result.forEach( ( el,i ) => {
                if( el.success ) {
                    switch (i) {
                        case 0:
                            newState = result[0];
                            break;
                        /*case 1:
                            newState.products = el.products;
                            break;
    */
                    }
                }
            })
            setData( newState );
        })
            .catch( err => {
                console.log(err);

                /* scroll animation end */
            })
    },[]);
    /* scroll animation start */
    AOS.init({
        once : true
    });
    document.addEventListener('scroll', function(e) {
        AOS.init({
            once : true,
        });
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    function getProductById(id){
        for(let v in data?.products) {
            if (id == data?.products[v].id) {
                // remove active class from all products
                let removeProductClass = document.getElementsByClassName("products--category__main__slider__content");
                for (let i = 0; i < removeProductClass.length; i++) {
                    removeProductClass[i].className = removeProductClass[i].className.replace(" active", "");
                }

                // add active class to clicked element
                let productActiveClass = document.getElementsByClassName("products--category__main__slider__content--"+id);
                for (let i=0; i<productActiveClass.length; i++) {
                    productActiveClass.item(i).classList.add('active');
                }
                

                return data?.products[v];
            }
        }
        return null;
    }

    // add class for every category so we can change color of them
    let categoryClass = "";
    if(data && data.category.id===2){
        categoryClass = "packaging";
        console.log('cat-id' , data.category.id);
    }else if(data && data.category.id===3){
        categoryClass = "agriculture";
        console.log('cat-id' , data.category.id);
    }

    return (
        <div className={`products--category overflow--hidden ${categoryClass}`}>

            <div className="products--category__main">
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div className="container container--products single--products--slider overflow--hidden">
                        <div className="row">
                            <div className="col-md-10 col-12">
                                <h1 className=" page--title products--category__main__title">
                                    {data?.category.name}
                                </h1>
                                <hr className="products--category__main__line page--title__line" />
                                <p className="text--content products--category__main__text">

                                    {data?.category.description}
                                </p>
                                {data?.products.length <= 4 &&
                                <div className="products--category__main__item">
                                    {data?.products.map(function(item, i){
                                        return <div key={"product-item-" + item.id} onClick={() => setSelectedProduct(getProductById(item.id))}>
                                            <div className={`products--category__main__slider__content products--category__main__slider__content--${item.id}`}>
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        <Image src={constants.urls.UPLOAD + item.logo}/>
                                                    </div>
                                                    <p className="products--category__main__slider__content__title text--content">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                                }
                                {data?.products.length > 4 &&
                                <Slider {...settings}
                                        className="products--category__main__slider products--category__main__slider--industrial">
                                    {data?.products.map(function(item, i){
                                        return <div key={"product-item-" + item.id} onClick={() => setSelectedProduct(getProductById(item.id))}>
                                            <div className={`products--category__main__slider__content products--category__main__slider__content--${item.id}`}>
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        <Image src={constants.urls.UPLOAD + item.logo}/>
                                                    </div>
                                                    <p className="products--category__main__slider__content__title text--content">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </Slider>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedProduct &&
            <div className="products--category__info">
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div className="container container--products  overflow--hidden">
                        <div className="row">
                            <div className="col-md-10 col-12">

                                {/* title start  */}
                                <h2 className="products--category__info__title">{selectedProduct.title}</h2>
                                {/* title end */}

                                {/* tab start */}
                                <div className="products--category__info__tab">
                                    <Tabs id="controlled-tab-example">
                                        {selectedProduct.product_tabs_map?.map(function(item, i){
                                            return <Tab key={"product-tab-item-" + item.get_tabs.id} eventKey={item.get_tabs.name} title={item.get_tabs.name}>
                                                <div className="products--category__info__tab__text">
                                                    <p className="products--category__info__tab__text__p">
                                                        {item.get_tabs.description}
                                                    </p>
                                                </div>
                                            </Tab>
                                        })}
                                    </Tabs>
                                </div>
                                {/* tab end */}

                                {/* collapse title */}

                                <p className="products--category__info__collapse--title">{selectedProduct.product_desc}</p>
                                {/* collapse title end*/}

                                {/* collapse start*/}
                                {selectedProduct.product_list?.map(function(item, i){
                                    if (!item.name || item.name.trim() == "") {
                                        return;
                                    }
                                    return <div key={"product-list-item-" + item.id} className="products--category__info__collapse--content">
                                        <div className="products--category__info__collapse--content__button"
                                             onClick={() => toggleCollapseItem(i)}
                                             aria-controls="example-collapse-text1"
                                             aria-expanded={isActiveCollapse[i]}>
                                            <p className={isActiveCollapse[i] ? "open--tab" : "close--tab"}>
                                                <Image src={arrowUp}
                                                       className="products--category__info__collapse--content__button__text__image--open"/>
                                                <Image src={arrowDown}
                                                       className="products--category__info__collapse--content__button__text__image--close"/>
                                                <span>{item.name}</span></p>

                                        </div>

                                        <Collapse in={isActiveCollapse[i]}>
                                            <div
                                                className="products--category__info__collapse--content__info example-collapse-text1">
                                                <ul>
                                                    {item.product_list_items?.map(function(listItem, i){
                                                        return <li><span>{listItem.name}</span></li>
                                                    })}
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </div>
                                })}

                                {/* collapse end*/}
                                {selectedProduct.product_list?.map(function(item, i){
                                    if (item.name && item.name.trim() != "") {
                                        return;
                                    }
                                    return <div className="products--category__info__list">
                                        <ul>
                                            {item.product_list_items?.map(function(listItem, i){
                                                return <li><span>{listItem.name}</span></li>
                                            })}
                                        </ul>
                                    </div>
                                })}

                                {/* image title start*/}
                                <p className="products--category__info__image--title">{selectedProduct.uses_desc}</p>
                                {/* image title end*/}

                                {selectedProduct.image?.map(function(item, i){
                                    return <div className="products--category__info__image--content">
                                        <Image src={constants.urls.UPLOAD + item.image}/>
                                    </div>
                                })}


                            </div>
                        </div>
                    </div>

                </div>
            </div>
            }
        </div>
    )


}

export default Industrial ;