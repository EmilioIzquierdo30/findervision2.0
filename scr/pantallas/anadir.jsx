import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
const itemsData = [
  {
    category: "Plantas Medicinales",
    items: [
      //{ id: 1, name: "Fresas", price: 1.0 },
      //{ id: 2, name: "Manzanas", price: 1.0 },
      //{ id: 3, name: "Plátano", price: 1.0 },
    ],
  }
  //{
    //category: "Panadería y postres",
    //items: [
      //{ id: 6, name: "Chocolate", price: 1.0 },
    //],
  //},
];

const AnadirPlanta = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const filteredItems = itemsData.filter((category) =>
    category.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(category) => category.category}
        renderItem={({ item: category }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            {category.items.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemContainer}
                onPress={() => handleToggleItem(item)}
              >
                <Text
                  style={[
                    styles.itemText,
                    selectedItems.includes(item) && styles.itemSelected,
                  ]}
                >
                  {item.name} - € {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 10,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
  itemSelected: {
    textDecorationLine: "line-through",
    color: "green",
  },
});

export default AnadirPlanta;