import React from 'react'

export const ProductoCard = ({
    DESCRIPTION,
    TYPE,
    NAME,
    SKU,
    ID,
    PRICE,
    IMAGE
}) => {
    
    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
             <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `${IMAGE}` } className="card-img" alt={ NAME } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { NAME } </h5>
                        <p className="card-text"> { DESCRIPTION} </p>

                        <p className="card-text">
                            <small className="text-muted"> { PRICE } </small>
                        </p>


                    </div>

                </div>
            </div> 
        </div>
    )
}
