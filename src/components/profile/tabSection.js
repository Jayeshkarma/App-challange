import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabView = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const DefaultTabs = [
    {
      name: 'Tab 1',
      content: (
        <View>
          <Text>This is Tab 1 content.</Text>
        </View>
      ),
    },
    {
      name: 'Tab 2',
      content: (
        <View>
          <Text>This is Tab 2 content.</Text>
        </View>
      ),
    },
  ];

  const renderedTabs = tabs?.length > 0 ? tabs : DefaultTabs;

  return (
    <View>
      <View style={styles.tabContainer}>
        {renderedTabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabChange(index)}
            style={[styles.tab, activeTab === index && styles.activeTab]}
          >
            <Text 
            style={activeTab === index ? styles.activeTabText : styles.tabText}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {renderedTabs[activeTab].content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
    paddingVertical: 20,
    backgroundColor:'#fff'
  },
  activeTab: {
    borderColor: '#6231AD',
  },
  activeTabText: {
    color: '#6231AD',
    fontFamily:'Montserrat-SemiBold'
  },
  tabText: {
    fontSize: 14,
    color:'#727682',
    fontFamily:'Montserrat-Medium'
  },
});

export default TabView;
