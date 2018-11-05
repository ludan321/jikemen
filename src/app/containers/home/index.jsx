import React, {Component} from 'react';


import "./css/index.css"
import Navs from "./nav"
import Footer from "./Footer"
class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    render() {
        return (
            <div >
                <Navs/>
                {this.props.children}


                <Footer/>
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
export default Home