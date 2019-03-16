import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import { getProsConsList, updateData } from '../actions/prosConsList';
import Loader from './common/Loader';
import List from './common/List';
import '../styles/style.css';


class Section extends PureComponent {
    componentDidMount() {
        const {groupId, userId} = this.props;

        this.props.getProsConsList(groupId, userId);
    }

    _handleNewItem = (item, itemType) => {
        const {groupId, userId, prosConsList} = this.props;
        const newData = {
            ...prosConsList,
            [itemType]: [
                ...prosConsList[itemType],
                item
            ]
        };

        this.props.updateData(groupId, userId, newData);
    };

    _handleItemDelete = (i, itemType) => {
        const {groupId, userId, prosConsList} = this.props;
        const updatedTypeData = [...prosConsList[itemType]];

        updatedTypeData.splice(i, 1);

        const newData = {
            ...prosConsList,
            [itemType]: updatedTypeData,
        };

        this.props.updateData(groupId, userId, newData);
    }

    _handleEdit = (i, itemType, value) => {
        console.log('value', value);
        const {groupId, userId, prosConsList} = this.props;
        const updatedTypeData = [...prosConsList[itemType]];

        updatedTypeData[i] = value;

        console.log('updatedTypeData', updatedTypeData);

        const newData = {
            ...prosConsList,
            [itemType]: updatedTypeData,
        };

        this.props.updateData(groupId, userId, newData);
    }

    render() {
        const { pros, cons } = this.props.prosConsList;

        console.log('this.props', this.props);

        return (
            <div className="wrapper">
                {pros && cons
                    ? (
                        <>
                            <List
                                data={cons}
                                type='cons'
                                onNewItem={this._handleNewItem}
                                onEdit={this._handleEdit}
                                onItemDelete={this._handleItemDelete}
                            />
                            <List
                                data={pros}
                                type='pros'
                                onNewItem={this._handleNewItem}
                                onEdit={this._handleEdit}
                                onItemDelete={this._handleItemDelete}
                            />
                        </>
                    )
                    : <Loader text="Getting list . . ." />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ prosConsList }) => ({ prosConsList });
const mapDispatchToProps = {
    getProsConsList,
    updateData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
