import React, { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Recaptcha({captchaVerified, setCaptchaVerified}) {


  useEffect(() => {
    console.log(captchaVerified)
  });
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  function onChange(value) {
    console.log("Captcha value:", value);
    if (value !== null) {
      setCaptchaVerified(!captchaVerified);
    } else {
      setCaptchaVerified(true);
    }
  }

  return <ReCAPTCHA sitekey={key} onChange={onChange} />;
}

export default Recaptcha;
