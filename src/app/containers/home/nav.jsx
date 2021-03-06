import React, {Component} from 'react';
import {Link} from 'react-router';
import {Modal, Button, Row, Col, Input, Form, Icon} from 'antd';
import {connect} from 'react-redux';
import {loginFetch, loginOut} from '../../actions/loginApi';
import Register from "../register/register"
const FormItem = Form.Item;
class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalVisible: false,
      isLogin:false
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      isLogin:!!window.sessionStorage.getItem("Authorization")
    });
  }
  // 登录
  handle_login_btn = _type => {
    if (!this.state.isLogin) {
      this.setState({loginModalVisible: true});
    } else {
      this.props.loginOut({
        url: 'api/v1/user',
      },()=>{

        this.setState({
          isLogin:!!window.sessionStorage.getItem("Authorization")
        },()=>{
          // console.log(this.state.isLogin)
        });
      });
    }
  };

  // 登录提交
  handle_submit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const _object = {
          url: 'api/v1/user',
          ...values,
        };
        this.props.loginFetch(_object,()=>{
          // console.log(123)
          this.props.form.resetFields();

          this.setState({
            loginModalVisible: false,
            isLogin:!!window.sessionStorage.getItem("Authorization")
          });
        });

      }
    });
  };
  // 返回
  handle_cancle = () => {
    this.setState({
      loginModalVisible: false,
      registerModalVisible: false,
    });
  };
  register=()=>{

    console.log( this.child);
    this.child.register()
  };
  onRef = (ref) => {
    this.child = ref
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <nav className="nav">
        <div className="nav-body">
          <span className="logo_name">
            <Link to="/">
              <img
                className="nav-logo"
                src={require('./img/logowithtext.png')}
                alt="logo of Zukdoor Inc."
              />
            </Link>
          </span>

          <ul className="nav-menu">
            <li className="nav-menu__item">
              <a>Products</a>
              <div className="nav-menu__dropdown">
                <ul className="nav-menu__dropdown-wrapper">
                  <li className="nav-menu__dropdown-body">
                    <ul className="nav-menu__dropdown-body__list nav-menu__dropdown-body__list--products">
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--flex-ga nav-menu__dropdown-body__list-item__icon--product"/>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Zukdoor Flex
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            The cloud contact center platform
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--sms nav-menu__dropdown-body__list-item__icon--product">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15.2"
                              height="13.1"
                              viewBox="0 0 15.2 13.1"
                            />
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Programmable SMS
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Send &amp; receive text messages
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--voice nav-menu__dropdown-body__list-item__icon--product">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.8"
                              height="16.1"
                              viewBox="0 0 16.8 16.1"
                            />
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Programmable Voice
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Control &amp; orchestrate phone calls
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--video nav-menu__dropdown-body__list-item__icon--product">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15.1"
                              height="11.8"
                              viewBox="-141 49.9 15.1 11.8"
                            />
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Programmable Video
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Embed live video &amp; audio into your apps
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--authy nav-menu__dropdown-body__list-item__icon--product">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 31.17 23.82"
                            >
                              <title>icon-nav--product-authy</title>
                            </svg>
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Authy
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Login security for online accounts and transactions
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--sip-trunking nav-menu__dropdown-body__list-item__icon--product">
                            <svg
                              enableBackground="new 0 0 32 32"
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g fill="#0d122b"/>
                            </svg>
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Zukdoor API for WhatsApp
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            WhatsApp messaging powered by the Zukdoor API
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--wireless nav-menu__dropdown-body__list-item__icon--product">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="39.6"
                              height="39"
                              viewBox="107.2 35 39.6 39"
                            >
                              <g fill="#008CFF"/>
                            </svg>
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Programmable Wireless
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Connect IoT devices to global cellular networks
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-link">
                          See all products
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-menu__item">
              <a>Solutions</a>
              <div className="nav-menu__dropdown">
                <ul className="nav-menu__dropdown-wrapper">
                  <li className="nav-menu__dropdown-header">
                    <header className="nav-menu__dropdown-body__header nav-menu__dropdown-body__header--engagement">
                      Explore
                    </header>
                    <ul className="nav-menu__dropdown-body__list">
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Introducing the Engagement Cloud
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            API platforms for the entire customer journey
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-menu__dropdown-body">
                    <ul className="nav-menu__dropdown-body__list">
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Contact Center
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Create a completely flexible contact center platform
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Account Security
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Protect your web &amp; mobile apps from fraud and
                            account takeover
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Text Marketing
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Reach, convert, and retain users through the right
                            channels
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Collaboration
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Build apps to connect and make teams more productive
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-link">
                          See all solutions
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-menu__item">
              <Link to="/docs">文档</Link>
              <div className="nav-menu__dropdown">
                <ul className="nav-menu__dropdown-wrapper">
                  <li className="nav-menu__dropdown-body">
                    <ul className="nav-menu__dropdown-body__list">
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            API Reference
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Full endpoint documentation for all products
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Quickstarts
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Get to “Ahoy, World!” fast in your language or stack
                          </div>
                        </a>
                      </li>
                    </ul>
                    <hr className="nav-menu__dropdown-body__separator"/>
                    <ul className="nav-menu__dropdown-body__list">
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            API Status
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Live uptime monitoring of the API and all services
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Blog
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Community projects and Zukdoor updates
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <div className="nav-menu__dropdown-body__list-item__title">
                            TwilioQuest
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Learn Zukdoor on an interactive, self-paced 8-bit
                            adventure
                          </div>
                        </a>
                      </li>
                    </ul>
                    <hr className="nav-menu__dropdown-body__separator"/>
                    <header className="nav-menu__dropdown-body__header">
                      Tools
                    </header>
                    <ul className="nav-menu__dropdown-body__list nav-menu__dropdown-body__list--products">
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--runtime nav-menu__dropdown-body__list-item__icon--tool">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="14.8"
                              viewBox="0 0 16 14.8"
                            />
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Functions
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Serverless hosting for your communications code
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-item">
                          <aside
                            className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--studio nav-menu__dropdown-body__list-item__icon--studio">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="16"
                              viewBox="0 0 15 16"
                            />
                          </aside>
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Zukdoor Studio
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Visual editor for building Zukdoor apps
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-menu__item">
              <a> Customer Stories</a>
              <div className="nav-menu__dropdown">
                <ul className="nav-menu__dropdown-wrapper">
                  <li className="nav-menu__dropdown-body">
                    <ul className="nav-menu__dropdown-body__list">
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Customer Stories"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Technology
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            <b>Netflix</b> and <b>Salesforce</b> build seamless
                            customer interaction experiences
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Global coverage"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            On-demand Services
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            <b>Airbnb</b>, <b>Lyft</b>, and <b>Instacart</b>{' '}
                            build the on-demand economy
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Security"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Financial Services
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            <b>ING</b>
                            and <b>Xoom</b> invest in innovation
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Security"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Retail
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            <b>Nordstrom</b>
                            and <b>eBay</b> engage with shoppers
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Security"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Healthcare
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            <b>Doctor on Demand</b> and{' '}
                            <b>Parkinson's Voice Initiative</b> are transforming
                            care
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Security"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Real Estate
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            <b>Trulia</b> and <b>Apartment List</b> help clients
                            find a perfect home
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="nav-menu__dropdown-body__list-link">
                          See all Customer Stories
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-menu__item">
              <Link to="/resour">资源管理</Link>
              {/*<a >Partners</a>*/}
              <div className="nav-menu__dropdown">
                <ul className="nav-menu__dropdown-wrapper">
                  <li className="nav-menu__dropdown-body">
                    <ul className="nav-menu__dropdown-body__list">
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Become a Partner"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Find a Partner
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            Browse and connect with our growing ecosystem of
                            Zukdoor technology and consulting partners
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-menu__dropdown-body__list-item"
                          title="Find a partner"
                        >
                          <div className="nav-menu__dropdown-body__list-item__title">
                            Become a Partner
                          </div>
                          <div className="nav-menu__dropdown-body__list-item__description">
                            We’re here to help you plan, develop, and grow a
                            successful business with Zukdoor
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-menu__item">
              <Link to="/monitor">监控页面</Link>
            </li>
          </ul>
          <ul className="nav-ctas">
            <li className="nav-cta">
              <a className="nav-cta__button nav-cta__button--default">
                Talk to an expert
              </a>
            </li>
            <li className="nav-cta">
              <a className="nav-cta__button nav-cta__button--action" onClick={this.register}>注册</a>
            </li>
            <li className="nav-cta" role="nav-burger">
              <a className="nav-cta__button nav-cta__button--hamburger">Menu</a>
            </li>
          </ul>
          <header className="nav__header">
            <span className="nav__promotion">
              <div className="nav__promotion-item" role="promotion-item">
                <a>
                  SIGNAL 2018 IS A WRAP! WATCH THE DAY 1 &amp;DAY 2 KEYNOTES.
                </a>
              </div>
              <div
                className="nav__promotion-item visible"
                role="promotion-item"
              >
                <a>Zukdoor Autopilot Demo Webinar | Register now</a>
              </div>
            </span>
            <ul className="nav-submenu">
              <li className="nav-submenu__item">
                <a className="nav-submenu__link">Help</a>
                <div className="nav-submenu__dropdown">
                  <ul className="nav-submenu__list">
                    <li className="nav-submenu__list-item">
                      <a>Help Center</a>
                    </li>
                    <li className="nav-submenu__list-item">
                      <a>Talk to Support</a>
                    </li>
                    <li className="nav-submenu__list-item">
                      <a>Training</a>
                    </li>
                    <div className="nav-submenu__sales">
                      <hr />
                      <li className="nav-submenu__list-item">
                        <a>Talk to an expert</a>
                      </li>
                    </div>
                    <hr />
                    <li className="nav-submenu__list-item">
                      <a>Support Plans</a>
                    </li>
                    <li className="nav-submenu__list-item">
                      <a>Partner Solutions</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-submenu__item">
                <a
                  className="nav-submenu__link"
                  onClick={() => this.handle_login_btn(this.props.login_Type)}
                >
                  {this.state.isLogin ? '退出' : '登录'}
                </a>
              </li>
            </ul>
          </header>
          <div className="nav-mobile" style={{height: '236'}}>
            <button className="nav-mobile__close">
              <title>icon-close</title>
            </button>
            <div className="nav-mobile__wrapper">
              <ul className="nav-menu__dropdown-body__list nav-menu__dropdown-body__list--products">
                <li data-order="0">
                  <a className="nav-menu__dropdown-body__list-item">
                    <div className="nav-menu__dropdown-body__list-item__title">
                      Zukdoor Flex
                    </div>
                    <div className="nav-menu__dropdown-body__list-item__description">
                      The cloud contact center platform
                    </div>
                  </a>
                </li>
                <li data-order="0">
                  <a className="nav-menu__dropdown-body__list-item">
                    <aside
                      className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--sms nav-menu__dropdown-body__list-item__icon--product"/>
                    <div className="nav-menu__dropdown-body__list-item__title">
                      Programmable SMS
                    </div>
                    <div className="nav-menu__dropdown-body__list-item__description">
                      Send &amp; receive text messages
                    </div>
                  </a>
                </li>
                <li data-order="0">
                  <a className="nav-menu__dropdown-body__list-item">
                    <aside
                      className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--voice nav-menu__dropdown-body__list-item__icon--product"/>
                    <div className="nav-menu__dropdown-body__list-item__title">
                      Programmable Voice
                    </div>
                    <div className="nav-menu__dropdown-body__list-item__description">
                      Control &amp; orchestrate phone calls
                    </div>
                  </a>
                </li>
                <li data-order="0 1 2 3">
                  <a className="nav-menu__dropdown-body__list-item">
                    <aside
                      className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--video nav-menu__dropdown-body__list-item__icon--product"/>
                    <div className="nav-menu__dropdown-body__list-item__title">
                      Programmable Video
                    </div>
                    <div className="nav-menu__dropdown-body__list-item__description">
                      Embed live video &amp; audio into your apps
                    </div>
                  </a>
                </li>
                <li data-order="0 1 2 4">
                  <a className="nav-menu__dropdown-body__list-item">
                    <aside
                      className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--authy nav-menu__dropdown-body__list-item__icon--product"/>
                    <div className="nav-menu__dropdown-body__list-item__title">
                      Authy
                    </div>
                    <div className="nav-menu__dropdown-body__list-item__description">
                      Login security for online accounts and transactions
                    </div>
                  </a>
                </li>
                <li data-order="0 1 2">
                  <a className="nav-menu__dropdown-body__list-item">
                    <aside
                      className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--sip-trunking nav-menu__dropdown-body__list-item__icon--product"/>
                    <div className="nav-menu__dropdown-body__list-item__title">
                      Elastic SIP Trunking
                    </div>
                    <div className="nav-menu__dropdown-body__list-item__description">
                      Instantly provision global VoIP connectivity
                    </div>
                  </a>
                </li>
                <li data-order="0 1 2 3 4 5">
                  <a className="nav-menu__dropdown-body__list-item">
                    <aside
                      className="nav-menu__dropdown-body__list-item__icon nav-menu__dropdown-body__list-item__icon--wireless nav-menu__dropdown-body__list-item__icon--product"/>
                    <div className="nav-menu__dropdown-body__list-item__title">
                      Programmable Wireless
                    </div>
                    <div className="nav-menu__dropdown-body__list-item__description">
                      Connect IoT devices to global cellular networks
                    </div>
                  </a>
                </li>
                <li>
                  <a className="nav-menu__dropdown-body__list-link">
                    See all products
                  </a>
                </li>
              </ul>
              <hr className="nav-mobile__separator"/>
              <ul className="nav-mobile__list">
                <li>
                  <a className="nav-mobile__list-item" title="Solutions">
                    <div className="nav-mobile__list-item__title">
                      Solutions
                    </div>
                  </a>
                </li>
                <li>
                  <a className="nav-mobile__list-item" title="Docs &amp; Tools">
                    <div className="nav-mobile__list-item__title">
                      Docs &amp; Tools
                    </div>
                  </a>
                </li>
                <li>
                  <a className="nav-mobile__list-item" title="Why Zukdoor">
                    <div className="nav-mobile__list-item__title">
                      Customer Stories
                    </div>
                  </a>
                </li>
                <li>
                  <a className="nav-mobile__list-item" title="Partners">
                    <div className="nav-mobile__list-item__title">Partners</div>
                  </a>
                </li>
                <li>
                  <a className="nav-mobile__list-item" title="Pricing">
                    <div className="nav-mobile__list-item__title">Pricing</div>
                  </a>
                </li>
              </ul>
              <hr className="nav-mobile__separator"/>
              <div className="nav-mobile__ctas">
                <a className="nav-mobile__ctas__button nav-mobile__ctas__button--action">
                  Sign up
                </a>
                <a className="nav-mobile__ctas__button nav-mobile__ctas__button--action-secondary">
                  Log In
                </a>
                <a className="nav-mobile__ctas__button nav-mobile__ctas__button--default">
                  Talk to an expert
                </a>
              </div>
            </div>
          </div>
        </div>
        {/** 登录 **/}
        <Modal
          visible={this.state.loginModalVisible}
          title="用户登录"
          onOk={this.handleOk}
          onCancel={() => this.handle_cancle()}
          footer={null}
        >
          <Row>
            <Col>
              <Row>
                <Col className="loginForm">
                  <Form>
                    <Row style={{marginTop: '25px'}}>
                      <Col span={18} offset={2}>
                        <FormItem>
                          {getFieldDecorator('username', {
                            rules: [
                              {
                                required: true,
                                message: '请输入用户名!',
                              },
                            ],
                          })(
                            <Input
                              prefix={
                                <Icon
                                  type="user"
                                  style={{color: 'rgba(0,0,0,.25)'}}
                                />
                              }
                              placeholder="请输入用户名"
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={18} offset={2}>
                        <FormItem>
                          {getFieldDecorator('password', {
                            rules: [
                              {
                                required: true,
                                message: '请输入密码!',
                              },
                            ],
                          })(
                            <Input
                              prefix={
                                <Icon
                                  type="lock"
                                  style={{color: 'rgba(0,0,0,.25)'}}
                                />
                              }
                              type="password"
                              placeholder="请输入密码"
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={18} offset={2}>
                        <Button
                          type="primary"
                          style={{width: '100%', height: '32px'}}
                          onClick={() => this.handle_submit()}
                        >
                          登录
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal>

        <Register onRef={ this.onRef}/>

      </nav>
    );
  }
}

// 数据映射 state
const mapStateToProps = state => ({
  login_Type: state['loginApi']['login_Type'],
});

// 数据银蛇action
const mapDispatchToProps = dispatch => ({
  loginFetch: (iteminfo,cb) => dispatch(loginFetch(iteminfo,cb)),
  loginOut: (item,cb) => dispatch(loginOut(item,cb)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create()(Navs));
