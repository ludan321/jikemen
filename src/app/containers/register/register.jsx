import React, {PureComponent} from 'react';
import {Modal, Button, Row, Col, Input, Form, Icon} from 'antd';
import {connect} from 'react-redux';
const FormItem = Form.Item;
import {registerFun} from "../../actions/loginApi"
class Register extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      registerModalVisible: false,
    }

  };

  componentDidMount = () => {
    this.props.onRef(this)
  };
//注册
  register_submit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        const _object = {
          url: 'api/v1/user',
          ...values,
        };
        this.props.registerFun(_object, ()=> {
          this.setState({
            registerModalVisible: false,
          });
        });
        // this.setState({loginModalVisible: false});
      }
    });
  };
  // 返回
  handle_cancle = () => {
    this.setState({
      registerModalVisible: false,
    });
  };
  register = () => {
    this.setState({
      registerModalVisible: true,
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <div>
        <Modal
          visible={this.state.registerModalVisible}
          title="用户注册"
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
                          onClick={() => this.register_submit()}
                        >
                          注册
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}
// 映射Redux state到组件的属性
function mapStateToProps(state) {
  return {
    // pannelData: state.recordReducer,
    // playUrl: state.recordReducer.PlayData,
  };
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
  return {
    registerFun: (args, cb) => dispatch(registerFun(args, cb)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create()(Register));