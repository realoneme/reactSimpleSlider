import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Slider from './components/Slider';
const IMAGE_DATA = [
    {
        src: require('./images/1.jpg'),
        alt: 'images-1',
    },
    {
        src: require('./images/2.jpg'),
        alt: 'images-2',
    },
    {
        src: require('./images/3.jpg'),
        alt: 'images-3',
    },
];
render(
    <Slider
        images={IMAGE_DATA}
        speed={1.2}//图片切换的速度
        delay={2.1}//轮播间隔时间
        pause={true}//是否鼠标移入暂停
        autoplay={true}//是否自动播放
        dots={true}//是否有导航
        arrows={true}//是否有箭头切换
    />,
    document.getElementById('root')
);