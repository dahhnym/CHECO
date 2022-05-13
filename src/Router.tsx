import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';

interface ITheme {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
}

function Router({ isToggled, setIsToggled }: ITheme) {
  const title = 'CHECO';

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Coins
              isToggled={isToggled}
              setIsToggled={setIsToggled}
              title={title}
            />
          }
        />
        <Route
          path="/:coinId"
          element={
            <Coin
              isToggled={isToggled}
              setIsToggled={setIsToggled}
              title={title}
            />
          }
        >
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart isToggled={isToggled} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
