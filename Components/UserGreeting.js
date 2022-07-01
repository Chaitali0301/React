import React, { Component } from 'react'

export class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: false
  }
}

  render() {

    //******short circuit approach************* */
    return this.state.isLoggedIn && <div>Welcome Chaitu</div>

    //********Ternary Operator******* */
    //    return (
    //     this.state.isLoggedIn ? (
    //     <div>Welcome Chaitu</div>
    //     ) : ( 
    //     <div>Welcome Guest</div>
    //     )
    //    )

    //********variable approach********** */
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome chaitu</div>
    // }else{
    //    message =<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //*******if else approch***** */
    // if(this.state.isLoggedIn){
    //     return <div>Welcome chaitu</div>
    // }else{
    //    return <div>Welcome Guest</div>
    // }
    

    // return (
    //     <div>
    //         <div>Welcome Chaitu</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting