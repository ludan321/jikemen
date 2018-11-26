import React, {Component} from 'react';
import "./css/index.css"
import { Anchor } from 'antd';


const { Link } = Anchor;
import RightCode from "./rightcode"
class Login extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillMount() {
    }
    scrollTo=res=>{
        document.getElementById(res).scrollIntoView()
    }
    render() {
        return (
            <div className="apireference">
                <div className="docs-banner">
                    <div className="docs-seasonal-banner">

                        <div className="block-raw_html">

                        </div>
                    </div>


                    <nav className="docs-nav docs-layout-nav">
                        <div className="docs-nav__brand">
                            <a  className="docs-nav__link router-link-exact-active router-link-active"><span
                                className="docs-nav__logo"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
                                                                className="twlo-logomark"><path fill="currentColor"
                                                                                                d="M14.4,11.3c0,1.7-1.4,3.1-3.1,3.1S8.2,13,8.2,11.3s1.4-3.1,3.1-3.1S14.4,9.6,14.4,11.3z M11.3,15.6c-1.7,0-3.1,1.4-3.1,3.1 s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S13,15.6,11.3,15.6z M30,15c0,8.3-6.7,15-15,15S0,23.3,0,15S6.7,0,15,0S30,6.7,30,15z M26,15 c0-6.1-4.9-11-11-11S4,8.9,4,15s4.9,11,11,11S26,21.1,26,15z M18.7,15.6c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1 S20.4,15.6,18.7,15.6z M18.7,8.2c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S20.4,8.2,18.7,8.2z"></path></svg></span>
                                <span className="docs-nav__title">Twilio Docs</span></a>
                        </div>

                        <ul className="docs-nav__primary">

                            <li className="docs-nav__item">

                                <a  className="docs-nav__link">SMS</a>

                            </li>

                            <li className="docs-nav__item">

                                <a  className="docs-nav__link">Voice</a>

                            </li>

                            <li className="docs-nav__item">

                                <a  className="docs-nav__link">Runtime</a>

                            </li>

                            <li className="docs-nav__item">

                                <a  className="docs-nav__link">Chat</a>

                            </li>

                            <li className="docs-nav__item">

                                <a  className="docs-nav__link">Studio</a>

                            </li>

                            <li className="docs-nav__item">

                                <a  className="docs-nav__link">All docs...</a>

                            </li>

                        </ul>

                        <ul className="docs-nav__secondary">

                            <li className="docs-nav__item">

                                <a  className="docs-nav__link">SDKs</a>

                            </li>

                            <li className="docs-nav__item">

                                <a  target="_blank"
                                   className="docs-nav__link">Help</a>

                            </li>

                            <li className="docs-nav__item">
                                <a  className="docs-nav__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                         className="twlo-icon-interface-search">
                                        <path fill="currentColor"
                                              d="M6 11l1 1-3 3H3v-1l3-3zm9-3.5c0 2.5-2 4.5-4.5 4.5S6 10 6 7.5 8 3 10.5 3 15 5 15 7.5zm-1 0C14 5.6 12.4 4 10.5 4S7 5.6 7 7.5 8.6 11 10.5 11 14 9.4 14 7.5z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li className="docs-nav__item">
                                <a  className="docs-nav__login">Log in</a>
                            </li>
                            <li className="docs-nav__item">
                                <a  className="docs-nav__signup">Sign up</a>
                            </li>

                        </ul>

                        <span className="docs-nav-mobile">
      <div className="docs-navicon">
          <a  className="docs-navicon__trigger">
              <div className="docs-navicon__lines">
                  <span className="docs-navicon__lines--center"></span>
              </div>
          </a>
      </div>
      <ul className="docs-nav-mobile__menu">
          <li><form method="get" action="/docs/search"><input type="search" name="q"
                                                              className="docs-nav-mobile__search"/></form></li>

      
        
          <li><a className="docs-nav-mobile__link">SMS</a></li>
        
      
        
          <li><a  className="docs-nav-mobile__link">Voice</a></li>
        
      
        
          <li><a className="docs-nav-mobile__link">Runtime</a></li>
        
      
        
          <li><a  className="docs-nav-mobile__link">Chat</a></li>
        
      
        
          <li><a  className="docs-nav-mobile__link">Studio</a></li>
        
      
        
          <li><a  className="docs-nav-mobile__link">All docs...</a></li>
        
      

      
        
          <li><a  className="docs-nav-mobile__link">SDKs</a></li>
        
      
        
          <li><a  target="_blank"
                 className="docs-nav-mobile__link">Help</a></li>
        
      

          <li><a  className="docs-nav-mobile__login">Log in</a></li>
          <li><a  className="docs-nav-mobile__signup">Sign up</a></li>
      </ul>
  </span>
                    </nav>
                </div>
                <div className="docs-layout" style={{marginTop: "48px", height: "670px"}}>
                    <div className="docs-sidebar docs-layout-sidebar">
                        <div className="docs-sidebar__header">
                            <a className="docs-sidebar__title router-link-exact-active router-link-active"
                              >
                                Sync: Shared state in the cloud
                            </a>
                            <a className="docs-sidebar__status" >
                                <div className="docs-sidebar__status-indicator "></div>
                                <div className="docs-sidebar__status-overlay ">
                                    <p className="docs-sidebar__status-title">Twilio</p>
                                    <p className="docs-sidebar__status-subtitle">All Systems Operational</p>
                                </div>
                            </a>
                        </div>
                        <div className="docs-sidebar__mobile-menu">
                            <p className="docs-sidebar__mobile-menu-title">Menu</p>
                            <svg className="twlo-icon-interface-dropdown" height="18" viewBox="0 0 18 18" width="18"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 7l-6 6-6-6V6h1l5 5 5-5h1v1z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="docs-sidebar__content">
                            <ul className="docs-sidebar__file-tree">
                                <li className="folder">
                                    <input checked="" id="getting-started" name="getting-started" type="checkbox"
                                           readOnly/>
                                    <label htmlFor="getting-started">Getting Started</label>
                                    <ul className="menu-accordion" role="menu-accordion">
                                        <li className="page ">
                                            <a >
                                                JavaScript Quickstart
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Android Quickstart
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                iOS Quickstart
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Download and install the SDKs
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="folder">
                                    <input checked="" readOnly id="ios-docs" name="ios-docs" type="checkbox"/>
                                    <label htmlFor="ios-docs">iOS Docs</label>
                                    <ul className="menu-accordion" role="menu-accordion">
                                        <li className="page ">
                                            <a >
                                                Quickstart
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                How to request access tokens
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Release Notes
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="folder">
                                    <input checked="" readOnly id="android-docs" name="android-docs" type="checkbox"/>
                                    <label htmlFor="android-docs">Android Docs</label>
                                    <ul className="menu-accordion" role="menu-accordion">
                                        <li className="page ">
                                            <a >
                                                Quickstart
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Release Notes
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="folder">
                                    <input checked="" readOnly id="javascript-docs" name="javascript-docs"
                                           type="checkbox"/>
                                    <label htmlFor="javascript-docs">JavaScript Docs</label>
                                    <ul className="menu-accordion" role="menu-accordion">
                                        <li className="page ">
                                            <a >
                                                Quickstart
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Release Notes
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="folder">
                                    <input checked="" readOnly id="rest-api" name="rest-api" type="checkbox"/>
                                    <label htmlFor="rest-api">REST API</label>
                                    <ul className="menu-accordion" role="menu-accordion">
                                        <li className="page ">
                                            <a >
                                                Overview
                                            </a>
                                        </li>
                                        <li className="page is-selected">
                                            <a >
                                                Services
                                            </a>
                                        </li>
                                        <ul className="menu-accordion expanded" id="doc-navigation"
                                            role="menu-accordion" style={{display: "block"}}>
                                            <li className="hash" id="doc-nav-0">
                                                

                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("example-1")
                                                    }}>Example
                                                </a>
                                            </li>
                                            <li className="hash" id="doc-nav-1">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("actions")
                                                    }}
                                                >Actions
                                                </a>
                                            </li>
                                            <li className="hash" id="doc-nav-2">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("list-all-services")
                                                    }}>1111111</a></li>
                                            <li className="hash" id="doc-nav-3">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("create-a-service")
                                                    }}>Create a
                                                Service</a></li>
                                            <li className="hash" id="doc-nav-4">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("parameters-1")
                                                    }}>Parameters</a>
                                            </li>
                                            <li className="hash" id="doc-nav-5">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("example-1")
                                                    }}
                                                >Example 1</a>
                                            </li>
                                            <li className="hash" id="doc-nav-6">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("example-2")
                                                    }}>Example 2</a>
                                            </li>
                                            <li className="hash" id="doc-nav-7">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("retrieve-a-service")
                                                    }}>Retrieve
                                                a Service</a></li>
                                            <li className="hash" id="doc-nav-8">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("example-2")
                                                    }}>Example</a>
                                            </li>
                                            <li className="hash" id="doc-nav-9">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("update-a-service")
                                                    }}>Update a
                                                Service</a></li>
                                            <li className="hash" id="doc-nav-10">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("parameters-2")
                                                    }}>Parameters</a>
                                            </li>
                                            <li className="hash" id="doc-nav-11">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("example-3")
                                                    }}>Example</a>
                                            </li>
                                            <li className="hash" id="doc-nav-12">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("delete-a-service")
                                                    }}>Delete
                                                A Service</a></li>
                                            <li className="hash" id="doc-nav-13">
                                                <a
                                                    className="intrapage"
                                                    onClick={()=>{
                                                        this.scrollTo("example-4")
                                                    }}>Example</a>
                                            </li>
                                        </ul>
                                        <li className="page ">
                                            <a >
                                                Documents
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Lists
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Maps
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Message Streams
                                            </a>
                                        </li>
                                        <li className="page">
                                            <a >
                                                Permissions
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="folder">
                                    <input checked="" readOnly id="guides" name="guides" type="checkbox"/>
                                    <label htmlFor="guides">Guides</label>
                                    <ul className="menu-accordion" role="menu-accordion">
                                        <li className="page ">
                                            <a >
                                                Sync Objects Overview
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Sync Documents
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Sync Lists
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Sync Maps
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a>
                                                Sync Message Streams
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Sync Webhooks
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Issuing Sync Tokens
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Sync Limits
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Mutation and Conflict Resolution
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Securing your Sync App
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="folder">
                                    <input checked="" readOnly id="libraries" name="libraries" type="checkbox"/>
                                    <label htmlFor="libraries">Libraries</label>
                                    <ul className="menu-accordion" role="menu-accordion">
                                        <li className="page ">
                                            <a >
                                                Sync SDK Download
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Sync SDK htmlFor Android
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Sync SDK htmlFor iOS
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                C#/.NET Server Library
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Java Server Library
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Node Server Library
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                PHP Server Library
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Python Server Library
                                            </a>
                                        </li>
                                        <li className="page ">
                                            <a >
                                                Ruby Server Library
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <main className="docs-layout-main docs-layout-multi-columns" style={{height: "670px"}}>
                        <div className="docs-layout-column" style={{height: "670px"}}>
                            <div className="docs-feedback ">
                                <form action="/docs/submit-feedback" method="POST">
                                    <input name="page" type="hidden" value="1320"/>
                                    <input name="requested_path" type="hidden" value="/docs/sync/api/services"/>
                                    <input name="star_rating" type="hidden" value=""/>
                                    <input name="csrfmiddlewaretoken" type="hidden"
                                           value="fBlHA61lOrKKR64EQ9CyZE9r6yZlYlcpuqmY9cWwbMTU0Mjc5MTQzMC40NDI1NjE"/>
                                    <div className="docs-feedback__rating-card">
                                                    <span className="docs-feedback__rating-label">Rate&nbsp;this&nbsp;
                                                        page:</span>
                                        <ol className="docs-feedback__rating-stars">
                                            <li className="docs-feedback__rating-star"></li>
                                            <li className="docs-feedback__rating-star"></li>
                                            <li className="docs-feedback__rating-star"></li>
                                            <li className="docs-feedback__rating-star"></li>
                                            <li className="docs-feedback__rating-star"></li>
                                        </ol>
                                    </div>
                                    <div className="docs-modal-overlay">
                                        <div className="docs-modal">
