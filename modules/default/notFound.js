/**
 * Created by roy on 1/30/17.
 */
import React from 'react'
import { Link } from 'react-router'
import {makeRequest} from 'utils'


// maxHeight: flex,
// maxWidth: flex
const style = {
    display: "flex"
}

export default class NotFound extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            url: 'static/img/Octocat.png'
        };

    }


    componentWillMount(){
        var self = this
        var theUrl = 'http://127.0.0.1:5000/4oh4';
        makeRequest('GET', theUrl)
            .then(function (datums) {
                var linkVar = JSON.parse(datums).comicUrl;
                self.setState(prevState => ({
                    url: linkVar
                }))
            })
            .catch(function (err) {
                console.error('Augh, there was an error!', err);
            });
    }

    render() {
        return(
            <div>
                <h1>404 Not Found</h1>
                <h2>Sorry that page doesn't exist. Please check your path or return <Link to={`/`}>home</Link></h2>
                <img src={this.state.url} style={style}></img>
            </div>
        )

    }
}
