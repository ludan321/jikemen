import React, {Component} from 'react';
import {Row, Col, Breadcrumb, Form, Select, Table, Button, Checkbox, Pagination} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option
const ButtonGroup = Button.Group;
import "./css/index.css"
import {Link} from "react-router"
import {axiosGet} from "../../../utils/request"
import {resourceFun} from "../../actions/resource"
import {connect} from 'react-redux';
import moment from "moment"

const data = [
    {
        'key':1,
        "url": "http://35.220.148.164:9998/test_imclass_1_2018-11-08_16-19-25.mkv",
        "name": "test_imclass_1_2018-11-08_16-19-25.mkv",
        "memSize": 98,
        "timeSize": 36,
        "errorTimes": 0,
        "downloadTimes": 0,
        "createTime": "2018-11-09T00:20:04"
    },
    {
        "key":2,
        "url": "http://35.220.148.164:9998/test_imclass_1_2018-11-08_16-05-49.mkv",
        "name": "test_imclass_1_2018-11-08_16-05-49.mkv",
        "memSize": 5901,
        "timeSize": 74,
        "errorTimes": 0,
        "downloadTimes": 0,
        "createTime": "2018-11-09T00:07:12"
    }
];
class Resouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            allRowKeys: [],
            current: 1,

        }
        this.columns = [
            {
                title: "",
                dataIndex: 'chk',
                render: (text, record) => {
                    return <Checkbox
                        checked={this.state.selectedRowKeys.indexOf(record.url) > -1}
                        onChange={() => this.onSelect(record.url)}/>
                },
                align:"center",

            }, {
                title: "文件名",
                dataIndex: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
                align:"center",
                className:"thead",

            },
            {
                title: '录制日期',
                dataIndex: 'createTime',
                sorter: (a, b) => moment(a.createTime,'YYYY-MM-DD HH:mm:ss').valueOf() - moment(b.createTime,'YYYY-MM-DD HH:mm:ss').valueOf(),
                className:"thead",
                align:"center",
                render:(text,record)=>{
                    return moment(record.createTime).format('YYYY-MM-DD, h:mm:ss')
                }

            }, {
                title: '时长',
                dataIndex: 'timeSize',
                className:"thead",
                align:"center",
                render:(text,record)=>{
                    return record.timeSize+"s"
                }
            }, {
                title: '大小',
                dataIndex: 'memSize',
                className:"thead",
                align:"center",
                render:(text,record)=>{
                    return (record.memSize/1024).toFixed(2)+"M"
                }
            }, {
                title: ()=>{
                    return <div>
                        <p style={{margin:"0px"}}>状态</p>
                        <p style={{margin:"0px"}}>录制中/最近录制/将要过期</p>
                    </div>
                },

                dataIndex: 'downloadTimes',
                className:"thead",
                align:"center"
            }];


    };

    componentDidMount = () => {
        // axiosGet("api/v1/video").then(data=>{
        //     console.log(data)
        // })
        let parpm={
            url:"api/v1/video",
            recordName:""
        }
        this.props.resourceFun(parpm, ()=> {
            // console.log(this.props.resouseData.resouseData)
            let data = this.props.resouseData.resouseData
            for (var i=0;i<data.length;i++){
                this.state.allRowKeys.push(data[i].url)
                this.setState({
                    loading:!this.state.loading
                })
            }
        })
    };
    onSelectAll=()=>{
        this.setState({
            selectedRowKeys: this.state.allRowKeys
        })
    }
    onSelectInvert = (selectedRowKeys) => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        // this.setState({selectedRowKeys});
        let _this = this
        let differenceABSet = [..._this.state.allRowKeys].filter(x => _this.state.selectedRowKeys.indexOf(x) === -1);
        console.log(differenceABSet)
        this.setState({
            selectedRowKeys: differenceABSet
        })

    };
    onSelect = (req) => {
        // console.log('selectedRowKeys changed==== ', req);
        //console.log(this.state.selectedRowKeys.indexOf(req))
        if (this.state.selectedRowKeys.indexOf(req) > -1) {
            this.state.selectedRowKeys.slice(this.state.selectedRowKeys.splice(req, 1))
        } else {
            this.state.selectedRowKeys.push(req)
        }

        this.setState({
            loading: !this.state.loading
        }, () => {
            console.log(this.state.selectedRowKeys)
        })

    }
    onChangePage = (page) => {
        this.setState({
            current: page
        })

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log(moment("2018-11-09T21:02:44",'YYYY-MM-DD HH:mm:ss').valueOf())

        return (
            <Form>
                <div>
                    <Row type="flex">
                        <Col span={10} offset={1}>
                            <Breadcrumb>
                                <Breadcrumb.Item> <Link to="/">首页</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>资源管理</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                label="条件一"
                                labelCol={{span: 10}}
                                wrapperCol={{span: 14}}
                            >
                                {getFieldDecorator('gender1', {
                                    rules: [
                                        {
                                            // required: true,
                                            message: 'Please select your gender!'
                                        }
                                    ],
                                })(
                                    <Select
                                        placeholder="Select a option and change input text above"

                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                label="条件二"
                                labelCol={{span: 10}}
                                wrapperCol={{span: 14}}
                            >
                                {getFieldDecorator('gender2', {
                                    rules: [
                                        {
                                            //required: true,
                                            message: 'Please select your gender!'
                                        }],
                                })(
                                    <Select
                                        placeholder="Select a option and change input text above"

                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                label="条件三"
                                labelCol={{span: 10}}
                                wrapperCol={{span: 14}}
                            >
                                {getFieldDecorator('gender3', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please select your gender!'
                                        }],
                                })(
                                    <Select
                                        placeholder="Select a option and change input text above"

                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </div>
                <Row type="flex" style={{marginBottom: "20px"}}>
                    <Col span={6} offset={2}>
                        <ButtonGroup>
                            <Button
                                onClick={this.onSelectInvert}
                                size="large"
                                style={{width: "80px"}}
                            >反选</Button>
                            <Button
                                onClick={this.onSelectAll}
                                size="large"
                                style={{width: "80px"}}

                            >全选</Button>
                        </ButtonGroup>
                    </Col>
                    <Col span={6}>
                        <ButtonGroup>
                            <Button
                                size="large"
                                style={{width: "80px"}}>播放</Button>
                            <Button
                                size="large"
                                style={{width: "80px"}}>下载</Button>
                            <Button
                                size="large"
                                style={{width: "80px"}}>分享</Button>
                            <Button size="large"
                                    style={{width: "80px"}}
                            >删除</Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <div style={{padding: "0 40px"}}>
                    <Table
                        //rowSelection={rowSelection}
                        columns={this.columns}
                        dataSource={this.props.resouseData.resouseData}
                        pagination={false}
                        total={10}
                        rowKey="url"

                    />
                    <Row type="flex" style={{height: "80px"}} align="middle">
                        <Col span={8}></Col>
                        <Col span={8} push={3}>
                            <Pagination
                                //onShowSizeChange={onShowSizeChange}
                                defaultCurrent={3}
                                total={20}
                                current={this.state.current}
                                onChange={this.onChangePage}
                                showTotal={() => `共 ${10} 条`}
                            />

                        </Col>
                        <Col span={8}></Col>

                    </Row>
                </div>

            </Form>
        )
    }
}
// export default Form.create()(Resouse)



// 映射Redux state到组件的属性
function mapStateToProps(state) {
    // console.log(state)
    return {

        resouseData:state.resouseReducer
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        resourceFun: (args, cb) => dispatch(resourceFun(args, cb)),
    }
}

//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Resouse))