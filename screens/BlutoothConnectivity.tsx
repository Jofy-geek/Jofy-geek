import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import Input from "../components/Input";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BlutoothConnectivity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.blutoothConnectivity}>
      <TopBar
        title="Bluetooth"
        onTopBarPress={() => navigation.navigate("Login")}
      />
      <View style={[styles.image, styles.tabsPosition]}>
        <View style={[styles.img, styles.imgLayout]} />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={[styles.selection, styles.tabsPosition]}>
        <Text style={styles.title}>Select a device</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={styles.text}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>Device 1</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>Device 2</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={styles.text}>Device 3</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.tabsPosition]}
        onPress={() => navigation.navigate("Sensor")}
      >
        <View style={styles.button1}>
          <Text style={styles.title1}>Connect</Text>
        </View>
      </Pressable>
      <View style={[styles.tabs, styles.tabsPosition]}>
        <View style={[styles.tab, styles.tabBorder]}>
          <View style={[styles.background, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>😀</Text>
          <Text style={[styles.title2, styles.title2Position]} numberOfLines>
            Text
          </Text>
        </View>
        <View style={[styles.tab1, styles.tabBorder]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>⚙️</Text>
          <Text style={[styles.title2, styles.title2Position]} numberOfLines>
            Settings
          </Text>
        </View>
        <View style={[styles.tab1, styles.tabBorder]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>🔊</Text>
          <Text style={[styles.title2, styles.title2Position]} numberOfLines>
            Volume
          </Text>
        </View>
        <View style={[styles.tab1, styles.tabBorder]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>🔋</Text>
          <Text style={[styles.title2, styles.title2Position]} numberOfLines>
            Battery
          </Text>
        </View>
      </View>
      <Input title="Other device name" propTop={918} />
      <View style={[styles.bullet, styles.imgLayout]}>
        <View style={[styles.background4, styles.icon4Position]} />
        <Text style={[styles.title6, styles.iconPosition]}>
          Connected Devices
        </Text>
        <Text style={[styles.subtitle, styles.title2Position]}>
          3 devices connected
        </Text>
        <Text style={[styles.icon4, styles.icon4Position]}>💻</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  imgLayout: {
    width: 336,
    position: "absolute",
  },
  chipFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_7xs,
  },
  tabBorder: {
    padding: Padding.p_9xs,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: Border.br_7xs,
    flex: 1,
  },
  backgroundPosition: {
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
  },
  iconFlexBox: {
    marginTop: 4,
    display: "flex",
    textAlign: "center",
    color: Color.gray_300,
    justifyContent: "center",
    alignItems: "center",
  },
  title2Position: {
    zIndex: 2,
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  icon4Position: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    zIndex: 1,
    fontFamily: FontFamily.robotoRegular,
  },
  img: {
    top: 12,
    left: 12,
    backgroundColor: Color.gainsboro,
    height: 336,
    borderRadius: Border.br_7xs,
    width: 336,
  },
  image1Icon: {
    top: 69,
    left: 78,
    width: 199,
    height: 199,
    position: "absolute",
  },
  image: {
    top: 88,
    height: 360,
    overflow: "hidden",
  },
  title: {
    textAlign: "left",
    color: Color.typePrimary,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.typePrimary,
  },
  chip: {
    display: "none",
    justifyContent: "center",
  },
  chip1: {
    marginLeft: 8,
    justifyContent: "center",
  },
  chipGroup: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  selection: {
    top: 448,
    padding: Padding.p_xs,
    alignItems: "center",
    overflow: "hidden",
  },
  title1: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  button: {
    top: 538,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
  },
  background: {
    marginLeft: -24,
    height: 48,
    left: "50%",
    top: 4,
    zIndex: 0,
    width: 48,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  icon: {
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    zIndex: 1,
    fontFamily: FontFamily.robotoRegular,
    width: 48,
    marginTop: 4,
    display: "flex",
  },
  title2: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    height: 28,
    marginTop: 4,
    display: "flex",
    textAlign: "center",
    color: Color.gray_300,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tab: {
    display: "none",
  },
  background1: {
    marginLeft: -24.33,
    height: 48,
    left: "50%",
    top: 4,
    zIndex: 0,
    width: 48,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  tab1: {
    marginLeft: 8,
  },
  tabs: {
    top: 612,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
  },
  background4: {
    marginTop: -14,
    width: 32,
    height: 32,
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    top: "50%",
  },
  title6: {
    zIndex: 1,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.typePrimary,
    alignSelf: "stretch",
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_200,
    textAlign: "left",
  },
  icon4: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    zIndex: 3,
    textAlign: "center",
    color: Color.gray_300,
    top: "50%",
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  bullet: {
    top: 722,
    left: 8,
    paddingLeft: Padding.p_21xl,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
  },
  blutoothConnectivity: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    flex: 1,
  },
});

export default BlutoothConnectivity;
