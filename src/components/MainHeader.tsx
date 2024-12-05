import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

type MainHeaderProps = {
  search: string;
  onSearchChange: (text: string) => void;
  onSearch: () => void;
};

export const MainHeader = (props: MainHeaderProps) => {
  return null;
  // return (
  //   <View style={styles.header}>
  //     <View style={styles.headerTop}>
  //       <Text style={styles.headerTitle}>Messages</Text>
  //       <View style={styles.headerRight}>
  //         <TouchableOpacity style={styles.headerRightMoreButton}>
  //           <Ellipsis size={20} color={colors.zinc["100"]} />
  //         </TouchableOpacity>

  //         <TouchableOpacity style={styles.headerRightWriteButton}>
  //           <SquarePen size={20} color={colors.zinc["100"]} />
  //         </TouchableOpacity>
  //       </View>
  //     </View>

  //     <View style={styles.headerSearchContainer}>
  //       <Search size={20} color={colors.zinc[400]} />
  //       <TextInput
  //         placeholder="Search"
  //         style={styles.searchInput}
  //         numberOfLines={1}
  //         multiline={false}
  //         keyboardType="web-search"
  //         onChangeText={props.onSearchChange}
  //         value={props.search}
  //         onSubmitEditing={props.onSearch}
  //         blurOnSubmit
  //         placeholderTextColor={colors.zinc[500]}
  //       />
  //       <Mic size={20} color={colors.zinc[400]} />
  //     </View>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 46,
    backgroundColor: colors.zinc[100],
    gap: 10,
    paddingBottom: 15,
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.zinc[900],
  },

  headerRight: {
    flexDirection: "row",
    gap: 24,
  },

  headerRightMoreButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.zinc["300"],
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  headerRightWriteButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.blue["normal"],
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  headerSearchContainer: {
    flexDirection: "row",
    gap: 8,
    height: 36,
    backgroundColor: colors.zinc[200],
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  searchInput: {
    flex: 1,
  },
});
