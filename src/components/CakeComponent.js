import { buyCake } from "../redux"
import React from "react"
import { connect } from "react-redux"


const mapStateToProps = state => {
    return{
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : ()=> dispatch(buyCake())   
    }
}


const CakeComponent = (props) => {

    return(
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button  onClick={props.buyCake}>Buy a Cake</button>
        </div>
    )
}



export default connect(
 mapStateToProps,
 mapDispatchToProps
) (CakeComponent)