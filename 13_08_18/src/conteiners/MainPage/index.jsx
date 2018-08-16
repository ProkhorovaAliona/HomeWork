import React, { Component } from 'react';
import style from './style.scss';
/* Class work 15 08 18 */

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ' Alex',
      stage: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: ' Maybe Vasya ',
        stage: 1,
      });
    }, 1500);
  }

  render() {
    const { name, stage } = this.state;
    return (
      <div className={style.test}>
              Our teacher name is
        {name}
        {stage === 0 ? (<span>0</span>) : (<span>1</span>)}
      </div>
    );
  }
}

export default MainPage;
