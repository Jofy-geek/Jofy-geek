import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type InputType = {
  title?: string;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Input = memo(({ title, propTop }: InputType) => {
  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.input, inputStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textfield}>
        <Text style={styles.text}>Please Enter</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.typePrimary,
    textAlign: "left",
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_400,
    textAlign: "left",
  },
  textfield: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    flexDirection: "row",
    padding: Padding.p_5xs,
    alignItems: "center",
    marginTop: 4,
    alignSelf: "stretch",
  },
  input: {
    position: "absolute",
    top: 413,
    left: 0,
    width: 360,
    overflow: "hidden",
    padding: Padding.p_xs,
    justifyContent: "center",
  },
});

export default Input;
