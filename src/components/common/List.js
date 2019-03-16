import React, {PureComponent} from 'react';
import uuid from 'uuid/v4';

import ListItem from './ListItem';
import FormItem from './FormItem';

class List extends PureComponent {
    _handleItemAdd = (value) => {
        if(!value) {
            return;
        }

        this.props.onNewItem(value, this.props.type);
    };

    _handleItemDelete = (i) => {
        this.props.onItemDelete(i, this.props.type)
    };

    _handleItemEdit = (i, value) => {
        this.props.onEdit(i, this.props.type, value);
    }

    render() {
        return (
            <div className="listWrapper">
                <h3 className="listTitle">{this.props.type}</h3>
                <div className="list">
                    <div className="listContainer">
                        {
                            this.props.data.map((item, i) => (
                                <ListItem
                                    index={i}
                                    key={uuid()}
                                    text={item}
                                    onEdit={this._handleItemEdit}
                                    onItemDelete={this._handleItemDelete}
                                />
                            ))
                        }
                    </div>
                    <FormItem value="" onSubmit={this._handleItemAdd} />
                </div>
            </div>
        );
    }
}

export default List;