<span className="docs-modal__close">
<svg className="icon-close" fill="#233659" height="18" viewBox="0 0 18 18" width="18"
     xmlns="http://www.w3.org/2000/svg">
<path d="M15 4l-5 5 5 5v1h-1l-5-5-5 5H3v-1l5-5-5-5V3h1l5 5 5-5h1v1z"></path>
</svg>
</span>
                                            <h2 className="docs-modal__title">Thanks for rating this
                                                page!</h2>
                                            <p className="docs-modal__body">We are always striving to
                                                improve our documentation quality, and your feedback is
                                                valuable to us. How could this documentation serve you
                                                better?</p>
                                            <textarea className="docs-modal__textarea" name="comment"
                                                      placeholder="Suggestions..."></textarea>
                                            <div className="feedback-countries"
                                                 style={{display: " none !important"}}>
                                                <label htmlFor="htmlFor">If applicable fill in the countries
                                                    where you are using Twilio</label><br/>
                                                <input name="countries" readOnly value="" tabIndex="-1"
                                                       autoComplete="false"/><br/>
                                            </div>
                                            <button className="twlo-btn feedback-submit-btn">Send your
                                                suggestions
                                            </button>
                                            <div className="feedback-footer">
                                                <div className="rc-anchor-pt">
                                                    Protected by reCAPTCHA – <a
                                                   >Privacy</a><span aria-hidden="true"
                                                                                     role="presentation"> - </span><a
                                                    >Terms</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <article className="docs-article docs-prose">
                                <header>
                                    <h1 className="docs-article__title">
                                        Sync REST: Sync Services
                                    </h1>
                                </header>
                                <section>
                                    <div className="markdown">
                                        <p>A Service is the top-level scope of all other resources in the REST API. It
                                            is
                                            fundamentally a container for the objects in a Sync application. Services
                                            allow
                                            you to:</p>
                                        <ul className="docs-article__list">
                                            <li>Create multiple environments (dev, stage, prod) under the same Twilio
                                                account with segregated data
                                            </li>
                                            <li>Scope access to resources through the REST API</li>
                                            <li>Configure behavior of those resources in the scope of a Service</li>
                                        </ul>
                                        <h3 className="docs-article__section-title" id="example-1">
                                            <a
                                            className="toclink"
                                            onClick={()=>{
                                                this.scrollTo("example-1")
                                            }}>Example</a>
                                        </h3>

                                        <div className="codehilite">
                                            <pre className="twlo-code">
                                                <span className="code-line">
                                                    <span className="p">{`{`}</span>
                                                        </span>
                                                        <span className="code-line">
                                                        <span className="nt">
                                                        "links"
                                                        </span>
                                                        <span className="p">:</span>
                                                        <span className="p">{`{`}</span>
                                                            </span>
                                                            <span className="code-line">
                                                            <span className="nt">"maps"</span>
                                                            <span className="p">:</span>
                                                            <span className="s2">
                                                            "https://sync.twilio.com/v1/Services/ISxx/Maps"
                                                            </span>
                                                            <span className="p">,</span>
                                                            </span>
                                                            <span className="code-line">
                                                            <span
                                                            className="nt">"documents"</span><span className="p">:</span> <span
                                                            className="s2">"https://sync.twilio.com/v1/Services/ISxx/Documents"</span><span
                                                            className="p">,</span>
                                                            </span><span className="code-line">    <span
                                                            className="nt">"lists"</span><span className="p">:</span> <span
                                                            className="s2">"https://sync.twilio.com/v1/Services/ISxx/Lists"</span>
                                                            </span><span className="code-line">  <span className="p">},</span>
                                                        </span><span className="code-line">  <span
                                                        className="nt">"date_updated"</span><span className="p">:</span> <span
                                                        className="s2">"2022-06-08T10:24:53Z"</span><span className="p">,</span>
                                                        </span><span className="code-line">  <span className="nt">"friendly_name"</span><span
                                                        className="p">:</span> <span
                                                        className="s2">"sample_sync_instance"</span><span className="p">,</span>
                                                        </span><span className="code-line">  <span
                                                        className="nt">"account_sid"</span><span className="p">:</span> <span
                                                        className="s2">"ACxx"</span><span className="p">,</span>
                                                        </span><span className="code-line">  <span className="nt">"url"</span><span
                                                        className="p">:</span> <span className="s2">"https://sync.twilio.com/v1/Services/ISxx"</span><span
                                                        className="p">,</span>
                                                        </span><span className="code-line">  <span className="nt">"reachability_webhooks_enabled"</span><span
                                                        className="p">:</span> <span className="kc">false</span><span
                                                        className="p">,</span>
                                                        </span><span className="code-line">  <span className="nt">"sid"</span><span
                                                        className="p">:</span> <span className="s2">"ISxx"</span><span
                                                        className="p">,</span>
                                                        </span><span className="code-line">  <span
                                                        className="nt">"date_created"</span><span className="p">:</span> <span
                                                        className="s2">"2022-06-08T10:21:13Z"</span><span className="p">,</span>
                                                        </span><span className="code-line">  <span
                                                        className="nt">"webhook_url"</span><span className="p">:</span> <span
                                                        className="s2">"http://example.com/"</span><span className="p">,</span>
                                                        </span><span className="code-line">  <span
                                                        className="nt">"acl_enabled"</span><span className="p">:</span> <span
                                                        className="s2">"true"</span>
                                                        </span><span className="code-line"><span className="p">}</span>
