import React, {Component, PropTypes} from 'react';

class ContactDetail extends Component {
  static propTypes = {
    contact: PropTypes.object
  }

  render() {
    return(
      <div style={{marginTop: '30px'}}>
        This is the contact detail component.
        <p><strong>Name: </strong>{this.props.contact.name}</p>
        <p><strong>Children: </strong>{this.props.contact.children}</p>
      </div>
    );
  }
}

export default ContactDetail;
