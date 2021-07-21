import React from 'react';

export default class Wallet extends React.Component {
  render () {
    return (
      <div style={{
        height: "20vh",
        border: 'solid red 3px',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around'
      }}
      >
        <div>
          <p>BTC wallet</p>
          <p>.012345</p>
        </div>
        <div>
          <p>ETH wallet</p>
          <p>.01234567</p>
        </div>
      </div>
    )
  }
}
