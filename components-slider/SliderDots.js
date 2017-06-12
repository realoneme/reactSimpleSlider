import React, {Component} from 'react';

export default class SliderDots extends Component {
    render() {
        let {images, changeImg, ind} = this.props;
        return (
            <ul className="dots">
                {
                    images.map((item, index) => (
                        <li className={"dot " + (ind === index ||(ind==images.length&&index==0) ? 'active' : '')} key={index}
                            onMouseEnter={() => changeImg(index)}>{index + 1}</li>
                    ))
                }
            </ul>
        )
    }
}