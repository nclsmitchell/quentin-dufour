import React, { Component } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

class EventGrid extends Component {

    render() {
        const layout1 = [
            {i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
            {i: 'b', x: 4, y: 0, w: 4, h: 2, static: true},
            {i: 'c', x: 8, y: 0, w: 4, h: 2, static: true},
            {i: 'd', x: 0, y: 2, w: 4, h: 4, static: true},
            {i: 'e', x: 4, y: 2, w: 4, h: 2, static: true},
            {i: 'f', x: 8, y: 2, w: 4, h: 2, static: true},
            {i: 'g', x: 4, y: 4, w: 4, h: 2, static: true},
            {i: 'h', x: 8, y: 4, w: 4, h: 4, static: true},
            {i: 'i', x: 8, y: 4, w: 4, h: 4, static: true},
            {i: 'j', x: 0, y: 10, w: 8, h: 4, static: true},
            {i: 'k', x: 0, y: 6, w: 4, h: 4, static: true},
            {i: 'l', x: 4, y: 6, w: 4, h: 2, static: true},
            {i: 'm', x: 4, y: 8, w: 4, h: 2, static: true},
            {i: 'n', x: 8, y: 12, w: 4, h: 4, static: true},
            {i: 'o', x: 0, y: 14, w: 4, h: 2, static: true},
            {i: 'p', x: 4, y: 14, w: 4, h: 2, static: true},
            {i: 'q', x: 0, y: 16, w: 8, h: 4, static: true},
            {i: 'r', x: 8, y: 16, w: 4, h: 4, static: true}
        ]

        const layout2 = [
            {i: 'a', x: 0, y: 0, w: 3, h: 2, static: true},
            {i: 'b', x: 3, y: 0, w: 3, h: 2, static: true},
            {i: 'c', x: 0, y: 2, w: 3, h: 2, static: true},
            {i: 'd', x: 3, y: 2, w: 3, h: 4, static: true},
            {i: 'e', x: 0, y: 4, w: 3, h: 2, static: true},
            {i: 'f', x: 3, y: 6, w: 3, h: 2, static: true},
            {i: 'g', x: 0, y: 6, w: 3, h: 2, static: true},
            {i: 'h', x: 3, y: 8, w: 3, h: 4, static: true},
            {i: 'i', x: 0, y: 8, w: 3, h: 4, static: true},
            {i: 'j', x: 3, y: 12, w: 3, h: 2, static: true},
            {i: 'k', x: 0, y: 12, w: 3, h: 4, static: true},
            {i: 'l', x: 3, y: 14, w: 3, h: 2, static: true},
            {i: 'm', x: 0, y: 16, w: 3, h: 2, static: true},
            {i: 'n', x: 3, y: 16, w: 3, h: 4, static: true},
            {i: 'o', x: 0, y: 18, w: 3, h: 2, static: true},
            {i: 'p', x: 0, y: 20, w: 3, h: 2, static: true},
            {i: 'q', x: 0, y: 20, w: 3, h: 2, static: true},
            {i: 'r', x: 3, y: 20, w: 3, h: 4, static: true}
        ]

        const layouts = {
            lg: layout1,
            md: layout2
        }

        return(
          <ResponsiveReactGridLayout className="container photo-grid" breakpoints={{lg: 768, md: 480}} cols={{lg: 12, md: 6}} rowHeight={120} layouts={layouts}>
              <div key={'a'}><img src={ require('../img/event/event_01.jpg') } alt="Test" /></div>
              <div key={'b'}><img src={ require('../img/event/event_02.jpg') } alt="Test" /></div>
              <div key={'c'}><img src={ require('../img/event/event_03.jpg') } alt="Test" /></div>
              <div key={'d'}><img src={ require('../img/event/event_04.jpg') } alt="Test" /></div>
              <div key={'e'}><img src={ require('../img/event/event_05.jpg') } alt="Test" /></div>
              <div key={'f'}><img src={ require('../img/event/event_06.jpg') } alt="Test" /></div>
              <div key={'g'}><img src={ require('../img/event/event_07.jpg') } alt="Test" /></div>
              <div key={'h'}><img src={ require('../img/event/event_08.jpg') } alt="Test" /></div>
              <div key={'i'}><img src={ require('../img/event/event_09.jpg') } alt="Test" /></div>
              <div key={'j'}><img src={ require('../img/event/event_10.jpg') } alt="Test" /></div>
              <div key={'k'}><img src={ require('../img/event/event_11.jpg') } alt="Test" /></div>
              <div key={'l'}><img src={ require('../img/event/event_12.jpg') } alt="Test" /></div>
              <div key={'m'}><img src={ require('../img/event/event_13.jpg') } alt="Test" /></div>
              <div key={'n'}><img src={ require('../img/event/event_14.jpg') } alt="Test" /></div>
              <div key={'o'}><img src={ require('../img/event/event_15.jpg') } alt="Test" /></div>
              <div key={'p'}><img src={ require('../img/event/event_16.jpg') } alt="Test" /></div>
              <div key={'q'}><img src={ require('../img/event/event_17.jpg') } alt="Test" /></div>
              <div key={'r'}><img src={ require('../img/event/event_18.jpg') } alt="Test" /></div>
          </ResponsiveReactGridLayout>
        )
    }
}

export default EventGrid
