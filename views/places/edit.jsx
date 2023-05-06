const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
          <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className='row'>
              <div className="form-group col-sm-6">
                  <label htmlFor="name">Place Name</label>
                  <input 
                    className="form-group col-sm-6" 
                    id="name" 
                    name="name" 
                    value={data.place.name} 
                  required />
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={data.place.image}
                  />
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={data.place.city}
                  />
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={data.place.state}
                  />
                  <label htmlFor="cuisines">Cuisines</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={data.place.cuisines}
                  />
                  <br />
                  <input type="submit"/>
              </div>      
            </div>       
          </form>
        </Def>
    )
}

module.exports = edit_form
