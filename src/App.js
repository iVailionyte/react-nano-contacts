import React, { Component } from 'react';


class ContactList extends Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'John' },
          { name: 'Jane' },
          { name: 'Joe' },
        ]} />
        <ContactList contacts={[
          { name: 'Merry' },
          { name: 'Moe' },
          { name: 'Mike' },
        ]} />
        <ContactList contacts={[
          { name: 'Kate' },
          { name: 'Karl' },
          { name: 'Kai' },
        ]} />
      </div>
    );
  }
}

export default App;
