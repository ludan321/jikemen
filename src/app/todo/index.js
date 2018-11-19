import React from 'react';
import {Link} from 'react-router';

import {connect} from 'react-redux';
import { findDOMNode } from 'react-dom';
import Todo from './todo';

import {
    addTodo,
    completeTodo,
    setVisibilityFilter,
    VisibilityFilters
} from '../actions';
class RouteMap extends React.Component {
    updateHandle() {
        // console.log('每次router变化之后都会触发')
    }

    routerWillLeave = () => {
        alert('离开');
    };
    handleClick(e) {
        const inputNode = findDOMNode(this.refs.input);
        const text = inputNode.value.trim();
        this.props.dispatch(addTodo(text));
        inputNode.value = '';
    }
    completeTodos=(text)=>{
        this.props.dispatch(completeTodo(text));
    }
    renderFilter=(filter, name)=> {
        if(filter == this.props.filter) {
            return name;
        }
        return (
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    {/*this.props.onFilterChange(filter);*/}
                    this.props.dispatch(setVisibilityFilter(filter));
                }}>
                {name}
            </a>
        );
    }
    render() {
        // console.log(this.props.visibleTodos)
        return (

            <div>
                <div>
                    <input type='text' ref='input' />
                    <button onClick={ e => this.handleClick(e) }>
                        Add
                    </button>
                </div>
                {
                    this.props.visibleTodos.map((todo, index) =>{
                        return    <li
                                // {...todo}
                                onClick={() => this.completeTodos(index)}
                                key={index}
                            >
                                {todo.text}
                            </li>
                    }

                    )
                }
                <p>
                    SHOW
                    {' '}
                    {this.renderFilter('SHOW_ALL', 'All')}
                    {', '}
                    {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                    {', '}
                    {this.renderFilter('SHOW_ACTIVE', 'Active')}
                    .
                </p>
                <Link to="resour">aaaaaaaa</Link>
            </div>
        );
    }
}



function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}
// 映射Redux state到组件的属性
function mapStateToProps(state) {
    console.log(state)
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {};
}

//连接组件
export default connect(
    mapStateToProps)(RouteMap);
// export default RouteMap
