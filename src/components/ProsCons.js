import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import { getCredentials } from '../actions/auth';
import Section from './Section';
import Loader from './common/Loader';

class ProsCons extends PureComponent {
    componentDidMount() {
        this.props.getCredentials();
    }



    render() {
        const { userId, groupId } = this.props.auth;

        console.log('this.props', this.props);

        return (
            <div className="container">
                <h1>Should I ...?</h1>
                {userId && groupId
                    ? <Section userId={userId} groupId={groupId} />
                    : <Loader text="Authenticating . . ."/>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = {
    getCredentials,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProsCons);
