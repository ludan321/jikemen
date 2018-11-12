import React, {PureComponent} from 'react';
import {Row, Col, Button, Input, Table, Breadcrumb, Switch} from 'antd'
import './css/index.css'
import {Link} from "react-router"
import  {startRecord, endRecord, startRtmp, endRtmp, pannelFun,playsFun} from "../../actions/record"
import {connect} from 'react-redux';
import axios from "axios"
import RechartPage from './RechartPage';
import ReactPlayer from 'react-player'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
const data = [
    {name: 'Page A', uv: 4000, pv: 9000},
    {name: 'Page B', uv: 3000, pv: 7222},
    {name: 'Page C', uv: 2000, pv: 6222},
    {name: 'Page D', uv: 1223, pv: 5400},
    {name: 'Page E', uv: 1890, pv: 3200},
    {name: 'Page F', uv: 2390, pv: 2500},
    {name: 'Page G', uv: 3490, pv: 1209},
];
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: "center"
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        align: "center"
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        align: "center"
    },
];

const data1 = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
        key: 3,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    },
]
class Loadmore extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            openVisible: true,
            isRtmp: true
        }
    };

    componentDidMount = () => {
        this.pannel()
    };
    //打开录制面板
    pannel = () => {

        let parpms = {
            "url": "api/v1/vnc/pannel",
            "recordUrl": "https://vjs.zencdn.net/v/oceans.mp4",
            "recordName": "qweqweq",
            // stateA:this.props.playUrl

        }
        this.props.pannelFun(parpms, () => {

        })
    }

    componentWillUnMount() {
    }

    ends = () => {
        // console.log("播放结束")
        let number  = ++this.props.playUrl.playNumber
        // console.log(this.props.playUrl)
        // console.log(number)

        if(number>=this.props.playUrl.playUrl.length){
            number=0
        }
        let parpms={
            playUrl:this.props.playUrl.playUrl,
            playNumber:number,
            currentPlay:this.props.playUrl.playUrl[number]
        }
        this.props.playsFun(parpms,()=>{

        })
    }
    startRecords = () => {
        this.setState({
            openVisible: !this.state.openVisible,

        }, () => {
            if (!this.state.openVisible) {
                let parms = {
                    url: "api/v1/record",
                    recordUrl: "https://vjs.zencdn.net/v/oceans.mp4",
                    hasAudio: "1"
                };
                this.props.startRecord(parms)
            } else {
                let parms = {
                    url: "api/v1/record/allsh",
                    recordUrl: "https://vjs.zencdn.net/v/oceans.mp4",
                };
                this.props.endRecord(parms)

            }
        })
    }
    _Rtmp = () => {

        this.setState({
            isRtmp: !this.state.isRtmp
        }, () => {
            if (!this.state.isRtmp) {
                let parpms = {
                    url: "api/v1/rtmp",
                    rtmpUrl: "https://vjs.zencdn.net/v/oceans.mp4",
                    display: "1",
                    hasAudio: "1"
                }
                this.props.startRtmp(parpms)
            } else {
                let parpms = {
                    url: "api/v1/rtmp",
                    rtmpUrl: "https://vjs.zencdn.net/v/oceans.mp4",
                    display: "1"
                }
                this.props.endRtmp(parpms)
            }


        })
    }
    copy = () => {
        console.log(this.refs.net)
        let Url2 = document.getElementById("net");
        console.log(Url2)
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert("已复制好，可贴粘。");
    }
    preVideo=()=>{

        let number  = --this.props.playUrl.playNumber
        // console.log(this.props.playUrl)
        // console.log(number)


        if(number<0){
            number=this.props.playUrl.playUrl.length-1
        }
        // console.log(this.props.playUrl.playUrl[number])
        let parpms={
            playUrl:this.props.playUrl.playUrl,
            playNumber:number,
            currentPlay:this.props.playUrl.playUrl[number]
        }
        this.props.playsFun(parpms,()=>{

        })
    }
    nextVideo=()=>{

        this.ends()
    }
    render() {
        // let {currentPlay} =this.props.playUrl.currentPlay;
        console.log(this.props.playUrl.currentPlay);
        let currentPlay  = this.props.playUrl.currentPlay?this.props.playUrl.currentPlay:"https://vjs.zencdn.net/v/oceans.mp4"
        return (
            <div>
                <Row>
                    <Col span={10} offset={1}>
                        <Breadcrumb>
                            <Breadcrumb.Item> <Link to="/">首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>监控页面</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row className="monitor-box">

                    <Col>
                        <Row>
                            <Col className='mon-left' span={16}>
                                <div style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    width: "100%",
                                    height: "480px",
                                    padding: '10px',
                                    overflow: 'hidden'
                                }}>
                                    <ReactPlayer
                                        url={currentPlay}
                                        width="100%"
                                        playing={false}
                                        controls={true}
                                        height="100%"
                                        onEnded={this.ends}
                                    />
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
                                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        {/*<Tooltip/>*/}
                                        <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d'/>
                                    </AreaChart>
                                </div>
                                <div style={{borderTop: '1px solid #ddd'}} className="mon-right">
                                    <div>
                                        <Button type="primary" className="lz-btn"
                                                onClick={() => this.startRecords()}>
                                            { this.state.openVisible ? '开始录制' : "结束录制"}
                                        </Button>
                                        <Button type="primary" className="lz-btn"
                                                onClick={() => this.preVideo()}>
                                           上一个
                                        </Button>
                                        <Button type="primary" className="lz-btn"
                                                onClick={() => this.nextVideo()}>
                                           下一个
                                        </Button>
                                    </div>
                                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                                        <Col span={5}>
                                            <Button type="primary"
                                                    onClick={this._Rtmp}>
                                                { this.state.isRtmp ? '开始推流' : "结束推流"}
                                            </Button>
                                        </Col>
                                        <Col span={15}>
                                            <Input addonBefore="Https://" defaultValue="www.baidu.com"/>
                                        </Col>
                                    </Row>
                                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                                        <Col span={5}>
                                            <Button type="primary"
                                            >切换网址</Button>
                                        </Col>
                                        <Col span={15}>
                                            <Input
                                                addonBefore="Https://"
                                                defaultValue="www.baidu.com"
                                                ref="net"

                                            />
                                            <div >
                                                <Input
                                                    id="net"
                                                    type="text"
                                                    value={currentPlay}
                                                    readOnly={true}
                                                    style={{height:"0px", overflow:"hidden", padding:"0",border:"none"}}
                                                />
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                                        <Col span={5}>
                                            <Button
                                                type="primary"
                                                onClick={this.copy}
                                            >分享链接</Button>
                                        </Col>
                                        <Col span={15} offset={1}>
                                            <Switch/>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{padding: "0 30px"}}>
                        <Table
                            columns={columns}
                            expandedRowRender={record => <p style={{margin: 0}}>{record.description}</p>}
                            dataSource={data1}
                        />
                    </Col>
                </Row>
            </div>

        )
    }
}


// 映射Redux state到组件的属性
function mapStateToProps(state) {
    // console.log(state)
    return {
        pannelData: state.recordReducer,
        playUrl:state.recordReducer.PlayData
    }
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
    }
}

//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Loadmore)