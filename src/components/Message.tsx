import { colors } from "@/theme/colors";
import { messagesArray } from "@/utils/messages";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MessageProps = {
  data: (typeof messagesArray)[0];
};

export const Message = (props: MessageProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/(stack)/message/${props.data.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={props.data.avatar} style={styles.avatar} />
      <View style={styles.textsContainer}>
        <View style={styles.textsFirstRow}>
          <Text style={styles.textSenderName}>{props.data.name}</Text>
          <Text style={styles.textSentTime}>{props.data.time}</Text>
        </View>
        <Text style={styles.textsMessagePreview} numberOfLines={2}>
          {props.data.message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.zinc["200"],
    paddingBottom: 8,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    resizeMode: "cover",
  },
  textsContainer: {
    flex: 1,
  },
  textsFirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSenderName: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.zinc["900"],
    lineHeight: 22,
  },
  textSentTime: {
    fontSize: 15,
    color: colors.zinc["600"],
    lineHeight: 20,
  },
  textsMessagePreview: {
    fontSize: 15,
    color: colors.zinc["600"],
    lineHeight: 20,
  },
});
