import React from 'react';

class Searchbar extends React.Component {
    render() {
        return (
            <form className="form-inline my-2">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"/>
                <button className="btn" type="submit">Search</button>
            </form>
        )
    }
}

export default Searchbar;