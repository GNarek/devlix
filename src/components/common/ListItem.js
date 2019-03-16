import React, {PureComponent} from 'react';

import FormItem from './FormItem';

class ListItem extends PureComponent {
    state = {
        isEditMode: false,
    }

    _handleClick = () => {
        this.props.onItemDelete(this.props.index);
    }

    _handleEdit = () => {
        this.setState({ isEditMode: true });
    }

    _handleOnSubmit = (value) => {
        this.props.onEdit(this.props.index, value);
    }

    render() {
        return (
            this.state.isEditMode
                ? <FormItem value={this.props.text} onSubmit={this._handleOnSubmit} />
                : (
                    <div className="flex_center listItem" >
                        <div onClick={this._handleEdit}>{this.props.text}</div>

                        <div className="actions">
                            <button className="button button-remove" onClick={this._handleClick}>x</button>
                        </div>
                    </div>
                )
        );
    }
}

export default ListItem;
