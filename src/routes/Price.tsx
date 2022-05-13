import { useOutletContext } from 'react-router-dom';
import { OverviewBox } from './Coin';
import styled from 'styled-components';

interface IPriceInfo {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: string;
  percent_from_price_ath: number;
}

const PriceInfoBox = styled(OverviewBox)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div:first-child ~ div:nth-child(3) {
    padding-bottom: 1rem;
  }
`;

const Price = () => {
  const priceInfo = useOutletContext<IPriceInfo>();
  return (
    <PriceInfoBox as="dl">
      <div>
        <dt>Market Cap</dt>
        <dd>{priceInfo?.market_cap}</dd>
      </div>
      <div>
        <dt>Volume (24 hours)</dt>
        <dd>{priceInfo?.volume_24h}</dd>
      </div>
      <div>
        <dt>Popularity</dt>
        <dd>Rank</dd>
      </div>
      <div>
        <dt>24h %</dt>
        <dd>{priceInfo?.percent_change_24h}</dd>
      </div>
      <div>
        <dt>7d %</dt>
        <dd>{priceInfo?.percent_change_7d}</dd>
      </div>
      <div>
        <dt>All time high</dt>
        <dd>{priceInfo?.ath_price}</dd>
      </div>
    </PriceInfoBox>
  );
};

export default Price;
