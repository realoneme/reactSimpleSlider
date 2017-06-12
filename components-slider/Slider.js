/**
 * Created by rebec on 2017/6/8.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import SliderMain from './SliderMain';
import SliderDots from './SliderDots'
import SliderArrows from './SliderArrows';
import './slider.css'
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    turn = (n) => {//切换图片
        let sliderWrap = $('.sliders');
        let index = this.state.index + n;
        //判断边界值设置index的值
        //在判断里只去设置图片的偏移以及index的值，并不去执行动画
        if(index<0){
            sliderWrap.css('left',-540 * (this.props.images.length));
            index=this.props.images.length-1;
        }else if(index>this.props.images.length){
            sliderWrap.css('left',0);
            index = 1;
        }
        //在判断之外执行动画以及setState
        this.turnAnime(index);
        this.setState({
            index
        });


    };
    turnAnime =(n)=>{
        $('.sliders').animate({
            left:n * -540,
        },this.props.speed*1000);
    };
    go = ()=>{
        this.$timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay * 1000)
    };
    changeImg=(index)=>{
        this.setState({
            index
        });
        this.turnAnime(index)
    };
    componentDidMount() {
       this.go();
    }

    render() {

        let sliderOptions={};
        if(this.props.pause){
            sliderOptions.onMouseOver=()=>clearInterval(this.$timer);
            sliderOptions.onMouseOut=()=>this.go();
        }
        let mainOptions={
            index:this.state.index,
            images:this.props.images,
            speed:this.props.speed,
            delay:this.props.delay
        };
        return (
            <div className="slider-wrapper" {...sliderOptions}>
                <SliderMain {...mainOptions}/>
                <SliderDots images={this.props.images} changeImg={this.changeImg} ind={this.state.index}/>
                <SliderArrows turn={this.turn}/>
            </div>
        )
    }
}