</span>
                                            </pre>
                                        </div>
                                        <h3 className="docs-article__section-title" id="actions">
                                            <a
                                                className="toclink"
                                                onClick={()=>this.scrollTo("actions")}

                                            >Actions</a>
                                        </h3>
                                        <ul className="docs-article__list">
                                            <li><a onClick={()=>this.scrollTo("list-all-services")}>11111111</a></li>
                                            <li><a onClick={()=>{
                                                this.scrollTo("create-a-service")
                                            }}>Create a Service</a></li>
                                            <li><a onClick={()=>{
                                            }} >Retrieve a Service</a></li>
                                            <li><a onClick={()=>{
                                                this.scrollTo("update-a-service")
                                            }} >Update a Service</a></li>
                                            <li><a onClick={()=>{
                                                this.scrollTo("delete-a-service")
                                            }} >Delete a Service</a></li>
                                        </ul>
                                        <hr/>
                                        <h2 className="docs-article__section-title" id="list-all-services">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("list-all-services")
                                                }}
                                            >
                                                List All Services</a></h2>
                                        <pre className="twlo-code">GET /v1/Services</pre>
                                    </div>
                                </section>
                                <section>
                                    <div className="code-sample active" data-title="List Services"
                                         id="code-list-services">
                                        <div className="inline-mode">
                                            <div className="twlo-code code-rail" id="coderail">
                                                <div className="rail-placeholder"></div>
                                                <header className="twlo-code-header rail-title">
                                                    <a
                                                        className="twlo-code-header__title"
                                                        onClick={()=>{
                                                            this.scrollTo("linkcode")
                                                        }}>
                                                        <div className="twlo-code-header__title-inner">List Services
                                                        </div>
                                                        <div className="twlo-code-header__title-loading"></div>
                                                    </a>
                                                    <div className="twlo-code-header__actions">
                                                        <ul className="twlo-code-header__languages">
                                                            <li className="twlo-code-header__language">Node.js</li>
                                                            <li className="twlo-code-header__language">C#</li>
                                                            <li className="twlo-code-header__language">PHP</li>
                                                            <li className="twlo-code-header__language">Ruby</li>
                                                            <li className="twlo-code-header__language">Python</li>
                                                            <li className="twlo-code-header__language">Java</li>
                                                            <li className="twlo-code-header__language is-selected">
                                                                curl
                                                            </li>
                                                        </ul>
                                                        <ul className="twlo-code-header__versions">
                                                            <li className="twlo-code-header__version is-selected">json
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </header>
                                                <div className="twlo-code__sample">
                                                    <pre className="twlo-code__snippet line-numbers">
                                                        <div className="codehilite notranslate language-curl"
                                                             style={{position: "relative"}}>
                                                            <span className="code-line">
                                                                curl -X GET 'https://sync.twilio.com/v1/Services'
                                                                \<br/>
                                                            </span>
                                                            <span className="code-line">
                                                                -uACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token
                                                                <br/>
                                                            </span>
                                                            <span className="line-numbers-rows">
                                                                <span></span>
                                                                <span></span>
                                                            </span>
                                                        </div>
                                                    </pre>
                                                    <div className="docs-coderail__show_output">
                                                        <a className="docs-coderail__show_output-link" >Show
                                                            Output</a>
                                                    </div>
                                                </div>
                                                <div className="twlo-code__info" data-id="code-list-services"></div>
                                            </div>
                                            <div className="rail-caption">
                                            </div>
                                        </div>
                                        <div className="button-mode">
                                            <div className="docs-article__code-cta cursor-hover">
                                                <div className="docs-article__code-cta-cursor-wrap">
                                                    <div className="docs-article__code-cta-cursor"></div>
                                                </div>
                                                <div className="docs-article__code-cta-body">
                                                    <h4 className="docs-article__code-cta-title">
                                                        <a >List Services</a>
                                                    </h4>
                                                </div>
                                                <div className="docs-article__code-cta-arrow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="markdown">
                                        <hr/>
                                        <h2 className="docs-article__section-title" id="create-a-service">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("create-a-service")
                                                }}>Create a Service</a></h2>
                                        <pre className="notranslate http-request twlo-code">POST /v1/Services
