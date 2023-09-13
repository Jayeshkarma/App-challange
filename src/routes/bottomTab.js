import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { League } from '../screens/league';
import { Research } from '../screens/research';
import { LeaderBoard } from '../screens/leaderBoard';
import { Profile } from '../screens/profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const tabIcons = {
    Home:{name: 'home',iconType:"FontAwesome"},
    Leagues: {name:'trophy',iconType:"FontAwesome"},
    Research:{name: 'search',iconType:"FontAwesome"},
    Profile:{name: 'user',iconType:"FontAwesome"},
    LeaderBoard: {name:'bar-chart',iconType:"MaterialIcons"},
  };

export const BottomTabs=()=> {
  return (
    <Tab.Navigator    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            const icon = tabIcons[route.name];

            if (icon?.iconType === 'FontAwesome') {
              return <FontAwesome name={icon?.name} size={24} color={color} />;
            }
  
            return <MaterialIcons name={icon?.name} size={24} color={color} />;
          },

          tabBarStyle: { paddingBottom:21,paddingTop:7,height:70 },
        tabBarActiveTintColor: '#6231AD',
        tabBarInactiveTintColor: '#727682',
        headerShown: false,
      })} >
      <Tab.Screen name="Home"  component={HomeScreen} />
      <Tab.Screen name="Leagues" component={League} />
      <Tab.Screen name="Research" component={Research} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}