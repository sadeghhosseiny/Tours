import React, { Component } from 'react'
import { ContextConsumer } from '../Context'
import Tours from './Tours'


class TourList extends Component {
    // state = {
    //     tours: tourData
    // }

    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <h2 className="capitalize text-center text-info font-italic">our tours</h2>
                        <div className="row">
                            <ContextConsumer>
                                {value => {
                                    return value.TOURS.map(item => {
                                        return <Tours key={item.id} Tour={item} />
                                    })

                                }
                                }
                            </ContextConsumer>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TourList