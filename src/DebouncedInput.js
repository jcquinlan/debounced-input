import React, { Component } from 'react';
import Rx from 'rxjs/Rx';

class DebouncedInput extends Component {
  constructor(props){
      super(props);
      const _this = this;
      
      this.subject = new Rx.Subject();
      this.subscription = this.subject
        .debounceTime(this.props.debounceTime)
        .subscribe(
          function (x) {
              _this.props.handleChange(x);
          }
      );
      
      this.localHandleChange = this.localHandleChange.bind(this);
      
    }
  
    localHandleChange(event){
        this.subject.next(Object.assign({}, event));
    }
 
  
    render(){
      return (<input type="text" placeholder={ this.props.placeholder } onChange={ this.localHandleChange }/>) 
    }
}

DebouncedInput.defaultProps = {
    debounceTime: 500,
}

DebouncedInput.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  debounceTime: React.PropTypes.number,
}

export default DebouncedInput;
