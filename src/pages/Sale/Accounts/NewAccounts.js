import React from 'react';
import CardInformation from './CardInformation';

export default class NewAccounts extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <div style={{display: 'flex'}}>
          <div
            style={{
              width: '100%',
              borderRight: '1px solid black',
              height: '100%',
              padding: 10,
            }}
          >
            <CardInformation status={'new'} />
            <div style={{backgroundColor: 'red', marginBottom: 5}}>
              {/* <Contact /> */}
            </div>
          </div>
   
        </div>
      </React.Fragment>
    );
  }
}
