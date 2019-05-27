import React from 'react';
import AlbumCard from '../component/AlbumCard'
import BreadCrumb from '../component/BreadCrumb'
import SearchBar from '../component/SearchBar'
import Loader from '../component/Loader'

class MainAlbums extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            itemsToShow: 8,
        }
        this.showMore = this.showMore.bind(this);
    }
    showMore() {
        (
          this.setState({ 
              itemsToShow: this.state.itemsToShow + 8
            })
        ) 
      }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true, 
                    items: result
                })
            }, (error) => {
                this.setState({
                    isLoaded: true, 
                    error
                });
            })
    }
    render() {
        console.log(this.state.items)
        const {error, isLoaded, items} = this.state
        if (error) {
            return <div>Erreur: {error.message}</div>
        } else if (!isLoaded) {
            return (<Loader/>)
        } else {
            return (
                <section>
                      <div className='container'>
                    <div className="row">
                        <div className="col-lg-4">
                            <BreadCrumb currentPage={"Albums"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Albums en échange</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <SearchBar/>
                        </div>
                    </div>
                    <div className="row">
                        {items.slice(0, this.state.itemsToShow).map((item, i) => (<AlbumCard key={i} id={item.id} title={item.title} userId={item.userId}/>))}
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button type="button" onClick={this.showMore} className="btn my-4">Voir plus d'albums</button>
                        </div>
                    </div>
                    </div>
                </section>
            )
        }
    }
}
export default MainAlbums