import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route element={<DefaultPage />}>
              <Route index element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </MantineProvider>
  )

}

export default App;