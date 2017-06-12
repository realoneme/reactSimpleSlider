import React,{Component} from 'react';


export default class SliderMain extends Component{
    render(){
        let {index,images}=this.props;
        let style = {
            width: 540 * (this.props.images.length+1)
        };
        console.log(index,images.length);

        return(
            <ul className="sliders" style={style}>
                {
                   images.map((image, index) => (
                        <li key={index} className="slider">
                            <img src={image.src} alt={image.alt}/>
                        </li>
                    ))


                }
                <li className="slider">
                    <img src={images[0].src} alt={images[0].alt}/>
                </li>

            </ul>
        )
    }
}
