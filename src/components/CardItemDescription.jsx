import React, { useMemo } from 'react';
import styled from 'styled-components';

import { COLORS } from '../styles/colors';
import {
  calculateHp,
  calculateStr,
  calculateWeak,
  calculateDamage,
  convertStatusToWidth,
} from '../utils/statusCalculator';

const Container = styled.div`
  padding: 20px;
`;

const Name = styled.div`
  font-family: 'Gaegu';
  font-size: 36px;
`;

const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
  line-height: 40px;
`;

const StatusTitle = styled.div`
  width: ${props => props.searchResult ? '100px' : '80px'};
`;

const StatusBar = styled.div`
  width: ${props => `${props.width}px`};
  height: 30px;
  border-radius: 15px;
  background-color: ${`${COLORS.Metal}80`} /* 80 equals to 50% alpha */
`;

const StatusValue = styled.div`
  width: ${props => `${props.width}px`};
  height: 30px;
  border-radius: 15px;
  background-color: ${COLORS.Fairy}
`

const HapinessImg = styled.img`
  width: ${props => props.searchResult ? '50px' : '38px'};
  height: auto;
  margin: ${props => props.searchResult ? '5px' : '1px' };
`;

const CardItemDescription = React.memo(({
  name = 'Unknown',
  hp = '0',
  attacks = [],
  weaknesses = [],
  searchResult = false
}) => {
  const barWidth = searchResult ? 400 : 150;
  
  const healthPoint = useMemo(() => calculateHp(hp), [hp]);
  const str = useMemo(() => calculateStr(attacks?.length), [attacks.length]);
  const weak = useMemo(() => calculateWeak(weaknesses?.length), [weaknesses.length]);
  const damage = calculateDamage(attacks);

  const happiness = Math.floor(((healthPoint / 10) + (damage / 10) + 10 - weaknesses?.length) / 5);
  const Happiness = [];
  for (let i = 0; i < happiness; ++i) {
    Happiness.push(
      <HapinessImg src="../cute.png" alt="hapiness" searchResult={searchResult} />)
  }

  return (
    <Container>
      <Name>
        {name?.toUpperCase()}
      </Name>
      <Status>
        <StatusTitle searchResult={searchResult}>HP</StatusTitle>
        <StatusBar
          data-testid="CartItemDescription-statusBar-hp"
          width={barWidth}>
          <StatusValue
            data-testid="CartItemDescription-statusValue-hp"
            width={convertStatusToWidth(healthPoint, barWidth)}
          />
        </StatusBar>
      </Status>
      <Status>
        <StatusTitle searchResult={searchResult}>STR</StatusTitle>
        <StatusBar
          data-testid="CartItemDescription-statusBar-str"
          width={barWidth}
        >
          <StatusValue
            data-testid="CartItemDescription-statusValue-str"
            width={convertStatusToWidth(str, barWidth)}  
          />
        </StatusBar>
      </Status>
      <Status>
        <StatusTitle searchResult={searchResult}>WEAK</StatusTitle>
        <StatusBar
          data-testid="CartItemDescription-statusBar-weak"
          width={barWidth}
        >
          <StatusValue
            data-testid="CartItemDescription-statusValue-weak"
            width={convertStatusToWidth(weak, barWidth)}
          />
        </StatusBar>
      </Status>
      {Happiness}
    </Container>
  )
});

export default CardItemDescription;
