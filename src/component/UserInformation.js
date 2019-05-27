import React from 'react'

class UserInformation extends React.Component {
    render() {
        return (
            <div className="my-4">
                <h3>Informations</h3>
                <ul>
                    <li>{this.props.name}</li>
                    <li>Courriel: {this.props.email}</li>
                    <li>Téléphone: {this.props.phone}</li>
                </ul>
                <h3>Adresse</h3>
                <ul>
                    <li>{this.props.street}, {this.props.suite}</li>
                    <li>{this.props.city}</li>
                    <li>{this.props.zipcode}</li>
                </ul>
            </div>
        )
    }
}

export default UserInformation