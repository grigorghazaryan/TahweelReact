import React, {Component} from 'react';
import { Image } from 'react-bootstrap';
import AboutTahweel from '../../img/AboutTahweel.jpg';
import environmentImg from '../../img/about/Group192.jpg';
import environmentImgIcon1 from '../../img/about/Component55–1.svg';
import environmentImgIcon2 from '../../img/about/Component43–1.svg';
import environmentImgIcon3 from '../../img/about/Component57–1.svg';
import environmentImgIcon4 from '../../img/about/Component45–1.svg';
import aboutPeopleImg from '../../img/about/Group194.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import constants from "../../helpers/constants";

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: [],
            isLoaded: false,
            state: [],
            overview: [],
            integreted: [],
            mission: [],
            history: [],
            around: [],
            healty: [],
            people: []
        }
        /* scroll animation start */
        AOS.init({
            once: true
        });
        document.addEventListener('scroll', function (e) {
            AOS.init({
                once: true,
            });
        });
        this.overview_url = `${constants.urls.API}/getOverview`;
        this.integreted_url = `${constants.urls.API}/getTwahweelIntegrated`;
        this.mission_url = `${constants.urls.API}/getMissionVission`;
        this.history_url = `${constants.urls.API}/getHistory`;
        this.around_url = `${constants.urls.API}/getAroundWorld`;
        this.healty_url = `${constants.urls.API}/getHealTyAndSafety`;
        this.people_url = `${constants.urls.API}/getTahweelPeople`;
        /* scroll animation end */
    }
        componentDidMount() {
            Promise.all([
                fetch(this.overview_url, {
                    method: `GET`
                }),
                fetch(this.integreted_url, {
                    method: `GET`
                }),
                fetch(this.mission_url, {
                    method: `GET`
                }),
                fetch(this.history_url, {
                    method: `GET`
                }),
                fetch(this.around_url, {
                    method: `GET`
                }),
                fetch(this.healty_url, {
                    method: `GET`
                }),
                fetch(this.people_url, {
                    method: `GET`
                }),

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
                        switch (i) {
                            case 0:
                                newState.overview = el.overview;
                                break;
                            case 1:
                                newState.integreted = el.integrated;
                                break;
                            case 2:
                                newState.mission = el.missionVision;
                                break;
                            case 3:
                                newState.history = el.history;
                                break;
                            case 4:
                                newState.around = el.aroundWorld;
                                break;
                            case 5:
                                newState.healty = el.healthSafety;
                                break;
                            case 6:
                                newState.people = el.people;
                                break;
                        }
                    }
                })
                newState.isLoaded = true;
                this.setState( newState );
            })
                .catch( err => {
                    console.log(err);

                    /* scroll animation end */
                })
        }
        render() {

            const overview = this.state.overview.map((item, i) => (
                <div className="row about--overview__content">
                    <div className="col-md-6 col-xs-12  col-lg-6 offset-lg-1 about--overview__content__text">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h1 className=" about--overview__content__text__title page--title"> <span> {item.title}</span></h1>
                            <hr className="about--overview__content__text__line  page--title__line" />

                            <p className="about--overview__content__text__text text--content">
                                {item.text1}
                            </p>
                            <p className="about--overview__content__text__text text--content">
                                {item.text2}
                            </p>
                            <p className="about--overview__content__text__text text--content">
                                {item.text3}
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12 col-lg-5">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="about--overview__content__img rounded--img">
                                <Image src={item.image}/>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            const integreted = this.state.integreted.map((item, i) => (
                <div className="row about--integrated__content">
                    <div className="col-md-12 col-xs-12  col-lg-11 offset-lg-1 about--integrated__content__text">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h2 className=" about--integrated__content__text__title page--title"> {item.title}</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12  col-lg-5 offset-lg-1">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <p className="about--integrated__content__left text--content">{item.description1}</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12 col-lg-4  ">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="">
                                <p className="about--integrated__content__right text--content">{item.description2}</p>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            const mission = this.state.mission.map((item, i) => (
                <div className="row about--mission__content">
                    <div className="col-md-6 col-xs-12  col-lg-3 offset-lg-1 about--mission__content__text">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h2 className=" about--mission__content__text__title page--title">{item.title}</h2>
                            <hr className="about--mission__content__text__line  page--title__line" />
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12 col-lg-6 offset-lg-1">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="">
                                <div className="about--mission__content__info">
                                    <h2 className="about--mission__content__info__subtitle">Mission</h2>
                                    <p  className="about--mission__content__info__text text--content">{item.mission_text}</p>
                                </div>
                                <div className="about--mission__content__info">
                                    <h2 className="about--mission__content__info__subtitle">Vision</h2>
                                    <p  className="about--mission__content__info__text text--content">{item.vision_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            const history = this.state.history.map((item, i) => (
                <div className="row about--history__content">
                    <div className="col-md-6 col-xs-12  col-lg-3 offset-lg-1 about--history__content__text">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h2 className=" about--history__content__text__title page--title"><span>{item.title}</span></h2>
                            <hr className="about--history__content__text__line  page--title__line" />
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12 col-lg-8">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="about--history__content__right">
                                <p className="about--history__content__right__text text--content">{item.description}</p>

                            </div>
                        </div>
                    </div>

                </div>
            ))
            const around = this.state.around.map((item, i) => (
                <div className="row about--around--the--world__content">
                    <div className="col-md-12 col-xs-12  col-lg-12 about--around--the--world__content__text">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h2 className=" about--around--the--world__content__text__title page--title">{item.title}</h2>
                            <hr className="about--around--the--world__content__text__line  page--title__line" />
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-12 col-lg-6  offset-lg-2">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div className="about--around--the--world__content__right">
                                <p className="about--around--the--world__content__right__text text--content">{item.description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            const healty_env = this.state.healty.map((item, i) => (
                <div className="container container--medium">
                    <div className="row about--environment__content">
                        <div className="col-md-6 col-xs-12  col-lg-6 about--environment__content__text">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h2 className=" about--environment__content__text__title page--title">{item.title}</h2>
                                <hr className="about--environment__content__text__line  page--title__line" />
                                <div className="about--environment__content__text__img rounded--img">

                                    <Image src={item.image}/>
                                </div>
                                <p className="about--environment__content__text__text text--content">{item.description}</p>

                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12 col-lg-5 offset-lg-1">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="about--environment__content__img rounded--img">
                                    <Image src={item.image}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row about--environment__info">
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon1} className="about--environment__info__cart__image"/>
                                    {/* <img src="assets/img/about/Component 55 – 1.svg" alt="" className="about--environment__info__cart__image"/> */}
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>{item.text1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon2} className="about--environment__info__cart__image"/>
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>{item.text2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon3} className="about--environment__info__cart__image"/>
                                    {/* <img src="assets/img/about/Component 57 – 1.svg" alt="" className="about--environment__info__cart__image"/> */}
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>{item.text3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon4} className="about--environment__info__cart__image"/>
                                    {/* <img src="assets/img/about/Component 45 – 1.svg" alt="" className="about--environment__info__cart__image"/> */}
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>{item.text4}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            const people = this.state.people.map((item, i) => (
                <div className="row about--people__content">
                    <div className="col-md-6 col-xs-12  col-lg-6  about--people__content__img">

                        <div data-aos="fade-right" data-aos-duration="1000">
                            <div className=" rounded--img">
                                <Image src={aboutPeopleImg}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12 col-lg-6 about--people__content__text">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <h2 className=" about--people__content__text__title page--title"> {item.title}</h2>
                            <hr className="about--people__content__text__line  page--title__line" />
                            <div className="about--people__content__text__img rounded--img">
                                <Image src={item.image}/>
                            </div>
                            <p className="about--people__content__text__text text--content">
                                {item.description}
                            </p>
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
        <div className="about">
            <div className="about--overview overflow--hidden">
            
        
                <div className="container container--medium">
                    {overview}
                </div>
            </div>

            <div className="about--integrated overflow--hidden">
            
        
                <div className="container container--medium">
                    {integreted}
                </div>
            </div>

            <div className="about--mission  overflow--hidden">
            
        
                <div className="container container--medium">
                    {mission}
                </div>
            </div>

            <div className="about--history overflow--hidden">
                <div className="container container--medium">
                    {history}
                </div>
            </div>

            <div className="about--around--the--world overflow--hidden">
        
                <div className="container container--max">
                    {around}
                </div>
            </div>

            <div className="about--environment overflow--hidden">
                {healty_env}
            </div>

            <div className="about--people overflow--hidden">
                <div className="container container--medium">
                    {people}
                </div>
            </div>

        </div>
    )

}}

export default About ;
