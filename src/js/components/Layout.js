
import React from "react";
import {connect} from "react-redux";
import {fetchImages} from "../actions/imageActions";

import App from "./App";

@connect((store)=>{
  console.log("THIS IS THE STORE",store);
  return{
    reactimagelist: store.image.images
  }
})

export default class Layout extends React.Component{
  componentWillMount(){
    
    this.props.dispatch(fetchImages());
    
  }
  fetchImages(){
    this.props.dispatch(fetchImages());
  }
  render(){
    const images = this.props.reactimagelist;
    console.log("IMAGES",images);
    if(!images.length){
      return <button onClick={this.fetchImages.bind(this)}> Load Images </button>
    }
    else{
      return (<div ><App images={images}/></div>)
    }
    
  }
}
