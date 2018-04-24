import React from 'react';
import {TimelineMax, Power1} from "gsap";
import GSAP from 'react-gsap-enhancer'


function firstAnimation(args) {
  var onComplete = () => {
    this.tweenFromTo("startTest", "endTest")
  }
  const {hourGlass, topSand, bottomSand} = args.options
  var tl = new TimelineMax();


  return tl
    .add("startTest")
    .to(topSand, 1.5, {opacity: 1, ease: Power1.easeIn}, 0)
    .to(bottomSand, 1.5, {opacity: 0, ease: Power1.easeIn}, 0)
    .to(hourGlass, 1, {rotation: '+=180', ease: Power1.easeInOut}, 1.5)
    .to(topSand, 1.5, {opacity: 0, ease: Power1.easeIn}, 2.5)
    .to(bottomSand, 1.5, {opacity: 1, ease: Power1.easeIn}, 2.5)
    .to(hourGlass, 1, {rotation: '+=180', ease: Power1.easeInOut, onComplete: onComplete}, 4)
    .add("endTest")

}

class HourGlass extends React.Component {
  componentDidMount() {
    this.anim = this.addAnimation(firstAnimation, this)
  }

  componentWillUnMount() {
    console.log("fghgdfhgdfhjgfdhjgfdsjhgfdhjgfdjhgfdhjfd")
  }

  render() {
    return (
      <div className="animated fadeIn" style={{marginTop: '2px'}}>
        <svg ref={(ref) => {
          this.hourGlass = ref;
        }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 252 362" style={{width: this.props.size, enableBackground: "new 0 0 252 362"}}
             xmlSpace="preserve">
          <style type="text/css">
            {'.st0{fill:#888888;}'}
            {'.st1{fill:#67ADA7;}'}
          </style>
          <path className="st0" d="M210.9,79.7c0.2-1.9,1-3.8,2.5-5c1.7-1.3,2.8-3.5,2.8-6V46.5c0-4-3-7.3-6.6-7.3H28.4c-3.7,0-6.6,3.3-6.6,7.3
          	v22.2c0,2.5,1.1,4.7,2.8,6c1.5,1.2,2.4,3,2.5,5c3,38,21.3,72.6,50.2,94l4.8,3.6c3.8,2.8,3.8,8.6,0,11.4l-4.8,3.6
          	c-28.9,21.5-47.2,56-50.2,94c-0.2,1.9-1,3.8-2.5,5c-1.7,1.3-2.8,3.5-2.8,6v22.2c0,4,3,7.3,6.6,7.3h181.2c3.7,0,6.6-3.3,6.6-7.3
          	v-22.2c0-2.5-1.1-4.7-2.8-6c-1.5-1.2-2.4-3-2.5-5c-3-38-21.3-72.6-50.2-94l-4.8-3.6c-3.8-2.8-3.8-8.6,0-11.4l4.8-3.6
          	C189.6,152.3,207.9,117.7,210.9,79.7z M45.9,50.3h145.9c3.9,0,7.1,3.2,7.1,7.1v0.5c0,3.9-3.2,7.1-7.1,7.1H45.9
          	c-3.9,0-7.1-3.2-7.1-7.1v-0.5C38.8,53.5,41.9,50.3,45.9,50.3z M192.6,314.9h-146c-3.9,0-7.1-3.2-7.1-7.1l0,0c0-3.9,3.2-7.1,7.1-7.1
          	h146c3.9,0,7.1,3.2,7.1,7.1l0,0C199.7,311.7,196.5,314.9,192.6,314.9z M132.6,176.9c-1.8,1.4-2.9,3.6-2.9,6.1s1.1,4.7,2.9,6.1
          	l20.7,15.4c24.1,17.9,39.9,46.1,43.8,77.5c0.5,4.2-2.8,8-7.1,8H47.9c-4.3,0-7.6-3.7-7.1-8c3.9-31.4,19.7-59.6,43.8-77.5l20.7-15.4
          	c1.8-1.4,2.9-3.6,2.9-6.1s-1.1-4.7-2.9-6.1l-20.7-15.4C60.5,143.6,44.8,115.4,40.9,84c-0.5-4.2,2.8-8,7.1-8h142.1
          	c4.3,0,7.6,3.7,7.1,8c-3.9,31.4-19.7,59.6-43.8,77.5L132.6,176.9L132.6,176.9z"/>
          <path ref={(ref) => {
            this.topSand = ref;
          }} style={{opacity: '0'}} className="st1" d="M117.7,201.4l-22.3,15c-19.5,13.7-31.2,36.7-31.2,61.3h112c0-24.6-11.7-47.6-31.2-61.3l-22.3-15
          	C121.2,200.4,119.2,200.4,117.7,201.4L117.7,201.4z"/>
          <path ref={(ref) => {
            this.bottomSand = ref;
          }} style={{opacity: '1'}} className="st1" d="M122.8,167.4l22.3-15c19.5-13.7,31.2-36.7,31.2-61.3h-112c0,24.6,11.7,47.6,31.2,61.3l22.3,15
          	C119.2,168.4,121.2,168.4,122.8,167.4L122.8,167.4z"/>
        </svg>
      </div>

    )
  }
}

export default GSAP()(HourGlass)
