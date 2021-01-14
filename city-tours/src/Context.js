import React, { Component } from 'react'

import {tourData} from './data'

const TourContext = React.createContext()

class Context extends Component {
    state = {
        TOURS: [],
    }

    componentDidMount = () => {
        this.setTours()
    }

    setTours = () => {
        let tempTours = []
        tourData.forEach(item => {
            const singleItem = {...item}
            tempTours = [...tempTours, singleItem]
        })
        this.setState(() => {
            return {TOURS: tempTours}
        })
    }

    RemoveTour = (id) => {
        let tempTour = [...this.state.TOURS]
        tempTour = tempTour.filter(item => (item.id !== id))
        this.setState(() => {
            return {TOURS: [...tempTour]}
        })
    }
    
    render() {
        //console.log(this.state.Tours)
        return (

            <TourContext.Provider value={{
                ...this.state,
                removeTour: this.RemoveTour,

            }}>
                {this.props.children}
            </TourContext.Provider>
        )
    }
}

const ContextConsumer = TourContext.Consumer

export {Context, ContextConsumer}