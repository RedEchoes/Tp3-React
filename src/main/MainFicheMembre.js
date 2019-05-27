import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import UserPhotos from '../component/UserPhotos'
import UserInformation from '../component/UserInformation'
import Loader from '../component/Loader'
import Album from '../component/Album'

class MainFicheMembre extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            user: [],
            album: []
        }
    }
    componentDidMount() {
        const userId = this.props.routeParams.userId;
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        ]).then(([res1, res2]) => Promise.all([
            res1.json(),
            res2.json()
        ])).then(([data1, data2]) => this.setState({isLoaded: true, user: data1, album: data2}), (error) => {
            this.setState({isLoaded: true, error})
        })
    }
    render() {
        const {error, isLoaded, user, album} = this.state
        if (error) {
            return <div>Erreur: {error.message}</div>
        } else if (!isLoaded) {
            return (<Loader/>)
        } else {
            return (
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <BreadCrumb currentPage={"Fiche membre"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="userInfo">
                                <h2>{user.username}</h2>
                                <UserPhotos key={user.id} userId={user.id}/>
                                <button type="button" className="btn">Proposer un échange</button>
                                <UserInformation
                                    key={user.id}
                                    name={user.name}
                                    email={user.email}
                                    phone={user.phone}
                                    street={user.address.street}
                                    suite={user.address.suite}
                                    city={user.address.city}
                                    zipcode={user.address.zipcode}/>
                            </div>

                            <div className="userAlbums">
                                <h3>Albums en échange</h3>
                                <div className="row">
                                    {album.map(album => (<Album key={album.id} id={album.id} title={album.title}/>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default MainFicheMembre