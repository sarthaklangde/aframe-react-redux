import 'aframe';
import 'aframe-animation-component';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import React from 'react';
import ReactDOM from 'react-dom';
import { Entity, Scene } from 'aframe-react';

class ImageRes extends React.Component {


    render() {
        return (
            <Entity class="link"
                geometry={{ primitive: 'plane', height: 1, width: 1 }}
                material={{ shader: 'flat', src: this.props.name }}
                event-set__1={{ _event: 'mousedown', scale: '1 1 1' }}
                event-set__2={{ _event: 'mouseup', scale: '1.2 1.2 1' }}
                event-set__3={{ _event: 'mouseenter', scale: '1.2 1.2 1' }}
                event-set__4={{ _event: 'mouseleave', scale: '1 1 1' }}
                events={{ click: () => this.props.changeImageHandle() }}>
            </Entity>
        )
    }

};


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { img: '#0' };
    };

    changeImgTag(newimg) {
        console.log("THISSSSSSSSSSSSSSSSSSSSSS----------------------------", this.state);
        console.log("NEW IMG-----------------", newimg);
        this.setState({
            img: newimg
        });
    };

    populateImages(componentname){
        return(
            <Entity class='link' key={componentname}
                    geometry={{ primitive: 'plane', height: 1, width: 1 }}
                    material={{ shader: 'flat', src: componentname }}
                    event-set__1={{ _event: 'mousedown', scale: '1 1 1' }}
                    event-set__2={{ _event: 'mouseup', scale: '1.2 1.2 1' }}
                    event-set__3={{ _event: 'mouseenter', scale: '1.2 1.2 1' }}
                    event-set__4={{ _event: 'mouseleave', scale: '1 1 1' }}
                    
                    events={{ click: () => this.changeImgTag(componentname) }}>
                </Entity>
        )
    };



    render() {
        var imglist = [];
        var imgreslist = [];
        for (var i = 0; i < this.props.images.length; i++) {
            imglist.push(<img id={i} key={i} src={this.props.images[i].pano} />);
        }
        for (var i = 0; i < this.props.images.length; i++) {
            var componentname = ("#" + i).toString();
            console.log("Componentname = ", componentname);
            imgreslist.push(this.populateImages(componentname));
        }

        console.log("-------------------------------", imgreslist);

        return (
            <Scene>
                <a-assets>


                    {imglist}

                </a-assets>

                //360 Image that will be used in gallery
                <Entity id="image-360" radius="10" primitive="a-sky" src={this.state.img} />

                //Image Links to open it 
                <Entity id="links" layout={{ type: 'line', margin: 1.5 }} position="-2 -1 -4">

                    {imgreslist}
                    
                </Entity>



                <Entity primitive="a-camera">
                    <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }}
                        animation__fusing={{ property: 'fusing', startEvents: 'fusing', from: '1 1 1', to: '0.1 0.1 0.1', dur: 1500 }}
                        event-set__1={{ _event: 'mouseenter', color: 'springgreen' }}
                        event-set__2={{ _event: 'mouseleave', color: 'black' }}
                        fuse="true"
                        raycaster="objects: .link" />
                </Entity>
            </Scene>
        );
    }
}
