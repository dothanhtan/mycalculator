import React from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './outputScreen';
import Button from './button';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
    }

    handleClick = (event) => {
        const value = event.target.value;
        
        switch (value) {
            case '=': {
                if (this.state.question!=='')
                {
                    var ans='';
                    try
                    {
                        ans = eval(this.state.question);
                    }
                    catch(err)
                    {
                        this.setState({answer: "Math Error"});
                    }
                    if (ans===undefined)
                        this.setState({answer: "Math Error"});
                    else
                        this.setState({ answer: ans , question: this.state.question});
                }
                break;
            }
            case 'AC': {
                this.setState({ question: '', answer: '' });
                break;
            }

            case 'DEL': {
                var str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({question: str});
                break;
            }
            default: {
                this.setState({ question: this.state.question += value})
                break;
            }
        }
    }

    render()
    {
        return (
            <div className="frame">
                <CalculatorTitle title="CALCULATOR"/>
                <div className="mainCalc">
                {console.log(this.state)}
                    <OutputScreen question={this.state.question} answer={this.state.answer}/>
                    <div className="button-row">
                        <Button className="btnaction" label={'AC'} handleClick = {this.handleClick}/>
                        <Button className="btnaction" label={'DEL'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'%'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'/'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'7'} handleClick={this.handleClick}/>
                        <Button label={'8'} handleClick={this.handleClick}/>
                        <Button label={'9'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'*'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'4'} handleClick={this.handleClick}/>
                        <Button label={'5'} handleClick={this.handleClick}/>
                        <Button label={'6'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'-'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'1'} handleClick={this.handleClick}/>
                        <Button label={'2'} handleClick={this.handleClick}/>
                        <Button label={'3'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'+'} handleClick={this.handleClick}/>
                    </div>
                    
                    <div className="button-row">
                        <Button label={'0'} handleClick={this.handleClick}/>
                        <Button label={'.'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'='} handleClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
