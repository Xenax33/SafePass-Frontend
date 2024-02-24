import React, { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha({captchaVerified, setCaptchaVerified}) {

  useEffect(() => {
    console.log(captchaVerified)
  });

  function onChange(value) {
    console.log("Captcha value:", value);
    if (value !== null) {
      setCaptchaVerified(!captchaVerified);
    } else {
      setCaptchaVerified(true);
    }
  }

  return <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHAKEY} onChange={onChange} />;
}

export default Recaptcha;
