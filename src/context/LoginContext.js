import { useState, createContext, useContext, useEffect } from "react";

export const LoginContext = createContext([]);

export const useLogin = () => useContext(LoginContext);

const INITIAL_STATE = {
  buyer: {
    email: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  cartData: {
    addedItems: [],
    totalPrice: 0,
    prodQty: 0,
    totalQty: 0,
  },
  dateRegister: "",
  dateUpdate: "",
  id: "",
  isAdmin: false,
  isBuyer: false,
  isSeller: false,
  lastLogin: "",
  lastUpdate: "",
};

const setSessionStorage = (userData) => {
  sessionStorage.setItem("user", JSON.stringify(userData));
};

export const LoginProvider = ({ children }) => {
  const [userData, setuserData] = useState(INITIAL_STATE);

  useEffect(() => {
    const userDataSaved = sessionStorage.getItem("user");

    if (!userDataSaved) {
      setSessionStorage(INITIAL_STATE);
    } else {
      setuserData(JSON.parse(userDataSaved));
    }
  }, []);

  const registerUser = (formData) => {
    const newUser = {
      ...INITIAL_STATE,
      dateRegister: new Date().toLocaleDateString(),
      dateUpdate: new Date().toLocaleDateString(),
      id: '',
      isBuyer: true,
      isSeller: false,
      lastLogin: new Date().toLocaleDateString(),
      lastUpdate: new Date().toLocaleDateString(),
      buyer: {
        ...INITIAL_STATE.buyer,
        email: formData.email,
        password: formData.password,
        name: formData.name,
        lastname: formData.lastname,
        phone: formData.phone
      },
      }
      console.log("newUser", newUser);

    // setSessionStorage(newUser);
    // setuserData(newUser);
  };

  return (
    <LoginContext.Provider
      value={{ userData, registerUser }}
    >
      {children}
    </LoginContext.Provider>
  );
};
