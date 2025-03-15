import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import WeatherReportsTable from './pages/weather-reports-table.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Flowbite} from "flowbite-react";
import flowbiteTheme from "./style/flowbite-theme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MenuLayout} from "./components/menu/menu-layout.tsx";
import {CreateReportPage} from "./pages/create-report-page.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <Flowbite theme={{theme: flowbiteTheme}}>
              <BrowserRouter>
                  <Routes>
                      <Route
                          path="/"
                          element={
                              <MenuLayout width="w-full">
                                  <WeatherReportsTable />
                              </MenuLayout>
                          }
                          index
                      />
                      <Route
                          path="/create"
                          element={
                              <MenuLayout width="w-full">
                                  <CreateReportPage />
                              </MenuLayout>
                          }
                          index
                      />
                  </Routes>
              </BrowserRouter>
          </Flowbite>
      </QueryClientProvider>
  </StrictMode>,
)
