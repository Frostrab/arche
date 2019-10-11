import React from 'react';
import CardInformation from './CardInformation';
import Contract from './Contract';
import TimelneAccounts from './TimelineAccounts';
import Contact from './Contact';
import Product from './Product';
import EmpRel from './EmpRel';
export default class DetailAccounts extends React.PureComponent {
  render () {
    const {selected} = this.props;
    return (
      <React.Fragment>
        <div style={{display: 'flex'}}>
          <div
            style={{
              width: '40%',
              borderRight: '1px solid black',
              height: '100%',
              padding: 10,
            }}
          >
            <CardInformation
              dataDetail={selected}
            />
            <div style={{marginBottom: 5}}>
              <Contact dataDetail={selected} />
              <EmpRel dataDetail={selected} />
            </div>
          </div>
          <div
            style={{
              width: '60%',
              height: '100%',
              padding: 10,
            }}
          >
            <Contract dataDetail={selected} />
            <TimelneAccounts dataDetail={selected} />
            <Product dataDetail={selected} />
            <div />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
