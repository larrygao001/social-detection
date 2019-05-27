import React, { Component } from 'react'
import './search.css';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { search } from '../../actions/search';
import SearchForm from './SearchForm';
import Result from './Result';


class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            formData:{},
            result:{},
            showAll:true
        }
    }

    loadmore=()=>{
        this.setState({
            result: this.props.data&&this.props.data.data,
            showAll:true
        })
    }

    handleChange=(item,e)=>{
        this.setState({
            formData: {...this.state.formData, [item]:e.target.value}
        })
    }
    
    handleSubmit= async e=>{
        e.preventDefault();
        await this.props.search(this.state.formData);

        if (Object.keys(this.props.data).length !== 0&&Object.keys(this.props.data.data).length>10){
            const result = this.props.data.data.slice(1,11);
            this.setState({
                result: result,
                showAll:false
            })
        }else{
            this.setState({
                result: this.props.data&&this.props.data.data,
                showAll:true
            })
        }
    }


    render() {
        return (
            <div>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>  
                <div className="result">
                    {Object.keys(this.state.result).length !== 0 && <Result  result={this.state.result}/>}
                    {!this.state.showAll && <div onClick={this.loadmore}>Read more...</div>}
                </div>
            </div>
        )

    }
}

// Search.propTypes = {
//     search: PropTypes.func.isRequired,
//     data: PropTypes.String
// };

const mapStateToProps = state => ({
    data: state.search,
    errors: state.errors
});

export default connect(mapStateToProps, { search })(Search)