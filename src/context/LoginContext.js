import { useState, createContext, useContext, useEffect } from "react";
import {
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase";

export const LoginContext = createContext([]);

export const useLogin = () => useContext(LoginContext);

const INITIAL_STATE = {
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
    isLogged: false,
    id: ""
};



const setSessionStorage = (item, data) => {
  sessionStorage.setItem(item, JSON.stringify(data));
};


export const LoginProvider = ({ children }) => {
  const [userData, setuserData] = useState(INITIAL_STATE);

  useEffect(() => {
    const userDataSaved = sessionStorage.getItem("user");
    if (!userDataSaved) {
      setSessionStorage('user',INITIAL_STATE);
    } else {
      setuserData(JSON.parse(userDataSaved));
    }
  }, []);


  const registerUser = (formData) => {
    const newUser = {
      dateRegister: new Date().toLocaleDateString(),
      dateUpdate: new Date().toLocaleDateString(),
      id: Math.random().toString(36).substr(2, 9),
      isBuyer: true,
      isSeller: false,
      isAdmin: false,
      lastLogin: new Date().toLocaleDateString(),
      lastUpdate: new Date().toLocaleDateString(),
      cartData: JSON.parse(sessionStorage.getItem("cart")),
      buyer: {
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        email: formData.email,
        password: formData.password,
        name: formData.name,
        lastname: formData.lastname,
        phone: formData.phone,
      },
    };
    return setDoc(doc(db, "users", newUser.id), newUser);
  };

  const loginUser = (formData) => {
    return new Promise((resolve, reject) => {
      getDocs(
        query(
          collection(db, "users"),
          where("buyer.email", "==", formData.email)
        )
      )
        .then((res) => {
          const user = res.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          if (user.length > 0) {
            if (user[0].buyer.password === formData.password) {
              const userData = {
                cart: user[0].cartData,
                user: {
                  ...user[0].buyer,
                  isLogged: true,
                  id: user[0].id
                }
              };
              setSessionStorage('user', userData.user);
              setSessionStorage('cart', userData.cart);
              setuserData(userData.user);
              resolve(userData.user);
            } else {
              reject("Contraseña Incorrecta");
            }
          } else {
            reject("No se encontró el usuario");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return (
    <LoginContext.Provider value={{ userData, registerUser, loginUser }}>
      {children}
    </LoginContext.Provider>
  );
};