</pre>
                                        <h3 className="docs-article__section-title" id="parameters-1">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("parameters-1")
                                                }}
                                            >Parameters</a>
                                        </h3>
                                    </div>
                                </section>
                                <section>
                                    <table className="docs-api-table" id="sync_v1_service">
                                        <tbody>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">AclEnabled</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">boolean</span>
                                                    <a className="docs-api-tag">Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p><code>true</code> or <code>false</code> - determines whether
                                                token
                                                identities must be granted access to Sync objects via the
                                                <a>Permissions
                                                    API</a> in this Service.</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">FriendlyName</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">string</span>
                                                    <a className="docs-api-tag">Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p>Human-readable name for this service instance</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">ReachabilityWebhooksEnabled</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">boolean</span>
                                                    <a className="docs-api-tag">Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p><code>true</code> or <code>false</code> - controls whether this
                                                instance fires webhooks when client endpoints connect to Sync Defaults
                                                to
                                                false.</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">WebhookUrl</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">url</span>
                                                    <a className="docs-api-tag">Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p>A URL that will receive event updates when objects are
                                                manipulated.</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </section>
                                <section>
                                    <div className="markdown">
                                        <h3 className="docs-article__section-title" id="example-1">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("example-1")
                                                }}>Example
                                            1</a></h3>
                                    </div>
                                </section>
                                <section>
                                    <div className="code-sample" data-title="Create a Service"
                                         id="code-create-a-service">
                                        <div className="inline-mode">
                                            <div className="twlo-code code-rail" id="coderail">
                                                <div className="rail-placeholder"></div>
                                                <header className="twlo-code-header rail-title">
                                                    <a
                                                        className="twlo-code-header__title"
                                                        onClick={()=>{
                                                            this.scrollTo("linkcode")
                                                        }}>
                                                        <div className="twlo-code-header__title-inner">Create a Service
                                                        </div>
                                                        <div className="twlo-code-header__title-loading"></div>
                                                    </a>
                                                    <div className="twlo-code-header__actions">
                                                        <ul className="twlo-code-header__languages">
                                                            <li className="twlo-code-header__language">Node.js</li>
                                                            <li className="twlo-code-header__language">C#</li>
                                                            <li className="twlo-code-header__language">PHP</li>
                                                            <li className="twlo-code-header__language">Ruby</li>
                                                            <li className="twlo-code-header__language">Python</li>
                                                            <li className="twlo-code-header__language">Java</li>
                                                            <li className="twlo-code-header__language is-selected">
                                                                curl
                                                            </li>
                                                        </ul>
                                                        <ul className="twlo-code-header__versions">
                                                            <li className="twlo-code-header__version is-selected">json
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </header>
                                                <div className="twlo-code__sample">
                                                    <pre className="twlo-code__snippet line-numbers">
                                                        <div className="codehilite notranslate language-curl"
                                                             style={{position: "relative"}}>
                                                            <span
                                                                className="code-line">curl -X POST https://sync.twilio.com/v1/Services \<br/></span><span
                                                            className="code-line">--data-urlencode "FriendlyName=MySyncServiceInstance" \<br/></span><span
                                                            className="code-line">-u ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token<br/></span><span
                                                            className="line-numbers-rows"><span></span><span></span><span></span></span></div></pre>
                                                    <div className="docs-coderail__show_output">
                                                        <a className="docs-coderail__show_output-link" >Show
                                                            Output</a>
                                                    </div>
                                                </div>
                                                <div className="twlo-code__info" data-id="code-create-a-service"></div>
                                            </div>
                                            <div className="rail-caption">
                                            </div>
                                        </div>
                                        <div className="button-mode">
                                            <div className="docs-article__code-cta cursor-hover">
                                                <div className="docs-article__code-cta-cursor-wrap">
                                                    <div className="docs-article__code-cta-cursor"></div>
                                                </div>
                                                <div className="docs-article__code-cta-body">
                                                    <h4 className="docs-article__code-cta-title">
                                                        <a >Create a Service</a>
                                                    </h4>
                                                </div>
                                                <div className="docs-article__code-cta-arrow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="markdown">
                                        <h3 className="docs-article__section-title" id="example-2">
                                            <a
                                            className="toclink"
                                            onClick={()=>{
                                                this.scrollTo("example-2")
                                            }}
                                            >Example
                                            2</a></h3>
                                    </div>
                                </section>
                                <section>
                                    <div className="code-sample" data-title="Create a Service with a Webhook URL"
                                         id="code-create-a-service-with-a-webhook-url">
                                        <div className="inline-mode">
                                            <div className="twlo-code code-rail" id="coderail">
                                                <div className="rail-placeholder"></div>
                                                <header className="twlo-code-header rail-title">
                                                    <a
                                                        className="twlo-code-header__title"
                                                        onClick={()=>{
                                                            this.scrollTo("linkcode")
                                                        }}
                                                    >
                                                        <div className="twlo-code-header__title-inner">Create a Service
                                                            with
                                                            a Webhook URL
                                                        </div>
                                                        <div className="twlo-code-header__title-loading"></div>
                                                    </a>
                                                    <div className="twlo-code-header__actions">
                                                        <ul className="twlo-code-header__languages">
                                                            <li className="twlo-code-header__language">Node.js</li>
                                                            <li className="twlo-code-header__language">C#</li>
                                                            <li className="twlo-code-header__language">PHP</li>
                                                            <li className="twlo-code-header__language">Ruby</li>
                                                            <li className="twlo-code-header__language">Python</li>
                                                            <li className="twlo-code-header__language">Java</li>
                                                            <li className="twlo-code-header__language is-selected">
                                                                curl
                                                            </li>
                                                        </ul>
                                                        <ul className="twlo-code-header__versions">
                                                            <li className="twlo-code-header__version is-selected">json
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </header>
                                                <div className="twlo-code__sample">
                                                    <pre className="twlo-code__snippet line-numbers"><div
                                                        className="codehilite notranslate language-curl"
                                                        style={{position: "relative"}}><span
                                                        className="code-line">curl -X POST https://sync.twilio.com/v1/Services \<br/></span><span
                                                        className="code-line">--data-urlencode "FriendlyName=MySyncServiceInstance" \<br/></span><span
                                                        className="code-line">--data-urlencode "WebhookUrl=https://example.com/sync" \<br/></span><span
                                                        className="code-line">-u ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token<br/></span><span
                                                        className="line-numbers-rows"><span></span><span></span><span></span><span></span></span></div></pre>
                                                    <div className="docs-coderail__show_output">
                                                        <a className="docs-coderail__show_output-link" >Show
                                                            Output</a>
                                                    </div>
                                                </div>
                                                <div className="twlo-code__info"
                                                     data-id="code-create-a-service-with-a-webhook-url"></div>
                                            </div>
                                            <div className="rail-caption">
                                            </div>
                                        </div>
                                        <div className="button-mode">
                                            <div className="docs-article__code-cta cursor-hover">
                                                <div className="docs-article__code-cta-cursor-wrap">
                                                    <div className="docs-article__code-cta-cursor"></div>
                                                </div>
                                                <div className="docs-article__code-cta-body">
                                                    <h4 className="docs-article__code-cta-title">
                                                        <a >Create a Service with a Webhook URL</a>
                                                    </h4>
                                                </div>
                                                <div className="docs-article__code-cta-arrow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="markdown">
                                        <hr/>
                                        <h2 className="docs-article__section-title" id="retrieve-a-service">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("retrieve-a-service")
                                                }}
                                            >Retrieve a Service</a></h2>
                                        <pre className="notranslate http-request twlo-code">GET /v1/Services/ISxx
