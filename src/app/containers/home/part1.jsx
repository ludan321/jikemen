import React, {Component} from 'react'
import "./css/homepage.css"
export  default class Part1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageNum: 1,
            ditan: -805,
        }
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    prePage = () => {
        // console.log(13)
        if (this.state.pageNum == 5) {
            this.setState({
                pageNum: 2
            })

            return false
        }
        this.setState({
            pageNum: ++this.state.pageNum
        })
    }
    nextPage = () => {
        if (this.state.pageNum == 1) {
            this.setState({
                pageNum: 4
            })
            return false
        }
        this.setState({
            pageNum: --this.state.pageNum
        })
    }

    render() {
        let sty = {
            width: '805px',
            position: "relative",
            left: "0px",
            top: '0px',
            zIndex: '998',
            opacity: '0',
            transition: 'opacity 500ms ease 0s'
        }
        return (


            <section className="section two-column hero -gray-background -shadow">
                <div className="container">
                    <div className="lead ">
                        <p className="_supertitle -red">
                            Build the future of communications
                        </p>
                        <h1 className="_title  ">Engage customers like never before on Voice, SMS, Video, and
                            WhatsApp. </h1><a className="button -big -red -prompt">
                        Get a free API key

                    </a><p className="sub-cta ">
                        Questions?

                        <a className="_link link-red-underline">
                            Talk to an expert.
                        </a></p>
                    </div>
                    <div className="content ">
                        <div className="people-carousel">
                            <div className="slider-wrapper">
                                <div className="slider slick-initialized slick-slider">
                                    <button
                                        className="slick-prev slick-arrow"
                                        aria-label="Previous"
                                        type="button"
                                        onClick={this.prePage}
                                    >
                                        Previous
                                    </button>
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={{opacity: '1', width: '4025px'}}>
                                            <div className="slick-slide"
                                                 style={{
                                                     left: "0px",
                                                     opacity: this.state.pageNum == 1 ? "1" : "0",
                                                     transform: 'matrix(1, 0, 0, 1, 0, 0)'
                                                 }}>
                                                <div>
                                                    <div>
                                                        <div className="slide">
                                                            <div className="headshot">
                                                                <img
                                                                    src={require("./img/david-ganey.png")}
                                                                    alt="Jacinda Shelly"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide"
                                                 style={{
                                                     left: "-805px",
                                                     opacity: this.state.pageNum == 2 ? "1" : "0",
                                                     transform: 'matrix(1, 0, 0, 1, 0, 0)'


                                                 }}>
                                                <div>
                                                    <div >
                                                        <div className="slide">
                                                            <div className="headshot">
                                                                <img
                                                                    src={require("./img/devlin-oneil.png")}
                                                                    alt="Devlin O'Neil"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide"
                                                 style={{
                                                     left: "-1610px",
                                                     opacity: this.state.pageNum == 3 ? "1" : "0",
                                                     transform: 'matrix(1, 0, 0, 1, 0, 0)'


                                                 }}>
                                                <div>
                                                    <div >
                                                        <div className="slide">
                                                            <div className="headshot">
                                                                <img
                                                                    src={require("./img/jacinda-shelly.png")}
                                                                    alt="Nancy Lublin"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide"
                                                 style={{
                                                     left: "-2415px",
                                                     opacity: this.state.pageNum == 4 ? "1" : "0",
                                                     transform: 'matrix(1, 0, 0, 1, 0, 0)'


                                                 }}>
                                                <div>
                                                    <div >
                                                        <div className="slide">
                                                            <div className="headshot"
                                                            >
                                                                <img
                                                                    src={require("./img/nancy-lublin.png")}
                                                                    alt="David Ganey"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide "
                                                 style={{
                                                     left: "-3220px",
                                                     opacity: this.state.pageNum == 5 ? "1" : "0",
                                                     transform: 'matrix(1, 0, 0, 1, 0, 0)'


                                                 }}
                                            >
                                                <div>
                                                    <div >
                                                        <div className="slide">
                                                            <div className="headshot">
                                                                <img
                                                                    src={require("./img/david-ganey.png")}
                                                                    alt="Mai Le"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="slick-next slick-arrow"
                                        aria-label="Next"
                                        type="button"
                                        onClick={this.nextPage}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}