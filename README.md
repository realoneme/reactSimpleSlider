## simple silder
### Get started
```
npm install
run start
```

### How to
You can set the parameters in the index.js file.
```
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
```
Then enjoy this.