</pre>
                                        <h3 className="docs-article__section-title" id="example-2">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                this.scrollTo("example-2")
                                            }}
                                               >Example</a></h3>
                                    </div>
                                </section>
                                <section>
                                    <div className="code-sample" data-title="Retrieve a Service"
                                         id="code-retrieve-a-service">
                                        <div className="inline-mode">
                                            <div className="twlo-code code-rail" id="coderail">
                                                <div className="rail-placeholder"></div>
                                                <header className="twlo-code-header rail-title">
                                                    <a
                                                        className="twlo-code-header__title"
                                                        onClick={()=>{
                                                            this.scrollTo("linkcode")
                                                        }} >
                                                        <div className="twlo-code-header__title-inner">Retrieve a
                                                            Service
                                                        </div>
                                                        <div className="twlo-code-header__title-loading"></div>
                                                    </a>
                                                    <div className="twlo-code-header__actions">
                                                        <ul className="twlo-code-header__languages">
                                                            <li className="twlo-code-header__language">Node.js</li>
                                                            <li className="twlo-code-header__language">C#</li>
                                                            <li className="twlo-code-header__language">PHP</li>
                                                            <li className="twlo-code-header__language">Ruby</li>
                                                            <li className="twlo-code-header__language">Python</li>
                                                            <li className="twlo-code-header__language">Java</li>
                                                            <li className="twlo-code-header__language is-selected">
                                                                curl
                                                            </li>
                                                        </ul>
                                                        <ul className="twlo-code-header__versions">
                                                            <li className="twlo-code-header__version is-selected">json
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </header>
                                                <div className="twlo-code__sample">
                                                    <pre className="twlo-code__snippet line-numbers"><div
                                                        className="codehilite notranslate language-curl"
                                                        style={{position: "relative"}}><span
                                                        className="code-line">curl -X GET 'https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' \<br/></span><span
                                                        className="code-line">-u ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token<br/></span><span
                                                        className="line-numbers-rows"><span></span><span></span></span></div></pre>
                                                    <div className="docs-coderail__show_output">
                                                        <a className="docs-coderail__show_output-link" >Show
                                                            Output</a>
                                                    </div>
                                                </div>
                                                <div className="twlo-code__info"
                                                     data-id="code-retrieve-a-service"></div>
                                            </div>
                                            <div className="rail-caption">
                                            </div>
                                        </div>
                                        <div className="button-mode">
                                            <div className="docs-article__code-cta cursor-hover">
                                                <div className="docs-article__code-cta-cursor-wrap">
                                                    <div className="docs-article__code-cta-cursor"></div>
                                                </div>
                                                <div className="docs-article__code-cta-body">
                                                    <h4 className="docs-article__code-cta-title">
                                                        <a >Retrieve a Service</a>
                                                    </h4>
                                                </div>
                                                <div className="docs-article__code-cta-arrow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="markdown">
                                        <hr/>
                                        <h2 className="docs-article__section-title" id="update-a-service">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                this.scrollTo("update-a-service")
                                            }}>Update a Service</a></h2>
                                        <pre className="notranslate http-request twlo-code">POST /v1/Services/ISxx
