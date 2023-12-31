import React from 'react'

const App = () => {
  return (
    <>
    <h1 className='my-5' style={{textAlign: 'center'}}>About Web Development</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src="https://picsum.photos/200/300" height="250px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Hello Frontend</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Read More...</a>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src="https://picsum.photos/200/301" height="250px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Hello Backend</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Read More...</a>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src="https://picsum.photos/200/302" height="250px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Hello Full Stack</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Read More...</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;