import { Routes, Route } from 'react-router-dom';
import MainLayout from './common/layout/Main.layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={'Main Layout'} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
