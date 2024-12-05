import { ConversationMessage } from "@/components/ConversationMessage";
import { colors } from "@/theme/colors";
import { conversationMessages, messagesArray } from "@/utils/messages";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { AudioLines } from "lucide-react-native";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const userData = messagesArray.find((item) => item.id === id);

  const handleBack = () => {
    router.back();
  };

  if (!userData) {
    handleBack();
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerBackTitle: userData?.name,
          headerTitle() {
            return (
              <View style={styles.headerUserInfo}>
                <Image
                  style={styles.headerUserAvatar}
                  source={userData?.avatar}
                />
              </View>
            );
          },
        }}
      />
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === "ios"}
        keyboardVerticalOffset={80}
      >
        <View style={styles.container}>
          <FlatList
            data={conversationMessages}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return <ConversationMessage data={item} />;
            }}
            contentContainerStyle={{
              padding: 16,
              gap: 10,
            }}
          />

          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.zinc[400]}
                placeholder="To: company name"
              />
              <TouchableOpacity style={styles.iconContainer}>
                <AudioLines size={24} color={colors.zinc["600"]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.zinc[100],
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.zinc["200"],
    padding: 16,
    paddingTop: 46,
  },
  headerBackButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  headerUserInfo: {
    alignItems: "center",
    gap: 4,
  },
  headerUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    resizeMode: "cover",
  },
  headerUserName: {
    fontSize: 11,
    lineHeight: 13,
    color: colors.zinc["800"],
  },

  inputWrapper: {
    width: "100%",
    backgroundColor: colors.zinc[50],
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  inputContainer: {
    flexDirection: "row",
    gap: 8,
    height: 32,
    borderWidth: 1,
    borderColor: colors.zinc[300],
    borderRadius: 32,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    flex: 1,
  },
  iconContainer: {},
});
