import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player'
import  {playsFun} from "../../actions/record"
import { Button} from 'antd'

 class Vido extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = () => {
    };

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
    render() {
        console.log(this.props.playUrl.currentPlay);
        let currentPlay  = this.props.playUrl.currentPlay?this.props.playUrl.currentPlay:"https://vjs.zencdn.net/v/oceans.mp4"
        return (
            <div>
                <div style={{width:"900px", height:"480px"}}>
                    <ReactPlayer
                        url={currentPlay}
                        width="100%"
                        playing={false}
                        controls={true}
                        height="100%"
                        onEnded={this.ends}
                    />
                </div>

                <Button type="primary" className="lz-btn"
                        onClick={() => this.preVideo()}>
                    上一个
                </Button>
                <Button type="primary" className="lz-btn"
                        onClick={() => this.nextVideo()}>
                    下一个
                </Button>
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
        playsFun: (args, cb) => dispatch(playsFun(args, cb)),
    }
}

//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Vido)