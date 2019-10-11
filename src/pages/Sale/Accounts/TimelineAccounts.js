import React from 'react';
import styled from 'styled-components';
import {Timeline, Icon} from 'antd';

const Row = styled.div`
    width: 100%
    display: flex
`;
const LabelLeft = styled.div`
    width: 30%
    text-align: right
    margin: 3px
`;
const InputRight = styled.div`
    width: 70%
    margin: 3px
`;
const Header = styled.div`
    height: 40px
    border-bottom: 1px solid black
    display: flex
    justify-content: space-between
`;
const Card = styled.div`
    border: 1px solid black
    margin-left: 5px
    background-color: #fff
    margin-bottom: 5px
    border-radius: 6px
    padding: 6px
    height: 350px
    overflow-y: auto
`;
const P = styled.p`
    margin-bottom:0px
`;
const dataRight = [
  {
    id: 1,
    accountId: 1,
    activityBy: 'admin admin',
    activityDate: '2019-01-01T12:12:12',
    activityComment: 'string',
  },
  {
    id: 2,
    accountId: 2,
    activityBy: 'admin admin',
    activityDate: '2019-01-01T07:12:12',
    activityComment: 'string',
  },
];
const dataLeft = [
  {
    id: 1,
    accountId: 1,
    planName: 'string',
    startDate: '2019-01-01T00:00:00',
    endDate: '2019-01-03T00:00:00',
    createByName: 'admin admin',
  },
  {
    id: 2,
    accountId: 2,
    planName: 'string',
    startDate: '2019-01-01T00:00:00',
    endDate: '2019-01-03T00:00:00',
    createByName: 'admin admin',
  },
];
export default class TimelineAccounts extends React.PureComponent {
  state = {
    timeline: [],
    plan: [],
  };
  componentDidMount () {
    this.setState ({timeline: dataRight, plan: dataLeft});
  }
  convertDateTime (a, n) {
    let DateConvert =
      a.split ('T')[0].split ('-')[2] +
      '/' +
      a.split ('T')[0].split ('-')[1] +
      '/' +
      a.split ('T')[0].split ('-')[0];
    let TimeConvert =
      a.split ('T')[1].split (':')[0] + ':' + a.split ('T')[1].split (':')[1];
    if (n) {
      return DateConvert;
    } else {
      return DateConvert + '-' + TimeConvert;
    }
  }
  handleClick (e) {
    alert(e)
    console.log(e)
  }
  render () {
    const {timeline, plan} = this.state;
    return (
      <Card>
        <Header>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 20,
            }}
          >
            Timeline
          </label>
        </Header>
        <div body style={{padding: 5, marginTop: 5}}>
          <Timeline mode="alternate">
            {plan.map (items => (
              <Timeline.Item position="left" key={items.id} onClick={e => this.handleClick (e)}>
                <div>
                  <P>
                    {items.createByName}
                    (
                    {this.convertDateTime (items.endDate, true)}
                    )
                  </P>
                  <P>{items.planName}</P>
                </div>
              </Timeline.Item>
            ))}
            {timeline.map (items => (
              <Timeline.Item position="right" color="green">
                <div>
                  <P>
                    {items.activityBy}
                    (
                    {this.convertDateTime (items.activityDate)}
                    )
                  </P>
                  <P>{items.activityComment}</P>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>,
        </div>
      </Card>
    );
  }
}
