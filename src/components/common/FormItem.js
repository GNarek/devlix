import React, {PureComponent} from 'react';

class FormItem extends PureComponent {

    state = {
        value: this.props.value,
    };

    _handleOnChange = (e) => {
        e.persist();

        this.setState((prevState) => {
            return {
                value: e.target.value,
            }
        });
    };

    _handleClick = () => {
        this.props.onSubmit(this.state.value);
    };

    render() {
        return (
            <div className="flex_center create_section">
                <input type="text" value={this.state.value} onChange={this._handleOnChange} />
                <div className="actions">
                    <button className="button button-create" onClick={this._handleClick}>+</button>
                </div>
            </div>
        );
    }
}

export default FormItem;
