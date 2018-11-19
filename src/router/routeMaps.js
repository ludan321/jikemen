import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Home from '../app/containers/home/index.jsx';
import Login from '../app/containers/login/login';
import Monitor from '../app/containers/monitor/index';
import Main from '../app/containers/home/main';
import Video from '../app/containers/video/video';
import Resource from '../app/containers/resourceManagement/index';
import {connect} from 'react-redux';
import Todo from "../app/todo"
class RouteMap extends React.Component {
  updateHandle() {
    // console.log('每次router变化之后都会触发')
  }

  routerWillLeave = () => {
    alert('离开');
  };

  render() {
    return (
      <Router
        history={this.props.history}
        onUpdate={this.updateHandle.bind(this)}
      >
        <Route path="/" component={Home}>
          <IndexRoute component={Main} />
          <Route path="/monitor" component={Monitor} />
          <Route path="/resour" component={Resource} />
          <Route path="/video" component={Video} />
        </Route>

        <Route path="/login" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/todo" component={Todo} />
      </Router>
    );
  }
}
// 映射Redux state到组件的属性
function mapStateToProps(state) {
  return {};
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
  return {};
}

//连接组件
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RouteMap);
// export default RouteMap
