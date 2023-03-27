import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import { COLORS } from "../../common/Consts";
import StylesCommon from './StylesCommon';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type LoginPopupProps = PropsWithChildren<{
  visible: boolean,
  updateVisible: Function,
}>

const LoginPopup = (props: LoginPopupProps): JSX.Element => {
  console.log(props);

  return (
    <View style={styles.container}>
      <Dialog
        dialogStyle={[StylesCommon.fullScreen, styles.dialogStyle]}
        visible={props.visible}
        dialogTitle={(
          <View style={styles.dialogStyleHeader}>
            <TouchableOpacity onPress={() => props.updateVisible(false)}>
              <Text style={{ width: '100%', textAlign: 'right', color: COLORS.text_white }}>
                <AntDesignIcon name="closecircle" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        )}
        dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
      >
        <DialogContent style={styles.DialogContent}>
          <ScrollView style={{ width: '100%' }}>
            <View style={{ alignItems: 'center' }}>
              {/* logo */}
              <View style={styles.logo}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: COLORS.text_primary }}>Logo Here</Text>
                <View style={{ bottom: -65 }}>
                  <Text style={styles.logoText}>faladdin</Text>
                  <Text style={{ color: COLORS.text_white, letterSpacing: 3 }}>MAGIC FOTUNE</Text>
                </View>
              </View>

              <Text style={styles.loginOrCreate}>Login or create an account</Text>

              <TouchableOpacity style={styles.button}>
                <View>
                  <Text style={{ color: COLORS.text_secondary }}>
                    <AntDesignIcon name="facebook-square" size={15} />
                    &nbsp;Continue with Facebook</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <View>
                  <Text style={{ color: COLORS.text_secondary }}>
                    <AntDesignIcon name="apple1" size={15} />
                    &nbsp;Continue with Apple</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <View>
                  <Text style={{ color: COLORS.text_secondary }}>
                    <AntDesignIcon name="google" size={15} />
                    &nbsp;Continue with Google</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.buttonEmail]}>
                <View>
                  <Text style={{ color: COLORS.text_black }}>Continue with gmail</Text>
                </View>
              </TouchableOpacity>

              <Text style={{ color: COLORS.text_secondary, fontSize: 10, marginVertical: 10 }}>
                By creating an account or logging in, I hereby agree that I have read and accepted&nbsp;
                <Text style={{ color: COLORS.text_primary }}>
                  Terms of Use and Privacy Policy.
                </Text>
              </Text>
            </View>
          </ScrollView>
        </DialogContent>
      </Dialog>
    </View>
  );
}

export default LoginPopup;

const styles = StyleSheet.create({
  container: {

  },
  dialogStyle: {
    backgroundColor: COLORS.background_primary,
  },
  dialogStyleHeader: {
    padding: 10,
    paddingHorizontal: 20,
  },
  DialogContent: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: 100,
    marginVertical: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: COLORS.text_primary,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  logoText: {
    color: COLORS.text_primary,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  loginOrCreate: {
    marginTop: 70,
    marginBottom: 30,
    color: COLORS.text_white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: COLORS.text_white,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginBottom: 10,
  },
  buttonEmail: {
    backgroundColor: COLORS.text_primary,
    borderColor: COLORS.text_primary,
  }
});
