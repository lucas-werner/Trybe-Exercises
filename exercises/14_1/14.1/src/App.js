import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      selected: 'a',    
    }
  }

   changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,        
      }
    ))
  }

  handleClick = (selected) => {
    this.setState({ selected })
  }

  render() {

    const content = [
      { id: 1, item: 'a' },
      { id: 2, item: 'b' },
      { id: 3, item: 'c' },
      { id: 4, item: 'd' },
    ];

    return (
      <div className='main'>
        <Button content={this.state.selected} isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Alert
            handleClick={(selected) => this.handleClick(selected)}
          >
            {{ list: content }}
          </Alert>}
      </div>
    )
  }
}

export default App;