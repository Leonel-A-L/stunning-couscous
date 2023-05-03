const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='/images/meat-plater.jpg' alt='Meat Plater'></img>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
              {/* <a href="/places/new">
                <button className="btn-primary">New Places Page</button>
              </a> */}

          </main>
      </Def>
    )
  }
  

module.exports = home
