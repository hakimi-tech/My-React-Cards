import React, { Component } from 'react';
import { Cards } from "./Cards";
import './Maindev.css'
import './Cards.css'

class Maindev extends Component {
    render(){
        return(
        <main>
            <div className="MainDev">
                <h1 className="header">Insights</h1>
               <form className="add-iems" >
                   <input className="input" type="text" placeholder="Get your insights now!"/>
                   <button className="btn"type="submit">Add your insight + </button>
               </form>
                
            </div>
            <div className="section">
                <div className="Main-section">
                    {Cards.map((item, index) => {
                        return (
                            <div className="card-content" key={index} style={{backgroundColor: item.backgroundcolor}}>
                                <p className="Paragraph" style={{color:item.color}} >
                                    {item.paragraph} 
                                </p>
                                <div className="icons">
                                <i className={item.thumbUp}></i>
                                <i className={item.thumbDown}></i>
                                </div>
                            </div>
                            
                    )
                    } )}
                    
                    

                </div>
            </div>
            
        </main>
        )
    }
}

export default Maindev