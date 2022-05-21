import React ,  {Component} from "react";

class HelloClass extends Component{
    static defaultProps ={
        name: "이름없음"
    }
    render(){
        const {color , isSpecial , name} = this.props;
        return (
            <div style={{color}}>
                {isSpecial&&<b>+</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

export default HelloClass;

