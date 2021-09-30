import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import sampleData from "../../shared/sampleData";
import DieticianItem from "./DieticianItem";

export default function DieticianList({ action }) {
  const renderItem = ({ item }) => (
    <DieticianItem item={item} action={action} />
  );

  return (
    <View>
      <FlatList
        // ItemSeparatorComponent={() => (
        //   <View style={{ width: 10, backgroundColor: "transparent" }} />
        // )}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        data={sampleData}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
