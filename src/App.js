import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { useState } from "react";
import { Directions } from "./pages/Directions";
import { Passengers } from "./pages/Passengers";
import { Cities } from "./pages/Cities";

function App() {
  localStorage.setItem("token","eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyRjkwNTBGQUFEQzMxQ0VDNkM5QTk4OTFEQzZGRjMzMjQ3NkI1QTBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6Imd2a0ZENnJjTWM3R3lhbUpIY2JfTXlSMnRhQSJ9.eyJuYmYiOjE3MTYxMjAwMjcsImV4cCI6MTcxNjIwNjQyNywiaXNzIjoiaHR0cHM6Ly9zc28uYnJvbmV3LnJ1IiwiY2xpZW50X2lkIjoiNWI2YTZkNWQtYzA3My00ZjZlLWE0NWItNjk3ZTU1Yjk0Njc4Iiwic3ViIjoiMDRhZTNiYmEtNmJjMC00MDgzLWI3NjUtMTg1ZWM3YzgwNjIzIiwiYXV0aF90aW1lIjoxNzE1MTQxMTQ2LCJpZHAiOiJsb2NhbCIsInNpZCI6IjJCNzZCODczODczMkE4RkY3OEZENjUxQTlEMUFDNjE4IiwiaWF0IjoxNzE2MTIwMDI3LCJzY29wZSI6WyJlbWFpbCIsIm9wZW5pZCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.GtK1tq0gk6_gcnxl7k2rR5oCU5OinQEowCPgaPvhYhp7F8pnJkNEPx5NuRUv_XEP6FuLu_IH5P5dQ3dzGDd_2WLE9UHOdfDVXO90cs7TGh6oclCVHoKOiEPFBJIlfOf0bXSQcYH-fwGupzOaypF4yNSqEoHWHERUXjP033Uh9gEFx_lDk5XYLu5TdA5snR7CINcgv6dVYLi2yl8BBubHwN_vAQcKSP0uZRXK6S-JIwsmQccOaj-oa5GyozSpHmyJr1DDEgC6UlfkO3puMGQbry2rS921rOyBJ7yTviQL_lOxLcFU_f8JZ_FoTsnTD61I1fZJhwGyseFqaEGCe3ScrBUfHcGalqMigmBlT93RZGHCDaEkq3M0VPPoyHdg-0dLpFL627NIrKYGCCrv0XzDHMvDZ-X2lZcqom1vao_NpaQ87eMwsa9gtRi5BX1hTnzV9SXuOeSwGFW_YttaqRzwhgZW-IUWDJBm995l1HtaCmSY4OsxJmBlLh5vaRseq-ZShZxGzxeBOvMXi7q1pbIDvFXPyvAJYMvqkMtM2n6sz_H0sPrQhh-8QhEQ5E_0Vl9w5KEJiGoD4NUZik74_1OXdInRC5vyFyJc3_QsEgcHaoTvfNkMg7-uAYOjKwMDwAWYpoPBIlJjVuANryBW32Y-s2ygMXDE1SHh5NjepKlUtKs") 
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <Routes>
      {/* создаю приватные роуты и переадрессация на другой роут в случае авторизации */}
      <Route element={ <Navigate to={'/drivers'} replace />} path="/login"/>
      <Route element={ <Home />} path="/drivers"/>
      <Route element={ <Directions /> } path="/directions"/>
      <Route element={ <Passengers /> } path="/passengers"/>
      <Route element={ <Cities /> } path="/cities"/>
      <Route element={<Navigate to={'/drivers'} replace/>} path="/"/>
    </Routes>
  );
}

export default App;
