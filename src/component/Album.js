import React from 'react'

class Album extends React.Component {
    render() {
        return (
            <div className="userAlbums1">
                <div className="darkCard">
                    <img
                        src={'https://loremflickr.com/200/200/albums/?random=' + this.props.id}
                        className="card-img" alt="Album"/>
                    <div>
                        <h5 className="card-title">{this.props.title}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Album