</pre>
                                        <h3 className="docs-article__section-title" id="parameters-2">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("parameters-2")
                                                }}
                                            >Parameters</a></h3>
                                    </div>
                                </section>
                                <section>
                                    <table className="docs-api-table" id="sync_v1_service">
                                        <tbody>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">AclEnabled</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">boolean</span>
                                                    <a className="docs-api-tag"
                                                       >Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p><code>true</code> or <code>false</code> - determines whether
                                                token
                                                identities must be granted access to Sync objects via the <a>Permissions
                                                    API</a> in this Service.</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">FriendlyName</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">string</span>
                                                    <a className="docs-api-tag">Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p>Human-readable name for this service instance</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">ReachabilityWebhooksEnabled</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">boolean</span>
                                                    <a className="docs-api-tag">Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p>True or false - controls whether this instance fires webhooks
                                                when
                                                client endpoints connect to Sync Defaults to false.</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="docs-api-table__param">
                                                <code className="docs-api-param-name notranslate">WebhookUrl</code>
                                                <div className="docs-api-param-label">Optional</div>
                                            </td>
                                            <td>
                                                <div className="docs-api-tags">
                                                    <span className="docs-api-tag docs-api-tag--post">post</span>
                                                    <span className="docs-api-tag docs-api-tag--type">url</span>
                                                    <a className="docs-api-tag">Not
                                                        PII</a>
                                                </div>
                                                <p className="docs-api-description">
                                                </p><p>A URL that will receive event updates when objects are
                                                manipulated.</p>
                                                <p></p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </section>
                                <section>
                                    <div className="markdown">
                                        <h3 className="docs-article__section-title" id="example-3">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("parameters-3")
                                                }}>Example</a>
                                        </h3>
                                    </div>
                                </section>
                                <section>
                                    <div className="code-sample" data-title="Update a Service"
                                         id="code-update-a-service">
                                        <div className="inline-mode">
                                            <div className="twlo-code code-rail" id="coderail">
                                                <div className="rail-placeholder"></div>
                                                <header className="twlo-code-header rail-title">
                                                    <a
                                                        className="twlo-code-header__title"
                                                        onClick={()=>{
                                                            this.scrollTo("linkcode")
                                                        }}
                                                    >
                                                        <div className="twlo-code-header__title-inner">Update a Service
                                                        </div>
                                                        <div className="twlo-code-header__title-loading"></div>
                                                    </a>
                                                    <div className="twlo-code-header__actions">
                                                        <ul className="twlo-code-header__languages">
                                                            <li className="twlo-code-header__language">Node.js</li>
                                                            <li className="twlo-code-header__language">C#</li>
                                                            <li className="twlo-code-header__language">PHP</li>
                                                            <li className="twlo-code-header__language">Ruby</li>
                                                            <li className="twlo-code-header__language">Python</li>
                                                            <li className="twlo-code-header__language">Java</li>
                                                            <li className="twlo-code-header__language is-selected">
                                                                curl
                                                            </li>
                                                        </ul>
                                                        <ul className="twlo-code-header__versions">
                                                            <li className="twlo-code-header__version is-selected">json
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </header>
                                                <div className="twlo-code__sample">
                                                    <pre className="twlo-code__snippet line-numbers">
                                                        <div className="codehilite notranslate language-curl"
                                                             style={{position: "relative"}}>
                                                            <span className="code-line">
                                                                curl -X POST https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \


                                                                <br/>
                                                            </span>
                                                            <span className="code-line">
                                                                --data-urlencode "FriendlyName=NEW_FRIENDLY_NAME" \
                                                                <br/>
                                                            </span>
                                                            <span className="code-line">
                                                                -u ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token
                                                                <br/>
                                                            </span>
                                                            <span className="line-numbers-rows">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </span>
                                                        </div>
                                                    </pre>
                                                    <div className="docs-coderail__show_output">
                                                        <a className="docs-coderail__show_output-link" >Show
                                                            Output</a>
                                                    </div>
                                                </div>
                                                <div className="twlo-code__info" data-id="code-update-a-service"></div>
                                            </div>
                                            <div className="rail-caption">
                                            </div>
                                        </div>
                                        <div className="button-mode">
                                            <div className="docs-article__code-cta cursor-hover">
                                                <div className="docs-article__code-cta-cursor-wrap">
                                                    <div className="docs-article__code-cta-cursor"></div>
                                                </div>
                                                <div className="docs-article__code-cta-body">
                                                    <h4 className="docs-article__code-cta-title">
                                                        <a >Update a Service</a>
                                                    </h4>
                                                </div>
                                                <div className="docs-article__code-cta-arrow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="markdown">
                                        <hr/>
                                        <h2 className="docs-article__section-title" id="delete-a-service">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                    this.scrollTo("delete-a-service")
                                                }}>Delete A Service</a></h2>
                                        <pre className="notranslate http-request twlo-code">DELETE /v1/Services/ISxx
