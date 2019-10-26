import React, { Component } from 'react';
import {connect } from 'react-redux';
import AvisComponent from '../Avis/AvisComponent';

class AvisList extends Component {
    render() {
        return (
            <div>
                {
                    avis.map((avis , index) => <AvisComponent key={index} avis={avis} />)
                }
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
        avis = state.CategoriesReducer
    }
}

export default connect(mapStateToProps)(AvisList);