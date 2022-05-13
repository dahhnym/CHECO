import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ITheme {
  isToggled: boolean;
}

const Chart = ({ isToggled }: ITheme) => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId!),
    {
      refetchInterval: 5000,
    },
  );

  interface IObj {
    x: number;
    y: number[];
  }

  const priceData = data?.map((price) => {
    let obj: IObj = {
      x: Date.parse(price.time_close),
      y: [price.open, price.high, price.low, price.close],
    };
    return obj;
  });

  const themeColor = isToggled ? 'dark' : 'light';
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: priceData!,
            },
          ]}
          options={{
            chart: {
              type: 'candlestick',
              height: 350,
            },
            theme: {
              mode: themeColor,
            },
            title: {
              text: 'CandleStick Chart',
              align: 'left',
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
