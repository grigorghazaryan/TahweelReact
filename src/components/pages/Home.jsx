import React, {Component} from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import loader from '../../img/Media/loader.png';
// import Image02 from '../../img/Media/loader.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeCarousel from '../global/HomeCarousel'
import HomeTab from '../global/HomeTab'
import constants from "../../helpers/constants";





class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: [],
            state: [],
            whyTahweel:[],
            aboutTahweel:[],
            isLoaded: false
        }
    AOS.init({
        once : true
    });
    document.addEventListener('scroll', function(e) {
        AOS.init({
            once : true,
        });
    });
        this.whyTahweelUrl = `${constants.urls.API}/getWhyTahweel`;
        this.sliderUrl = `${constants.urls.API}/getSliderData`;
        this.aboutUrl = `${constants.urls.API}/getAboutUsData`;
    }
    componentDidMount() {
        Promise.all([
            fetch(this.whyTahweelUrl, {
                method: `GET`
            }),
            fetch(this.sliderUrl, {
                method: `GET`
            }),
            fetch(this.aboutUrl, {
                method: `GET`
            })
        ]).then( res =>{
            return Promise.all(
                res.map( response => {
                    return response.json()
                })
            )
        }) .then( result =>{
            const newState = {}
            result.forEach( ( el,i ) => {
                if( el.success ) {
                    console.log(i)
                    switch (i) {
                        case 0:
                            newState.whyTahweel = el.whyTahweel;
                            break;
                        case 1:
                            newState.sliders = el.sliders;
                            break;
                        case 2:
                            newState.aboutTahweel = el.about;
                            break;
                    }
                }
            })
            newState.isLoaded = true;
            this.setState( newState );
        })
        .catch( err => {
            console.log('aa',err);

            /* scroll animation end */
        })
    }
    render() {
        //console.log(this.state.whyTahweel);
        const why_tahweel_ul = this.state.whyTahweel.map((item, i) => (
            <li key={1} className="nav-item">
                <a className="nav-link home--why__tab__nav--link" data-toggle="tab"
                   href={`#tab${i+1}`}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <div className="home--why__tab__nav--link__content link__active">
                            <Image src={constants.urls.UPLOAD +item.path} alt="ManufacturingImg"/>

                            <h2> {item.title} </h2>
                            <div
                                className="home--why__tab__nav--link__content__arrow why__arrow">
                                <svg width="1em" height="1em" viewBox="0 0 16 16"
                                     className="bi bi-chevron-down" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>

                        </div>
                    </div>
                </a>
            </li>

        ))

        const why_tahweel_tab = this.state.whyTahweel.map((item, i) => (
            <div key={1} className="tab-content">
                <div id="tab1" className="container tab-pane fade home--why__content"><br/>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                </div>
            </div>

        ))

        const about_tahweel = this.state.aboutTahweel.map((item, i) => (
            <div key={1} className="home--about overflow--hidden">
                <div className="container container--medium">
                    <div className="row home--about__content">


                        <div className="col-md-6 col-xs-12">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className="home--about__content__img">
                                    <Image src={item.image}/>
                                    {/*constants.urls.UPLOAD +*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 home--about__content__text">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h1 className=" home--about__content__text__title"> <span> {item.title}</span></h1>
                                <hr className=" home--about__content__text__line"/>
                                <p className=" home--about__content__text__text">{item.description}</p>

                                <NavLink to="/about" className="home--about__content__text__link">Read
                                    More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
        if (!this.state.isLoaded) {
            return <div className="loader">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }

        return (
            <div className="home">
                <HomeCarousel sliders={this.state.sliders || []} />

                    {about_tahweel}
                <div className="home--why overflow--hidden">
                    <div className="container container--medium">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h2 className="home--why__title">Why <span> Tahweel</span></h2>
                                <hr className="home--why__line"/>
                                <div className="row">

                                    <ul className="nav nav-tabs home--why__tab">
                                        {why_tahweel_ul}
                                    </ul>

                                    <div className="tab-content">
                                        {why_tahweel_tab}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <HomeTab/>
            </div>
        )

    }
          }

export default Home ;