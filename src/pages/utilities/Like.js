import React, { Component } from 'react';
import { setFavorite, unsetFavorite } from '@/services/favorite';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

export class Like extends Component {
  state = {
    itemId: this.props.itemID,
    like: this.props.favorite
  }

  onClick = () => {
    if (!this.state.like) {
      setFavorite(JSON.stringify({
        "favorite" : [this.state.itemId]
      })).then(value => {
        if (value.result === "SUCCESS") {
          this.setState(prevState => ({
            like : !prevState.like
          }))
        }
      })
    } else {
      unsetFavorite(JSON.stringify({
        "favorite" : [this.state.itemId]
      })).then((value) => {
        if (value.result === "SUCCESS") {
          this.setState(prevState => ({
            like : !prevState.like
          }))
        }
      })
    }
  }

  render() {
    return (
      this.state.like ?
        <HeartTwoTone onClick={this.onClick} twoToneColor="#eb2f96"/>
        :
        <HeartOutlined onClick={this.onClick}/>
    )
  }
}


