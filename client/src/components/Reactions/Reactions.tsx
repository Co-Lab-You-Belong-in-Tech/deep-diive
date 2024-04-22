import React from 'react';
import _ from 'lodash';

export class Reactions extends React.Component {

  state = {
    counters: [{
      emoji: '👋',
      by: 'add emojis',
    }],
    user: 'remove emojis',
    showSelector: false,
  }

  handleAdd = () => this.setState({ showSelector: true })

  handleSelect = (emoji: any) => {
    console.log(`Selected emoji: ${emoji}`);
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <button onClick={() => this.handleSelect('👍')}> Hi </button>
      </div>
    )
  }
}

export default Reactions;