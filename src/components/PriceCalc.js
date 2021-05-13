import React, {component} from 'react'

class PriceCalc extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            numOne: Number,
            NumTwo: Number,
            answer: []
        }
    }

    render() {
        return(
            <div>
                <h2>H0i! priceCalc component</h2>
            <form>
                <label>
                    testName:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="submit" />    
            </form>
            </div>
        )
    }
}
export default PriceCalc