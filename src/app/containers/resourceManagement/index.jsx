import React, {Component} from 'react';
import {
    Row,
    Col,
    Breadcrumb,
    Form,
    Select,
    Table,
    Button,
    Checkbox,
    Pagination,
    Input,
    message,
} from 'antd';
import {hashHistory} from 'react-router';

import './css/index.css';
import {Link} from 'react-router';
import {resourceFun} from '../../actions/resource';
import {playsFun} from '../../actions/record';
import {connect} from 'react-redux';
import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;
const ButtonGroup = Button.Group;
class Resource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            allRowKeys: [],
            current: 1,
        };
        this.fileRef = React.createRef();
        this.columns = [
            {
                title: '',
                dataIndex: 'chk',
                render: (text, record) => {
                    return (
                        <Checkbox
                            checked={this.state.selectedRowKeys.indexOf(record.url) > -1}
                            onChange={() => this.onSelect(record.url)}
                        />
                    );
                },
                align: 'center',
            },
            {
                title: '文件名',
                dataIndex: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
                align: 'center',
                className: 'thead',
            },
            {
                title: '录制日期',
                dataIndex: 'createTime',
                sorter: (a, b) =>
                moment(a.createTime, 'YYYY-MM-DD HH:mm:ss').valueOf() -
                moment(b.createTime, 'YYYY-MM-DD HH:mm:ss').valueOf(),
                className: 'thead',
                align: 'center',
                render: (text, record) => {
                    return moment(record.createTime).format('YYYY-MM-DD, h:mm:ss');
                },
            },
            {
                title: '时长',
                dataIndex: 'timeSize',
                className: 'thead',
                align: 'center',
                render: (text, record) => {
                    return record.timeSize + 's';
                },
            },
            {
                title: '大小',
                dataIndex: 'memSize',
                className: 'thead',
                align: 'center',
                render: (text, record) => {
                    return (record.memSize / 1024).toFixed(2) + 'M';
                },
            },
            {
                title: () => {
                    return (
                        <div>
                            <p style={{margin: '0px'}}>状态</p>
                            <p style={{margin: '0px'}}>录制中/最近录制/将要过期</p>
                        </div>
                    );
                },

                dataIndex: 'downloadTimes',
                className: 'thead',
                align: 'center',
            },
        ];
    }

    componentDidMount = () => {
        if (!this.props.resourceData.resourceData) {
            this.video('1');
        }
    };

    video = res => {
        let param = {
            url: 'api/v1/video',
            recordName: '',
            currentPage: res,
            pageSize: '10',
        };
        this.props.resourceFun(param, () => {
            this.setState({
                allRowKeys: [],
            });
            let data = this.props.resourceData.resourceData.content;
            for (var i = 0; i < data.length; i++) {
                this.state.allRowKeys.push(data[i].url);
                this.setState({
                    loading: !this.state.loading,
                });
            }
        });
    };
    onSelectAll = () => {
        this.setState({
            selectedRowKeys: this.state.allRowKeys,
        });
    };
    onSelectInvert = selectedRowKeys => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        // this.setState({selectedRowKeys});
        let _this = this;
        let differenceABSet = [..._this.state.allRowKeys].filter(
            x => _this.state.selectedRowKeys.indexOf(x) === -1,
        );
        this.setState({
            selectedRowKeys: differenceABSet,
        });
    };
    onSelect = req => {
        // console.log('selectedRowKeys changed==== ', req);
        //console.log(this.state.selectedRowKeys.indexOf(req))
        if (this.state.selectedRowKeys.indexOf(req) > -1) {
            this.state.selectedRowKeys.slice(
                this.state.selectedRowKeys.splice(req, 1),
            );
        } else {
            this.state.selectedRowKeys.push(req);
        }

        this.setState({
            loading: !this.state.loading,
        });
    };
    onChangePage = page => {
        this.setState(
            {
                current: page,
                selectedRowKeys: [],
            },
            () => {
                this.video(page);
            },
        );
    };
    plays = () => {
        let param = {
            playUrl: this.state.selectedRowKeys,
            playNumber: 0,
            currentPlay: this.state.selectedRowKeys[0],
        };
        this.props.playsFun(param, () => {
            hashHistory.push({
                pathname: 'video',
            });
        });
    };
    download = () => {
        const a = this.fileRef;
        a.download;
        let that = this;
        let i = -1;
        this.timer = setInterval(() => {
            ++i;
            if (that.state.selectedRowKeys[i]) {
                that.downloadFun(that.state.selectedRowKeys[i]);
            } else {
                clearInterval(this.timer);
            }
        }, 550);
    };
    downloadFun = href => {
        // console.log(href)
        const a = document.createElement('a');
        document.getElementById('root').appendChild(a);
        a.setAttribute('href', href);
        a.setAttribute('download', 'download');
        a.click();
    };
    share = () => {
        if (this.state.selectedRowKeys.length > 0) {
            let Url2 = document.getElementById('net');
            // console.log(Url2)
            Url2.select(); // 选择对象
            document.execCommand('Copy'); // 执行浏览器复制命令
            alert('已复制好，可贴粘。');
        } else {
            message.warning('请先选择数据！', 3);
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        let {content, recordTotal, currentPage} = this.props.resourceData
            .resourceData
            ? this.props.resourceData.resourceData
            : [];
        return (
            <Form>
                <div>
                    <Row type="flex">
                        <Col span={10} offset={1}>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    {' '}
                                    <Link to="/">首页</Link>
                                </Breadcrumb.Item>
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
                                            message: 'Please select your gender!',
                                        },
                                    ],
                                })(
                                    <Select placeholder="Select a option and change input text above">
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>,
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
                                            message: 'Please select your gender!',
                                        },
                                    ],
                                })(
                                    <Select placeholder="Select a option and change input text above">
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>,
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
                                            message: 'Please select your gender!',
                                        },
                                    ],
                                })(
                                    <Select placeholder="Select a option and change input text above">
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </div>
                <Row type="flex" style={{marginBottom: '20px'}}>
                    <Col span={6} offset={2}>
                        <ButtonGroup>
                            <Button
                                onClick={this.onSelectInvert}
                                size="large"
                                style={{width: '80px'}}
                            >
                                反选
                            </Button>
                            <Button
                                onClick={this.onSelectAll}
                                size="large"
                                style={{width: '80px'}}
                            >
                                全选
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col span={6}>
                        <ButtonGroup>
                            <Button size="large" style={{width: '80px'}} onClick={this.plays}>
                                播放
                            </Button>
                            <Button
                                size="large"
                                style={{width: '80px'}}
                                onClick={this.download}
                            >
                                {' '}
                                <a ref={this.fileRef}/>
                                下载
                            </Button>
                            <Button size="large" style={{width: '80px'}} onClick={this.share}>
                                分享
                            </Button>
                            <Button size="large" style={{width: '80px'}}>
                                删除
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <div style={{padding: '0 40px'}}>
                    <Table
                        //rowSelection={rowSelection}
                        columns={this.columns}
                        dataSource={content}
                        pagination={false}
                        total={5}
                        rowKey="url"
                    />
                    <Row
                        type="flex"
                        style={{height: '80px'}}
                        align="middle"
                        justify="center"
                    >
                        <Col>
                            {recordTotal && (
                                <Pagination
                                    //onShowSizeChange={onShowSizeChange}
                                    defaultCurrent={3}
                                    total={recordTotal}
                                    current={currentPage}
                                    onChange={this.onChangePage}
                                    showTotal={() => `共 ${recordTotal} 条`}
                                />
                            )}
                        </Col>
                    </Row>
                    <Input
                        id="net"
                        type="text"
                        value={this.state.selectedRowKeys}
                        readOnly={true}
                        style={{
                            height: '0px',
                            overflow: 'hidden',
                            padding: '0',
                            border: 'none',
                        }}
                    />
                </div>
            </Form>
        );
    }
}

// 映射Redux state到组件的属性
function mapStateToProps(state) {
    console.log(state)
    return {

        resourceData: state.recordReducer,
    };
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        resourceFun: (args, cb) => dispatch(resourceFun(args, cb)),
        playsFun: (args, cb) => dispatch(playsFun(args, cb)),
    };
}

//连接组件
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form.create()(Resource));
