import React, {PureComponent} from 'react';
import {Row, Col, Button, Input, Breadcrumb, Switch, Form, message} from 'antd';
import './css/index.css';
import {Link} from 'react-router';
import {
  startRecord,
  endRecord,
  startRtmp,
  endRtmp,
  pannelFun,
  playsFun,
} from '../../actions/record';
import {connect} from 'react-redux';
import RFB from '@novnc/novnc/core/rfb';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid} from 'recharts';

const data = [
  {name: '0', uv: 4000, pv: 9000},
  {name: '10', uv: 3000, pv: 7222},
  {name: '20', uv: 2000, pv: 6222},
  {name: '30', uv: 1223, pv: 5400},
  {name: '40', uv: 1890, pv: 3200},
  {name: '50', uv: 2390, pv: 2500},
  {name: '60', uv: 3490, pv: 1209},
];

const FormItem = Form.Item;
class Loadmore extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openVisible: true,
      isRtmp: true,
      dataSource: [],
      rtmpUrls: '1',
      isPannelOpen: true,
        pannelUrl:""
    };
    // this.myRef = React.createRef();
  }

  componentDidMount = () => {
    // this.props.form.setFieldsValue({
    //     rtmpUrl:window.location.href
    // })
  };
  //打开录制面板
  openPannel = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let params = {
          url: 'api/v1/vnc/pannel',
          recordUrl: values.recordUrl,
          recordName: 'qweqweq',
        };
        this.props.pannelFun(params, (data) => {
          console.log(this.props.pannelData.pannel.url)
            const rfb = new RFB(document.getElementById('screen'), this.props.pannelData.pannel.url,{
                // scaleViewport:true,
                // resizeSession:true,
                // dragViewport:true,
                // clipViewport:true
            });
            this.setState({
            isPannelOpen: !this.state.isPannelOpen,
              pannelUrl:this.props.pannelData.pannel.url

          });

        });
      }
    });
  };
  closePannel = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.state.openVisible && this.state.isRtmp) {
          let params = {
            url: 'api/v1/record/allsh',
            recordUrl: values.recordUrl,
            recordName: 'test',
          };
          this.props.pannelFun(params, () => {
            this.setState({
              isPannelOpen: !this.state.isPannelOpen,
                pannelUrl:""
            });
          });
        } else {
          message.warning('请先暂停录制和关闭推流！', 3);
        }
      }
    });
  };

  componentWillUnMount() {}

  startRecords = () => {
    if (this.state.isPannelOpen) {
      message.warning('请先打开面板！', 3);
      return false;
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.state.openVisible) {
          let params = {
            url: 'api/v1/record',
            recordUrl: values.recordUrl,
            hasAudio: '1',
          };
          this.props.startRecord(params, () => {
            this.setState({
              openVisible: false,
            });
          });
        } else {
          let params = {
            url: 'api/v1/record/recordsh',
            recordUrl: values.recordUrl,
          };
          this.props.endRecord(params, () => {
            this.setState({
              openVisible: true,
            });
          });
        }
      }
    });
  };
  _Rtmp = () => {
    var ipt = this.myRef;
    let rtmpUrls = this.props.form.getFieldValue('rtmpUrl');

    if (this.state.isPannelOpen) {
      message.warning('请先打开面板！', 3);
      return false;
    }

    if (!rtmpUrls) {
      ipt.input.style.border = '1px solid red';
      ipt.input.parentNode.childNodes[0].style.border = '1px solid red';
      ipt.input.style.borderLeft = 'none';
      ipt.input.parentNode.childNodes[0].style.color = 'red';
      this.setState({
        rtmpUrls: rtmpUrls,
      });
    } else {
      ipt.input.style.border = '1px solid rgb(217,217,217)';
      ipt.input.parentNode.childNodes[0].style.border =
        '1px solid rgb(217,217,217)';
      ipt.input.style.borderLeft = 'none';
      ipt.input.parentNode.childNodes[0].style.color = 'rgba(0,0,0,0.65)';
      this.setState(
        {
          rtmpUrls: rtmpUrls,
        },
        () => {
          if (!this.state.isRtmp) {
            let params = {
              url: 'api/v1/rtmp',
              rtmpUrl: rtmpUrls,
              display: '1',
              hasAudio: '1',
            };
            this.props.startRtmp(params, () => {
              this.setState({
                isRtmp: !this.state.isRtmp,
              });
            });
          } else {
            let params = {
              url: 'api/v1/rtmp',
              rtmpUrl: rtmpUrls,
              display: '1',
            };
            this.props.endRtmp(params, () => {
              this.setState({
                isRtmp: !this.state.isRtmp,
              });
            });
          }
        },
      );
    }
  };
  copy = () => {
    // console.log(this.props.pannelData.pannel)

    if (this.props.pannelData.pannel) {
      let Url2 = document.getElementById('net');
      // console.log(Url2)
      Url2.select(); // 选择对象
      document.execCommand('Copy'); // 执行浏览器复制命令
      alert('已复制好，可贴粘。');
    } else {
      message.warning('请先打开面板！', 3);
    }
  };

  netCheck = (rule, value, callback) => {
      if(value){
          if (value.indexOf('http://') === -1 && value.indexOf('https://') === -1) {
              callback('请输入以http://或者https://开头的网址!');
          } else {
              callback();
          }
      }else {
          callback();
      }

  };

  render() {
    // let {currentPlay} =this.props.playUrl.currentPlay;
    // console.log(this.props.pannelData.pannel);
    let currentPlay = this.props.pannelData.pannel
      ? this.props.pannelData.pannel.url
      : '';
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="monitor">
        <Row>
          <Col span={10} offset={1}>
            <Breadcrumb>
              <Breadcrumb.Item>
                {' '}
                <Link to="/">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>监控页面</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className="monitor-box">
          <Col>
            <Row>
              <Col className="mon-left" span={16}>
                <div
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '100%',
                    height: '500px',
                    //padding: '10px',
                    overflow: 'hidden',
                  }}
                >

                    <div
                        id="screen"
                      style={{
                        width: '100%',
                        height: this.state.pannelUrl?"100%":'0',
                      }}
                      //  className={this.state.pannelUrl?"":"screen"}
                    >
                    </div>


                  <div
                    style={{
                      width: '100%',
                      height: this.state.pannelUrl?"":'100%',
                    }}
                    className="screen"
                  ></div>
                </div>
              </Col>
              <Col span={8}>
                <div className="mon-right">
                  {/*<RechartPage />*/}
                  <AreaChart
                    width={450}
                    height={250}
                    data={data}
                    syncId="anyId"
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/*<Tooltip/>*/}
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                  </AreaChart>
                </div>
                <Form>
                  <div
                    style={{borderTop: '1px solid #ddd'}}
                    className="mon-right"
                  >
                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                      <Col span={5}>
                        {this.state.isPannelOpen ? (
                          <Button type="primary" onClick={this.openPannel}>
                            打开面板
                          </Button>
                        ) : (
                          <Button type="primary" onClick={this.closePannel}>
                            关闭面板
                          </Button>
                        )}
                      </Col>
                      <Col span={15}>
                        <FormItem>
                          {getFieldDecorator('recordUrl', {
                            rules: [
                              {
                                required: true,
                                message: '请输入打开面板的网址',
                              },
                              {
                                validator: this.netCheck,
                              },
                            ],
                          })(<Input disabled={!this.state.isPannelOpen} />)}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                      <Col span={5}>
                        <Button
                          type="primary"
                          onClick={() => this.startRecords()}
                        >
                          {this.state.openVisible ? '开始录制' : '暂停录制'}
                        </Button>
                      </Col>
                      <Col span={15} />
                    </Row>
                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                      <Col span={5}>
                        <Button type="primary" onClick={this._Rtmp}>
                          {this.state.isRtmp ? '开始推流' : '结束推流'}
                        </Button>
                      </Col>
                      <Col span={15}>
                        <FormItem>
                          {getFieldDecorator('rtmpUrl', {
                            rules: [
                              {
                                // required: true,
                                //message: '请输入推流网址!'
                              },
                            ],
                          })(
                            <Input
                              ref={ele => {
                                this.myRef = ele;
                              }}
                            />,
                          )}
                        </FormItem>
                        <span className="rtmp">
                          {!this.state.rtmpUrls && '请输入推流网址'}
                        </span>
                      </Col>
                    </Row>

                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                      <Col span={5}>
                        <Button type="primary" onClick={this.copy}>
                          分享链接
                        </Button>
                      </Col>
                      <Col span={15} offset={1} style={{marginTop: '5px'}}>
                        <Switch />
                        <span style={{marginLeft: '20px'}}>允许其他人操作</span>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <div style={{height: '0px'}}>
          <Input
            id="net"
            type="text"
            value={currentPlay}
            readOnly={true}
            style={{
              height: '0px',
              overflow: 'hidden',
              padding: '0',
              border: 'none',
            }}
          />
        </div>
      </div>
    );
  }
}

// 映射Redux state到组件的属性
function mapStateToProps(state) {
  console.log(state)
  return {
    pannelData: state.recordReducer,
    playUrl: state.recordReducer.PlayData,
  };
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
  return {
    startRecord: (args, cb) => dispatch(startRecord(args, cb)),
    endRecord: (args, cb) => dispatch(endRecord(args, cb)),
    startRtmp: (args, cb) => dispatch(startRtmp(args, cb)),
    endRtmp: (args, cb) => dispatch(endRtmp(args, cb)),
    pannelFun: (args, cb) => dispatch(pannelFun(args, cb)),
    playsFun: (args, cb) => dispatch(playsFun(args, cb)),
  };
}

//连接组件
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create()(Loadmore));
