import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import BulletList from "../components/BulletList";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Sensor1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sensor}
      onPress={() => navigation.navigate("Help")}
    >
      <TopBar
        title="Ultrasonic Sensor, Water Sensor, SOS Real Time Updates"
        topTop={32}
        onTopBarPress={() => navigation.navigate("BlutoothConnectivity")}
      />
      <View style={[styles.tabs, styles.tabsPosition]}>
        <View style={[styles.tab, styles.tabBorder]}>
          <View style={[styles.background, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>😀</Text>
          <Text style={[styles.title, styles.titlePosition]} numberOfLines>
            Text
          </Text>
        </View>
        <View style={[styles.tab1, styles.tabBorder]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>🦇</Text>
          <Text style={[styles.title, styles.titlePosition]} numberOfLines>
            Ultrasonic Sensor
          </Text>
        </View>
        <View style={[styles.tab1, styles.tabBorder]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>🌊</Text>
          <Text style={[styles.title, styles.titlePosition]} numberOfLines>
            Water Sensor
          </Text>
        </View>
        <View style={[styles.tab1, styles.tabBorder]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <Text style={[styles.icon, styles.iconFlexBox]}>🆘</Text>
          <Text style={[styles.title, styles.titlePosition]} numberOfLines>
            SOS
          </Text>
        </View>
      </View>
      <BulletList
        title="Ultrasonic Sensor"
        title1="Real Time Distance Updates"
        subtitle="Distance Range: 2cm - 400cm"
        icon="📏"
        title2="High Accuracy"
        subtitle1="±1cm"
        icon1="🎯"
        title3="Easy to Install"
        subtitle2="With mounting hole"
        icon2="🔧"
      />
      <BulletList
        title="Water Sensor"
        title1="Real Time Detection"
        subtitle="Detect water leakage instantly"
        icon="💦"
        title2="Wide Detection Range"
        subtitle1="Detect water up to 3m away"
        icon1="🌊"
        title3="Low Power Consumption"
        subtitle2="Long-term use on batteries"
        icon2="🔋"
        titleTop={371}
        titleLeft={0}
      />
      <View style={[styles.bulletList, styles.tabsPosition]}>
        <Text style={[styles.title4, styles.titleFlexBox]}>SOS</Text>
        <View style={[styles.bullet, styles.bulletSpaceBlock]}>
          <View style={[styles.background4, styles.icon4Position]} />
          <Text style={[styles.title5, styles.titleFlexBox]}>Title</Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>Subtitle</Text>
          <View style={styles.underline} />
          <Text style={[styles.icon4, styles.icon4Position]}>😀</Text>
        </View>
        <View style={styles.bulletSpaceBlock}>
          <View style={[styles.background4, styles.icon4Position]} />
          <Text style={[styles.title5, styles.titleFlexBox]}>
            One-button Emergency
          </Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>
            Instantly sends distress signal
          </Text>
          <View style={styles.underline} />
          <Text style={[styles.icon4, styles.icon4Position]}>🆘</Text>
        </View>
        <View style={styles.bulletSpaceBlock}>
          <View style={[styles.background4, styles.icon4Position]} />
          <Text style={[styles.title5, styles.titleFlexBox]}>
            Real Time Location Sharing
          </Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>
            Share location with trusted contacts
          </Text>
          <View style={styles.underline} />
          <Text style={[styles.icon4, styles.icon4Position]}>📍</Text>
        </View>
        <View style={styles.bulletSpaceBlock}>
          <View style={[styles.background4, styles.icon4Position]} />
          <Text
            style={[styles.title5, styles.titleFlexBox]}
          >{`Waterproof & Durable`}</Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>
            For outdoor emergencies
          </Text>
          <View style={styles.underline} />
          <Text style={[styles.icon4, styles.icon4Position]}>🚣</Text>
        </View>
      </View>
      <Image
        style={[styles.sensorChild, styles.tabsPosition]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabsPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  tabBorder: {
    padding: Padding.p_9xs,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    alignItems: "center",
    flex: 1,
  },
  backgroundPosition: {
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
  },
  iconFlexBox: {
    marginTop: 4,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  titlePosition: {
    zIndex: 2,
    fontFamily: FontFamily.robotoRegular,
  },
  titleFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  bulletSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_21xl,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  icon4Position: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  background: {
    marginLeft: -24,
    height: 48,
    width: 48,
    left: "50%",
    top: 4,
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  icon: {
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    zIndex: 1,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    marginTop: 4,
    justifyContent: "center",
    display: "flex",
    color: Color.gray_300,
    width: 48,
  },
  title: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    height: 28,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.gray_300,
    marginTop: 4,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  tab: {
    display: "none",
    alignItems: "center",
  },
  background1: {
    marginLeft: -24.33,
    height: 48,
    width: 48,
    left: "50%",
    top: 4,
    zIndex: 0,
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  tab1: {
    marginLeft: 8,
    alignItems: "center",
  },
  tabs: {
    top: 88,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
  },
  title4: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray_300,
    textAlign: "left",
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
  title5: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.typePrimary,
    zIndex: 1,
    fontFamily: FontFamily.robotoRegular,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_200,
    zIndex: 2,
    fontFamily: FontFamily.robotoRegular,
  },
  underline: {
    bottom: 0,
    backgroundColor: Color.gray_100,
    width: 336,
    height: 1,
    zIndex: 3,
    left: 0,
    position: "absolute",
  },
  icon4: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    zIndex: 4,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    top: 561,
    height: 258,
    padding: Padding.p_xs,
    alignItems: "center",
  },
  sensorChild: {
    top: 757,
    height: 47,
  },
  sensor: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default Sensor1;
