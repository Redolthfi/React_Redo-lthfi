import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Impor useNavigate
import AllInput from "../Component/InputanLabel";

const LoginPages = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = () => {

    const dummyUser = { username: "user", password: "password" };

    if (username === dummyUser.username && password === dummyUser.password) {
      setLoggedIn(true);
      navigate("/CreateProductPages");
      alert("Login berhasil. Click OK untuk mengarahkan halaman, " + username + "!");
    } else {
      alert("Login gagal. Periksa kembali username dan password Anda.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="min-h-screen justify-center mx-auto items-center flex flex-col">
      <div className="bg-blue-600 p-2 mb-4 text-white font-semibold rounded-lg">
        <p>username="user"</p>
        <p>password="password"</p>
      </div>
      <div className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-80 h-64">
        <h1 className="text-center">Login</h1>
        {loggedIn ? (
          <div>
            <p>Selamat datang, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Username</p>
            <AllInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p>Password</p>
            <AllInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="border border-white p-2 rounded-lg">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPages;
