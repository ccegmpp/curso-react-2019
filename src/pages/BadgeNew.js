import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm.js'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Enrique"
                lastName="Gómez Mont"
                twitter="ccegmpp"
                jobTitle="Frontend Engineer"
                avatarUrl="https://es.gravatar.com/userimage/155582147/df16016cd7edae7eee7aa77c9d861a9a.jpg"
              />
            </div>
            <div className="col-6">
            <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
