import React, { Component } from 'react';
import './text-area-list.css';

export default class TextAreaList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFirst: true
    };
  }

  onChange = function (evt) {
    var optList = document.getElementById('optList');
    var getWidth = this.fakeEle(evt.target.value, 'Arial', 13);
    var length = 420 + getWidth + evt.target.value.length + 20;

    if (evt.target.value.indexOf('.') > -1) {
      this.setState({isFirst: false});
    } else {
      this.setState({isFirst: true});
    }
    
    optList.style.left = length + 'px';
  }

  fakeEle = function(txt, fontname, fontsize) {
    var canvC = document.createElement('canvas');
    canvC.ctx = canvC.getContext('2d');
    canvC.ctx.font = fontsize + ' ' + fontname;
    return canvC.ctx.measureText(txt).width;
  }

  render() {
    return (
      <div>
        <textarea id="txtArea" className="text-area-list" 
          onChange={this.onChange.bind(this)}></textarea>
        <strong className="tips">Tips:</strong>


        <div className="tips-container">
          <ul className="list-item">
            <li> <span>Use market. to bring up the list of markets.</span> </li>
            <li> <span>The syntax for fetching a ticker price is market.$exchange.$pair.$type.</span> </li>
            <li> <span>Aggregate functions: min(...), max(...) and avg(...).</span> </li>
          </ul>
        </div>


        <div id="optList" className={(this.state.isFirst === true) ? 'drop-down-list' : 'drop-down-list__show'}>
          <ul>
            <li>sample one</li>
            <li>sample one</li>
            <li>sample one</li>
            <li>sample one</li>
          </ul>
        </div>


      </div>
    )
  }
}
