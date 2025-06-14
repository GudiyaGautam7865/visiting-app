// import React, { useState } from 'react';
// import {
//   View, Text, StyleSheet, TextInput, FlatList,
//   SafeAreaView, TouchableOpacity
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const historyData = [
//   { id: '1', date: 'Today', name: 'Suresh Khanna', type: 'Interview' },
//   { id: '2', date: 'Today', name: 'Preeti Ahuja', type: 'Health care' },
//   { id: '3', date: 'Today', name: 'Arav Sharma', type: 'IT' },

//   { id: '4', date: 'Yesterday', name: 'Priya Patel', type: 'Interview' },
//   { id: '5', date: 'Yesterday', name: 'Rohan Iyer', type: 'Interview' },
//   { id: '6', date: 'Yesterday', name: 'Nisha Reddy', type: 'Digital marketing' },
//   { id: '7', date: 'Yesterday', name: 'Sneha Chatterje', type: 'Training' },

//   { id: '8', date: '20/05/25', name: 'Eshan Praneet', type: 'Training' },
//   { id: '9', date: '20/05/25', name: 'Kesar Sharma', type: 'Interview' },
//   { id: '10', date: '20/05/25', name: 'Priya Patel', type: 'Health care' },
//   { id: '11', date: '20/05/25', name: 'Rohan Iyer', type: 'IT' },
//   { id: '12', date: '20/05/25', name: 'Nisha Reddy', type: 'Health care' },

//   { id: '13', date: '19/05/25', name: 'Priya Patel', type: 'Training' },
//   { id: '14', date: '19/05/25', name: 'Rohan Iyer', type: 'Interview' },
//   { id: '15', date: '19/05/25', name: 'Nisha Reddy', type: 'Health care' },
//   { id: '16', date: '19/05/25', name: 'Sneha Chatterje', type: 'IT' },
//   { id: '17', date: '19/05/25', name: 'Nisha Reddy', type: 'Health care' },
// ];

// export default function HistoryScreen() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const groupedData = historyData.reduce((acc, item) => {
//     if (!acc[item.date]) acc[item.date] = [];
//     acc[item.date].push(item);
//     return acc;
//   }, {});
//  const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <TouchableOpacity  >

//         <Text style={styles.title}>History</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Search Input */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={18} color="#8e8e93" style={styles.searchIcon} />
//         <TextInput
//           placeholder="Search"
//           placeholderTextColor="#8e8e93"
//           style={styles.searchInput}
//           onChangeText={setSearchQuery}
//           value={searchQuery}
//         />
//       </View>

//       {/* History List */}
//       <FlatList
//         data={Object.keys(groupedData)}
//         keyExtractor={(date) => date}
//         renderItem={({ item: date }) => (
//           <View style={styles.dateGroup}>
//             <Text style={styles.dateTitle}>{date}</Text>
//             {groupedData[date]
//               .filter((entry) =>
//                 entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 entry.type.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((entry) => (
//                 <View key={entry.id} style={styles.entryBox}>
//                   <Text style={styles.entryName}>{entry.name}</Text>
//                   <Text style={styles.entryType}>{entry.type}</Text>
//                 </View>
//               ))}
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0f111a',
//     paddingHorizontal: 20,
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     gap: 10,
//   },
//   title: {
//     fontSize: 22,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#161821',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     height: 40,
//     marginBottom: 20,
//     borderColor: '#30323c',
//     borderWidth: 1,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     color: '#fff',
//     fontSize: 14,
//   },
//   dateGroup: {
//     marginBottom: 20,
//   },
//   dateTitle: {
//     color: '#aaa',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   entryBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#1c1e2a',
//     paddingVertical: 12,
//     paddingHorizontal: 14,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   entryName: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   entryType: {
//     color: '#888',
//     fontSize: 13,
//     fontStyle: 'italic',
//   },
// });



import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, FlatList,
  SafeAreaView, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function HistoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const route = useRoute();
  const navigation = useNavigation();

  // Step 2: Get dynamic visitors from params
  const newVisitors = route.params?.visitorData || [];

  // Step 3: Combine static and new data (you can remove static if not needed)
  const allVisitors = [
    ...newVisitors,
    { id: '1', date: 'Today', name: 'Suresh Khanna', type: 'Interview' },
    { id: '2', date: 'Today', name: 'Preeti Ahuja', type: 'Health care' },
    // ... other existing data
  ];

  // Step 4: Group by date
  const groupedData = allVisitors.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#8e8e93" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#8e8e93"
          style={styles.searchInput}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      {/* List */}
      <FlatList
        data={Object.keys(groupedData)}
        keyExtractor={(date) => date}
        renderItem={({ item: date }) => (
          <View style={styles.dateGroup}>
            <Text style={styles.dateTitle}>{date}</Text>
            {groupedData[date]
              .filter((entry) =>
                entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                entry.type.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((entry, index) => (
                <View key={`${entry.id}-${index}`} style={styles.entryBox}>
                  <Text style={styles.entryName}>{entry.name}</Text>
                  <Text style={styles.entryType}>{entry.type}</Text>
                </View>
              ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f111a',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161821',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 20,
    borderColor: '#30323c',
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  dateGroup: {
    marginBottom: 20,
  },
  dateTitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
  entryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1c1e2a',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  entryName: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  entryType: {
    color: '#888',
    fontSize: 13,
    fontStyle: 'italic',
  },
});

