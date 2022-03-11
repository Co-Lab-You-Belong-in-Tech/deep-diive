import React from 'react';
import _ from 'lodash';
import { GithubCounter, GithubSelector } from 'react-reactions';
import * as gameEvents from "../../helpers/events";
import { useState, useEffect } from "react";

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

  // handleSelect = (emoji) => {
  //   const index = _.findIndex(this.state.counters, { emoji, by: this.state.user })
  //   if (index > -1) {
  //       this.setState({
  //         counters: [...this.state.counters.slice(0, index), ...this.state.counters.slice(index + 1)],
  //         showSelector: false,
  //       })
      
  //   } else {
  //       this.setState({
  //         counters: [...this.state.counters, { emoji, by: this.state.user }],
  //         showSelector: false,
  //       })
  //   }
  // };

  // handleSelect = (type) => {
  //   this.setState({ showSelector: false });
  //   gameEvents.emojiHost(type)

  // }

  // getEmoji = (emo) => {
  //   gameEvents.emojiHost(this.handleSelect(emo))
  // }

  //later in events/server
  // export const emojiHost = (type) => {
  //   if(!socket) return;

  //   socket.emit("emoji_clicked", {
  //       type
  //   })
  // }
  // socket.on("emoji_clicked", (emoji) => {
  //   // const roomName = gameData.game_id;
    
  //   io.to(roomName).emit("emoji_add", emoji)
  // })


  

  render() {
    return (
      <div style={{ position: 'relative' }}>
        {/* <GithubCounter
          counters={ this.state.counters }
          user={ this.state.user }
          onAdd={ this.handleAdd }
          onSelect={ this.handleSelect }
        />

      { this.state.showSelector ? (
        <div style={{ position: 'absolute', bottom: '100%', marginBottom: '10px' }}>
          <GithubSelector
            reactions={['👍', '❤️', '👀', '🙌', '🤯', '🙊', '🔥', '😹', '🥂']}
            onSelect={ this.handleSelect } />
        </div>
      ) : null } */}

        <button onClick={this.handleSelect('👍')}> Hi </button>
      </div>
    )
  }
}

export default Reactions;