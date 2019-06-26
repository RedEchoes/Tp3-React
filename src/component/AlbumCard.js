import React from 'react'
import {Link} from 'react-router'

class AlbumCard extends React.Component {
    render() {
        return (
            <div className="albumCard">
                <div className="darkCard">
                    <img
                        src={'https://loremflickr.com/400/400/albums/?' + this.props.id}
                        className="card-img mb-2" alt="Info Album"/>
                    <div>
                        <h5 className="card-title">{this.props.title}</h5>
                        <Link className="btn btn-primary" to={'/membres/' + this.props.userId}>Fiche du membre</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default AlbumCard