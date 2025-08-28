import React from "react";
import { Text } from "react-native";

import style from "./style";
import { FunctionComponent } from "react";

interface TitleProps {
  title: string;
}

const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return <Text style={style.title}>{title}</Text>;
};

export default Title;
