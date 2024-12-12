import { Routes, Route } from 'react-router-dom';
import MainLayout from './common/layout/Main.layout';
import Home from './features/home/pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
