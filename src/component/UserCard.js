import React from 'react';
import {Link} from 'react-router'

class UserCard extends React.Component {
    render() {
        return (
            <div className="userInfo">
                <div className="darkCard">
                    <img
                        src={`http://i.pravatar.cc/250?img=${this.props.userId}`}
                        className="card-img mb-2" alt="Info"/>
                    <div>
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text">{this.props.email}</p>
                        <Link className="btn btn-primary" to={'/membres/' + this.props.userId}>Albums en échange</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;