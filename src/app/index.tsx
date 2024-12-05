import { Message } from "@/components/Message";
import { colors } from "@/theme/colors";
import { messagesArray } from "@/utils/messages";
import Constants from "expo-constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [search, setSearch] = React.useState("");
  const [messages, setMessages] = React.useState(messagesArray);

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const handleSearch = () => {
    setMessages(
      messagesArray.filter(
        (message) =>
          message.name.includes(search) || message.message.includes(search)
      )
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Mensagens",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            hideWhenScrolling: true,
            placeholder: "Pesquisar",
            hideNavigationBar: true,
            obscureBackground: true,
            onSearchButtonPress: ({ nativeEvent }) => {
              handleSearchChange(nativeEvent.text);
              handleSearch();
            },
          },
        }}
      />
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor={colors.zinc[100]} />

        <FlatList
          data={messages}
          style={{ flex: 1 }}
          contentContainerStyle={styles.messageContainer}
          renderItem={({ item }) => {
            return <Message key={item.id} data={item} />;
          }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.zinc[100],
  },

  messageContainer: {
    flex: 1,
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: 44,
  },
});
