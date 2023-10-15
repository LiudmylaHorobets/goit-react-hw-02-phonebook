import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Filter } from './Filter/Filter.jsx';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = userContacts => {
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase()
      )
    ) {
      alert(`${userContacts.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [userContacts, ...this.state.contacts],
    });
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  getContactFromFilter = () => {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };
  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={this.filter}
          handleFilterChange={this.handleFilterChange}
        />
        {this.state.contacts.length === 0 ? (
          <h3>There are no any contacts here</h3>
        ) : (
          <ContactsList
            contacts={this.getContactFromFilter()}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}
