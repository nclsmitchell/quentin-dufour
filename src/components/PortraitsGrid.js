import React, { Component } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

class PortraitsGrid extends Component {

    render() {
        const layout1 = [
            {i: 'a', x: 0, y: 0, w: 4, h: 4, static: true},
            {i: 'b', x: 4, y: 0, w: 4, h: 2, static: true},
            {i: 'c', x: 8, y: 0, w: 4, h: 4, static: true},
            {i: 'd', x: 0, y: 4, w: 4, h: 4, static: true},
            {i: 'e', x: 4, y: 2, w: 4, h: 4, static: true},
            {i: 'f', x: 8, y: 4, w: 4, h: 4, static: true}
        ]

        const layout2 = [
            {i: 'a', x: 0, y: 0, w: 3, h: 4, static: true},
            {i: 'b', x: 3, y: 0, w: 3, h: 2, static: true},
            {i: 'c', x: 0, y: 4, w: 3, h: 4, static: true},
            {i: 'd', x: 3, y: 2, w: 3, h: 4, static: true},
            {i: 'e', x: 0, y: 8, w: 3, h: 4, static: true},
            {i: 'f', x: 3, y: 6, w: 3, h: 4, static: true}
        ]

        const layouts = {
            lg: layout1,
            md: layout2
        }

        return(
          <ResponsiveReactGridLayout className="container photo-grid" breakpoints={{lg: 768, md: 480}} cols={{lg: 12, md: 6}} rowHeight={120} layouts={layouts}>
              <div key={'a'}><img src={ require('../img/portraits/portrait_01.jpg') } alt="Test" /></div>
              <div key={'b'}><img src={ require('../img/portraits/portrait_02.jpg') } alt="Test" /></div>
              <div key={'c'}><img src={ require('../img/portraits/portrait_03.jpg') } alt="Test" /></div>
              <div key={'d'}><img src={ require('../img/portraits/portrait_04.jpg') } alt="Test" /></div>
              <div key={'e'}><img src={ require('../img/portraits/portrait_05.jpg') } alt="Test" /></div>
              <div key={'f'}><img src={ require('../img/portraits/portrait_06.jpg') } alt="Test" /></div>
          </ResponsiveReactGridLayout>
        )
    }
}

export default PortraitsGrid
