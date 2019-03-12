import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
import Square from './Square'

class PaintCanvas extends Component {
    render() {
        return (
            <div>
                <ColorPicker />
                <Square />
            </div>
        )
    }
}

export default PaintCanvas