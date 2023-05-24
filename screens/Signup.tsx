import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import TopBar1 from "../components/TopBar1";
import Image1 from "../components/Image1";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <TopBar1 title="Sign Up" />
      <Image1 title="Welcome!" rectangle3347MarginTop={-20.5} />
      <Input title="Full Name" propTop={219} />
      <Input title="Email Address" propTop={305} />
      <Input title="Password" propTop={391} />
      <Pressable
        style={[styles.input, styles.inputPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.title, styles.titleTypo]}>Confirm Password</Text>
        <View style={[styles.textfield, styles.button1FlexBox]}>
          <Text style={styles.text}>Please Enter</Text>
        </View>
      </Pressable>
      <View style={[styles.button, styles.inputPosition]}>
        <View style={[styles.button1, styles.button1FlexBox]}>
          <Text style={[styles.title1, styles.titleTypo]}>Sign Up Now</Text>
        </View>
      </View>
      <Image
        style={[styles.signupChild, styles.inputPosition]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  button1FlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  title: {
    color: Color.typePrimary,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  text: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_400,
    textAlign: "left",
    flex: 1,
  },
  textfield: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    flexDirection: "row",
    padding: Padding.p_5xs,
    marginTop: 4,
  },
  input: {
    top: 477,
    padding: Padding.p_xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  title1: {
    color: Color.white,
    textAlign: "left",
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
  },
  button: {
    top: 847,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
  },
  signupChild: {
    top: 753,
    height: 47,
  },
  signup: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default Signup;
