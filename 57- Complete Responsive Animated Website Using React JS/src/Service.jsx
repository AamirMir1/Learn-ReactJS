import React from 'react'
import { API } from './LocalAPI';
import Card from './Card'

const Service = () => {
    return (
        <>
            <section className="services-section">
                <h1 className="services-title">Your Items</h1>
                <div className="cards d-width">
                    {
                        API.map((val, index)=>{
                            return <Card img={val.img} title={val.name}/>
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default Service;