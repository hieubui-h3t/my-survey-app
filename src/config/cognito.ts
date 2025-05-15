import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'ap-southeast-2_ki0glJQVf',
      userPoolClientId: '3djco8bi5tlle7hcpn6fvj1ao0',
      signUpVerificationMethod: 'code',
      loginWith: {
        email: true,
        phone: true,
        username: true
      }
    }
  }
}); 