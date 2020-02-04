import React, {Component} from 'react'
import {render} from 'react-dom'

import { Button } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>gbif-react-components Demo</h1>
      <Button>Test buttton</Button>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
