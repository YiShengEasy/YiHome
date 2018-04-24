import React, { Component } from 'react';
import styles from './styles';
import Progress, {Stage} from './Progress';
import Steps, {Step} from './Steps';


class Stepper extends Component {
  state = {
    stage: this.props.stage
  }
  static defaultProps = {
    stage: 1
  }
  static Progress = Progress
  static Steps = Steps
  static Stage = Stage
  static Step = Step
  handleClick = () => {
    this.setState({ stage: this.state.stage + 1 });
  }
  render() {
    const { stage } = this.state;
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {stage, handleClick: this.handleClick})
    })
    return (
      <div style={styles.container}>
        {children}
      </div>
    );
  }
}

export default Stepper;
