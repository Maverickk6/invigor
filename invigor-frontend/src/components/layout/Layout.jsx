import React, { useState } from "react";
import bgImage from "../../../assets/invigorLogoWeb.png";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Layout(props) {
  const styles = {
    mainWrapper: `h-screen w-screen flex`,
    imageWrapper: `w-2/2 h-full flex flex-col items-center justify-center`,
    heading: `text-3xl`,
    paragraph: `p-6 w-2/3 text-center`,
    getAccount: `bg-transparent text-orange-500 font-semibold hover:text-white hover:bg-orange-500 py-2 px-4 border border-orange-600 hover:border-transparent rounded`,
    formWrapper: `w-1/2 h-full flex flex-col gap-1 bg-gray-200 pt-4 pb-4 pl-8 pr-14 mb-2`,
    haveAccount: `ml-auto mb-1 flex text-right items-center`,
    form: `flex flex-col gap-2 pr-16`,
  };

  let [form, setForm] = useState('login');

  const setLogin = () => {
      setForm(form = 'login')
  }

  const setRegister = () => {
      setForm(form = 'register');
  }

  return (
    <div className={styles.mainWrapper}>
      {/* //Main Image */}

      <div className={styles.imageWrapper}>
        <img src={bgImage} />
        <p className={styles.heading}>
          Medical Practice Information System Platform
        </p>
        <p className={styles.paragraph}>
          Designing Comprehensive, agile and business aligned medical programs
          that allow continuous management of maturity, threat, and risk
          enabling smart healthwise decisions.
        </p>
        <button onClick={ setRegister }
        className={styles.getAccount}>Get Your Account</button>
      </div>

      {/* //Registration form */}

      <div className={styles.formWrapper}>
        <div className={styles.haveAccount}>
          {form === 'register' ? 
            <>
              <p>Already have an account? </p>
              <button
                onClick={setLogin}
                className="bg-orange-500 ml-6 py-2 px-4 text-white rounded"
              >
               Login
              </button>
            </>
           : 
            <>
              <p>Dont have an account? </p>
              <button
                onClick={ setRegister }
                className="bg-orange-500 ml-6 py-2 px-4 text-white rounded"
              >
                Register
              </button>
            </>
          }
        </div>
        {/* {props.children} */}
        { form === 'login' && <Login /> }
        { form === 'register' && <Register />}
      </div>
    </div>
  );
}
