import React from 'react';
class Map extends React.Component {
  /* constructor(props) {
    super(props);
  } */
  render() {
    return (
      <div className='Map'>

        <iframe title="Map Frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.4649715763858!2d105.79210865805963!3d10.022640048208906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0637d539834cf%3A0x61a10ca9e49314ff!2zTmjDoCBIw6BuZyBIxrBuZyBQaMO6IFThu611!5e0!3m2!1sen!2s!4v1652403147514!5m2!1sen!2s" /* width="600" height="450" style="border:0;"  */ allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    );
  }
};

export default Map;
