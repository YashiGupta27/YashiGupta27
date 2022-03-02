import React from 'react';

import GoogleLogin from 'react-google-login';
export default function Google() {
  const clientId =
    '893902398301-sgu6dqlab111tkbt22ob6d2fqs19sesf.apps.googleusercontent.com';

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      ,
    </div>
  );
}