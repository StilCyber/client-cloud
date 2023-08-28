import Navbar from "./components/navbar/Navbar"
import "./app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registration from "./components/registration/Registration"
import Login from "./components/login/Login"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { auth } from "./actions/user"
import Disk from "./components/disk/Disk"
import Profile from "./components/profile/Profile"

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])
  
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        {!isAuth ? (
          <Routes>
            <Route path="/registration" Component={Registration} />
            <Route path="/login" Component={Login} />
            {/* <Redirect to="/login" /> */}
            {/* <Route
                path="*"
                element={<Navigate to="/login" replace />}
            /> */}
          </Routes>
        ) : (
          <Routes>
            <Route path="/" Component={Disk} />
            <Route path="/profile" Component={Profile} />
            {/* <Redirect to="/" /> */}
          </Routes>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
