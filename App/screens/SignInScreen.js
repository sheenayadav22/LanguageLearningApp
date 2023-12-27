import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Input, Text, ThemeContext, withTheme } from 'react-native-elements';

import form from '../styles/form.component.style';
import { AuthContext } from '../components/contexts/AuthContext';

function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, GoogleSignIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <Card>
        <Card.Title>
          Sign In
        </Card.Title>
        <Card.Divider/>
        <Input
          inputContainerStyle={form.inputContainer}
          containerStyle={form.inputView}
          inputStyle={form.inputText}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          inputContainerStyle={form.inputContainer}
          containerStyle={form.inputView}
          inputStyle={form.inputText}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={[ form.termsText, { color: theme.colors.grey3 } ]}>By clicking Create Account, I agree to the Terms of Service and Privacy Policy</Text>
        <Button
          buttonStyle={form.button}
          title="CREATE ACCOUNT"
          onPress={() => signIn({ email, password })} />
        <Button
          title="Sign in with Google"
          buttonStyle={{marginTop: '2%', backgroundColor:'#bbb'}}
          onPress={async () => GoogleSignIn()}
        />
      </Card>
    </SafeAreaView>
  );
}

export default withTheme(SignInScreen);
