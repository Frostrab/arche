import React from 'react';
import {
  Paper,
  TableTemplate,
  Button,
  ModalTemplate,
  TableInbox,
  DrawerTemplate,
} from '../components';
import Styled from 'styled-components';

const Title = Styled.h2`
    font-size: ${props => props.size}
    padding: 10px
    color: ${props => props.color || '#000000'}
`;
const TitleTab = Styled.div`
    background-color:#fff
    border-radius: 10px;
    border: 1px solid  #27b6ba
    margin-bottom: 3px
`;

const MasterList = () => {
  return (
    <React.Fragment>
      inbox
    </React.Fragment>
  );
};
export default MasterList;
