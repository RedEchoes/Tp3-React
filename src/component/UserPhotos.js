import React from 'react'

class UserPhotos extends React.Component {
    render() {
        return (
            <div className="my-4">
                <img
                    src={`http://i.pravatar.cc/500?img=${this.props.userId}`}
                    className="card-img-top"/>
            </div>
        )

    }
}

export default UserPhotos