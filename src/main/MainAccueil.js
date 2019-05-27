import React from 'react'
import UserPhotos from '../component/UserPhotos'
import UserInformation from '../component/UserInformation'
import Loader from '../component/Loader'
import {Link} from 'react-router'
import PieCharts from '../component/PieCharts'
import BarCharts from '../component/BarCharts'

class MainAccueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: []
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/10")
            .then(res => res.json())
            .then((result) => {
                this.setState({isLoaded: true, item: result});
            }, (error) => {
                this.setState({isLoaded: true, error});
            })
    }
    render() {
        const {error, isLoaded, item} = this.state;
        if (error) {
            return <div>Erreur: {error.message}</div>;
        } 
        else if (!isLoaded){
            return (
                <Loader />
            )
        }        
        else {
            return (
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>Mon Profil</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mainGestion">
                                <h3>Gestion</h3>
                                <button type="button" className="mb-2 btn-primary btn-lg btn-block">Gérer mes albums</button>
                                <Link to='/membres'><button type="button" className="mb-2 btn-primary btn-lg btn-block">Voir l'historique des échanges</button></Link>
                                <Link to='/membres'><button type="button" className="mb-2 btn-primary btn-lg btn-block">Gérer les livraisons</button></Link>
                            </div>
                            <div className="userCard">
                                <UserInformation 
                                key={item.id} 
                                name={item.name} 
                                email={item.email} 
                                phone={item.phone} 
                                street={item.address.street} 
                                suite={item.address.suite} 
                                city={item.address.city} 
                                zipcode={item.address.zipcode}
                                />
                                <Link className="modifier" to={'#'}>Modifier</Link>
                            </div>
                            <div className="userCard">
                                <UserPhotos key={item.id} userId={item.id}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="charts">
                                <h3>Échanges complétées par mois</h3>
                            	<BarCharts />
                            </div>
                            <div className="charts">
                                <h3>Taux de succès des échanges</h3>
                                <PieCharts />
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
export default MainAccueil