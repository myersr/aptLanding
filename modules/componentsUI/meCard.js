/**
 * Created by roy on 12/24/16.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

const MeCard = () => (
    <Card>
        <CardHeader
            title="Roy Myers"
            subtitle="Software Developer ~ Research and Cyberinfrastructure at USC"
            avatar="static/img/headshotAvi.jpg"
        />
        <CardMedia
            overlay={<CardTitle title="Grand Canyon National Park" subtitle="Family Trip 2016" />}
        >
            <img src="static/img/canyon.jpg" />
        </CardMedia>
        <CardTitle title="About Me" subtitle="Introduction" />
        <CardText>
            I am an aspiring web developer and full time student at the University of South Carolina. This site is an easy
            way to host my resume and other relevant files as well as an serve as a personal introduction to React. Some
            links might be broken or restricted as I also plan on using this as a landing page for other projects. For contact
            information please visit my Contact page.
        </CardText>
        <CardActions>
            <Link to={`/contact`}><FlatButton label="Contact Me" /></Link>
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

export default MeCard;