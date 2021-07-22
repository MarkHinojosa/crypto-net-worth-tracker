import React from 'react';



export default class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state={ 
      ethValue: "", 
      btcValue: "",
      ethAddresses: [],
      btcAddresses: []
    }
   }

  ethHandleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    this.setState({ethAddresses: [...this.state.ethAddresses, this.state.ethValue], ethValue: ""},
    ()=> console.log(this.state, "the state ***"))
  }

  ethHandleChange = (event) => {
    console.log(event.target.value, " event ")
    this.setState({ ethValue: event.target.value }, () => console.log(this.state))
  }

  ethLabel = () => {
    return (
      <form onSubmit={this.ethHandleSubmit}>
      <label>
        ETH Wallet Address:
        <input type="text" value={this.state.ethValue} onChange={this.ethHandleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }

  btcLabel = () => {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        BTC Wallet Address:
        <input type="text" value={this.state.btcValue} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }

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
          {this.ethLabel()}
        </div>
      </div>
    )
  }
}