</pre>
                                        <h3 className="docs-article__section-title" id="example-4">
                                            <a
                                                className="toclink"
                                                onClick={()=>{
                                                   this.scrollTo("example-4")
                                               }}>Example</a></h3>
                                    </div>
                                </section>
                                <section>
                                    <div className="code-sample" data-title="Delete a Service"
                                         id="code-delete-a-service">
                                        <div className="inline-mode">
                                            <div className="twlo-code code-rail" id="coderail">
                                                <div className="rail-placeholder"></div>
                                                <header className="twlo-code-header rail-title">
                                                    <a
                                                        className="twlo-code-header__title"
                                                        onClick={()=>{
                                                            this.scrollTo("linkcode")
                                                        }}>
                                                        <div className="twlo-code-header__title-inner">Delete a Service
                                                        </div>
                                                        <div className="twlo-code-header__title-loading"></div>
                                                    </a>
                                                    <div className="twlo-code-header__actions">
                                                        <ul className="twlo-code-header__languages">
                                                            <li className="twlo-code-header__language">Node.js</li>
                                                            <li className="twlo-code-header__language">C#</li>
                                                            <li className="twlo-code-header__language">PHP</li>
                                                            <li className="twlo-code-header__language">Ruby</li>
                                                            <li className="twlo-code-header__language">Python</li>
                                                            <li className="twlo-code-header__language">Java</li>
                                                            <li className="twlo-code-header__language is-selected">
                                                                curl
                                                            </li>
                                                        </ul>
                                                        <ul className="twlo-code-header__versions">
                                                            <li className="twlo-code-header__version is-selected">json
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </header>
                                                <div className="twlo-code__sample">
                                                    <pre className="twlo-code__snippet line-numbers">
                                                        <div className="codehilite notranslate language-curl"
                                                             style={{position: "relative"}}>
                                                            <span className="code-line">
                                                                curl -X DELETE https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \
                                                                <br/>
                                                            </span>
                                                            <span className="code-line">
                                                                -u ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token<br/>
                                                            </span>
                                                            <span className="line-numbers-rows">
                                                                <span></span>
                                                                <span></span>
                                                            </span>
                                                        </div>
                                                    </pre>
                                                    <div className="docs-coderail__show_output">
                                                    </div>
                                                </div>
                                                <div className="twlo-code__info" data-id="code-delete-a-service"></div>
                                            </div>
                                            <div className="rail-caption">
                                            </div>
                                        </div>
                                        <div className="button-mode">
                                            <div className="docs-article__code-cta cursor-hover">
                                                <div className="docs-article__code-cta-cursor-wrap">
                                                    <div className="docs-article__code-cta-cursor"></div>
                                                </div>
                                                <div className="docs-article__code-cta-body">
                                                    <h4 className="docs-article__code-cta-title">
                                                        <a >Delete a Service</a>
                                                    </h4>
                                                </div>
                                                <div className="docs-article__code-cta-arrow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="docs-help">
                                        <h4 className="docs-help__title">Need some help?</h4>
                                        <p className="docs-help__body">
                                            We all do sometimes; code is hard. Get help now from our
                                            <a >support team</a>, or lean on
                                            the wisdom of the crowd browsing the
                                            <a >Twilio tag</a>
                                            on Stack Overflow.</p>
                                    </div>
                                </section>
                                <footer className="docs-article-footer">
                                    <ul className="docs-article-footer__list">
                                        <li className="docs-article-footer__list-item">
                                            <a className="docs-article-footer__link" >Terms of
                                                Service</a>
                                        </li>
                                        <li className="docs-article-footer__list-item">
                                            <a className="docs-article-footer__link" >Privacy
                                                Policy</a>
                                        </li>
                                        <li className="docs-article-footer__list-item">Copyright © 2018 Twilio, Inc.
                                        </li>
                                    </ul>
                                </footer>
                            </article>
                        </div>
                        <div className="twlo-code code-rail docs-coderail docs-layout-column" data-column-mode="true"
                             id="coderail" style={{height: "670px"}}>
                            <div className="rail-placeholder"></div>
                            <header className="twlo-code-header rail-title">
                                <a
                                    className="twlo-code-header__title"
                                    onClick={()=>{
                                        this.scrollTo("linkcode")
                                    }}>
                                    <div className="twlo-code-header__title-inner">List Services</div>
                                    <div className="twlo-code-header__title-loading"></div>
                                </a>
                                <div className="twlo-code-header__actions">
                                    <ul className="twlo-code-header__languages">
                                        <li className="twlo-code-header__language">Node.js</li>
                                        <li className="twlo-code-header__language">C#</li>
                                        <li className="twlo-code-header__language">PHP</li>
                                        <li className="twlo-code-header__language">Ruby</li>
                                        <li className="twlo-code-header__language">Python</li>
                                        <li className="twlo-code-header__language">Java</li>
                                        <li className="twlo-code-header__language is-selected">curl</li>
                                    </ul>
                                    <ul className="twlo-code-header__versions">
                                        <li className="twlo-code-header__version is-selected">json</li>
                                    </ul>
                                </div>
                            </header>
                            <RightCode/>

                        </div>
                    </main>
                </div>


            </div>

        )
    }
}
// // 映射Redux state到组件的属性
// function mapStateToProps(state) {
//     // console.log(state)
//     return {
//
//         isLogin:state
//     }
// }
//
// //映射Redux actions到组件的属性
// function mapDispatchToProps(dispatch) {
//     return {
//         loginFun: (args, cb) => dispatch(loginFun(args, cb)),
//
//     }
// }

//连接组件
export default Login