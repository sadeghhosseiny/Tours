import React, { Component } from 'react'
import { ContextConsumer } from '../Context'
import styles from './Tours.module.css'


class Tours extends Component {
    
    state = {
        showInfo: false,
        //CaretClicked: ''
    }

    // infoCaret = (newInfo) => {
    //     this.setState (() => {
    //         return {CaretClicked: newInfo}
    //     })
    // }

    Info = () => {
        this.setState ({
            showInfo: !this.state.showInfo,
            //CaretClicked: newClick
        })
    }

    render() {
        const { id, img, city, name, info } = this.props.Tour

        //console.log(this.props.Tour)
        return (
            <div className="col-9 col-md-6 col-lg-3 my-2 mx-auto">
                <div className={`card ${styles.Card}`}>
                    <ContextConsumer>

                        {value => (
                            <div className={`${styles.ImageContainer} img-container`} >
                                <img src={img} className={`${styles.Image} 
                                card-img-top`}
                                    alt="tour"/>
                                <button type="button" className={`btn ${styles.CloseBtn}`}
                                 onClick={() => value.removeTour(id)}> 
                                    
                                    <i className="fas fa-window-close" />
                                </button>

                                {/* <div className={`${styles.Hovering}`}> */}
                                    <div className={`${styles.text}`}>
                                        {name}
                                    </div>
                                {/* </div>  */}
                            </div>
                        )
                        }
                    </ContextConsumer>
                    <div className={`card-footer pl-1 ${styles.infoContainer}`}>
                        <div className="d-flex">

                            <h4 className={`${styles.TxtResponsive} text-capitalize text-success`}>city: </h4>&nbsp;
                        <h4 className={`${styles.TxtResponsive} text-capitalize text-secondary`}>{city}</h4>
                        </div>
 
                            <h5 className={`text-secondary font-italic d-inline`}>
                                info: 
                                </h5>&nbsp;

                        <span className={`${styles.caret}`} >
                            <i 
                              className={`fas fa-angle-down text-success ${styles.info} 
                             ${this.state.showInfo === true && styles.SquareIcon}`}
                             onClick={() => {this.Info() 
                             }}/>
                                  
                            </span>
                            <div className={` font-italic text-secondary ${this.state.showInfo === false && styles.falsewrapper}
                            ${this.state.showInfo === true && styles.truewrapper}`}>
                                
                                
                             {this.state.showInfo ? info 
                                : !this.state.showInfo}  

                                </div>                
                            
                             </div>
                            
                             </div>

                        </div>
                
        )
    }
}

export default Tours