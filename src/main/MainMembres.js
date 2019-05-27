import React from 'react'
import UserCard from '../component/UserCard'
import BreadCrumb from '../component/BreadCrumb'
import SearchBar from '../component/SearchBar'
import Loader from '../component/Loader'

class MainMembres extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((result) => {
                this.setState({isLoaded: true, items: result});
            }, (error) => {
                this.setState({isLoaded: true, error});
            })
    }
    render() {
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <div>Erreur: {error.message}</div>;
        } else if (!isLoaded) {
            return (<Loader/>)
        } else {
            return (
                <section>
                    <div className='container'>
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                            <BreadCrumb
                                currentPage={"Membres"}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Membres du groupe</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <SearchBar/>
                            </div>
                        </div>
                        <div className="row">
                            {items.map(item => (<UserCard
                                key={item.id}
                                title={item.name}
                                description={item.company.catchPhrase}
                                email={item.email}
                                userId={item.id}/>))}
                        </div>
                    </div>
                </section>
            )
        }
    }
}
export default MainMembres