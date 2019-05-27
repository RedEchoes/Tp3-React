import React from 'react';

class BreadCrumb extends React.Component {
    render() {
        return (
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">{this.props.currentPage}</li>
                </ol>
        )
    }
}
export default BreadCrumb;