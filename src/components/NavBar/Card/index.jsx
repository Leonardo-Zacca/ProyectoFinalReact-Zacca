import React from 'react'

const Item = ({title , description}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src="http://placekitten.com/150/150" class="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/#" class="btn btn-primary">Comprar</a>
        </div>
</div>
  )
}

export default Item