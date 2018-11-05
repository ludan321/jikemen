import React, {PureComponent} from 'react';
import {Row, Col, Button, Input, Table,Breadcrumb} from 'antd'
import './css/index.css'
import {Link} from "react-router"

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
        align:"center"
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        align:"center"
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
export default class Loadmore extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            openVisible: false,
            openJl: false,
            input_url: '',
            video_url: 'http://vjs.zencdn.net/v/oceans.mp4',
        }
    };

    componentDidMount = () => {
    };

    componentWillUnMount() {
        this.setState({reloade_visible: false})
    }

    render() {
        console.log(this.state.video_url, 'video_url')

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
                                        url={"http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.mp4"}
                                        width="100%"
                                        playing={false}
                                        controls={true}
                                        height="100%"
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
                                                onClick={() => this.open_video(!this.state.openVisible)}>
                                            {this.state.openVisible ? '结束录制' : '开始录制'}
                                        </Button>
                                    </div>
                                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                                        <Col span={5}>
                                            <Button type="primary"
                                                    onClick={() => this.setState({openJl: !this.state.openJl})}>
                                                {this.state.openJl ? "结束截流" : '开始截流'}
                                            </Button>
                                        </Col>
                                        <Col span={15}>
                                            <Input addonBefore="Http://" addonAfter=".com" defaultValue=""/>
                                        </Col>
                                    </Row>
                                    <Row style={{width: '100%', margin: '15px 0 0 30px'}}>
                                        <Col span={5}>
                                            <Button type="primary" onClick={() => this.handle_click_http()}>切换网址</Button>
                                        </Col>
                                        <Col span={15}>
                                            <Input addonBefore="Http://" defaultValue=""
                                                   onChange={(e) => this.onChangeInput(e)}/>
                                            <p style={{fontSize: '12px'}}>clips.vorwaerts-gmbh.de/big_buck_bunny.mp4</p>
                                            <p style={{fontSize: '12px'}}>vjs.zencdn.net/v/oceans.mp4</p>
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