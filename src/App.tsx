import React, { Component } from 'react';

import { Button } from 'antd';
import { data } from './data'

console.log(data);

type IProps = Readonly<{
  onChange?: Function;
}>;

const initialState = { 
  clickCount: 0,
  data: [],
};
type IState = Readonly<typeof initialState>;

class App extends Component<IProps, IState> {
  readonly state: IState = initialState;
  
  componentWillReceiveProps(nextProps: any) {
    const { value } = nextProps;
    if (value) {
      this.setState({
        clickCount: value
      })
    }
  }

  // componentDidMount() {
  //   // 模拟ajax

  // }

  private handleIncrement = () => {
    const { onChange } = this.props;
    const { clickCount } = this.state;
    this.setState({
      clickCount: clickCount + 1,
    });  
    onChange && onChange(clickCount + 1);
  };
  private handleDecrement = () => {
    const { onChange } = this.props;
    const { clickCount } = this.state;
    this.setState({
      clickCount: clickCount - 1,
    });  
    onChange && onChange(clickCount - 1);
  }

  render() {
    const { clickCount } = this.state;
    return (
      <div>
        <p>You've clicked me {clickCount} times!</p>
        <ul>
          <li>aaaaa</li>
          <li>bbbbb</li>
        </ul>
        <Button type="primary" onClick={this.handleIncrement}>上一页</Button>
        <Button type="primary" onClick={this.handleDecrement}>下一页</Button>
      </div>
    );
  }

  
}

export default App;
