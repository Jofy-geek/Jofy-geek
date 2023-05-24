import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import Image1 from "../components/Image1";
import Tab1 from "../components/Tab1";
import Input from "../components/Input";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Help = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.help}>
      <TopBar
        title="Help and Support"
        topTop={44}
        onTopBarPress={() => navigation.navigate("Sensor")}
      />
      <Image1 title="Contact us if you need help with anything!" />
      <View style={[styles.tabs, styles.tabsPosition]}>
        <Tab1 icon="😀" title="Text" />
        <Tab1
          icon="❓"
          title="FAQ"
          propDisplay="unset"
          propMarginLeft={8}
          propMarginLeft1={-24}
        />
        <Tab1
          icon="📞"
          title="Contact Us"
          propDisplay="unset"
          propMarginLeft={8}
          propMarginLeft1={-24}
        />
      </View>
      <View style={styles.selection}>
        <Text style={[styles.title, styles.textClr]}>Choose a topic</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Account</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Payment</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Technical Issue</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Other</Text>
          </View>
        </View>
      </View>
      <Input title="How can we assist you?" />
      <View style={[styles.button, styles.tabsPosition]}>
        <View style={[styles.button1, styles.chipFlexBox]}>
          <Text style={[styles.title1, styles.titleTypo]}>Submit</Text>
        </View>
      </View>
      <Image
        style={[styles.helpChild, styles.tabsPosition]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabsPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.typePrimary,
    textAlign: "left",
  },
  chipFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  tabs: {
    top: 219,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  title: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  chip: {
    display: "none",
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
  },
  chip1: {
    marginLeft: 8,
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
  },
  chipGroup: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  selection: {
    top: 323,
    padding: Padding.p_xs,
    alignItems: "center",
    width: 360,
    left: 0,
    position: "absolute",
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
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xs,
  },
  button: {
    top: 499,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
  },
  helpChild: {
    top: 753,
    height: 47,
  },
  help: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Help;
