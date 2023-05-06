const React = require('react')
const Def = require('./default')

function show (data) {
    console.log(data)
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h3> Rating </h3>
            <p>no rating yet</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                 Delete
                </button>
            </form>     

            <h3>Comments</h3>
            <p>No comments yet</p>
          </main>
        </Def>
    )
}

module.exports = show