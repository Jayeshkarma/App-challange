import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Avatar from 'react-native-badge-avatar';
import TabView from '../components/profile/tabSection';
import {ProfileTabs} from '../utiles/profiletabConfig';
export const Profile = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        {/* profile info section */}
        <View
          style={{
            paddingVertical: 31,
            paddingHorizontal: 21,
            backgroundColor: '#fff',
          }}>
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 33,
            }}>
            <Avatar
              size={24}
              placeholder={require('../assets/images/level.png')}
              onPress={() => {}}
            />
            <Text
              style={{
                color: '#333',
                fontSize: 14,
                fontFamily: 'Montserrat-Medium',
                color: '#727682',
              }}>
              Profile Screen
            </Text>
            <Avatar
              size={24}
              placeholder={require('../assets/images/comment-alt.png')}
              onPress={() => {}}
              badge={1}
              badgeBackgroundColor="#6231AD"
            />
          </View>
          {/* profile info */}
          <View style={styles.container}>
            <View style={styles.profileContainer}>
              <Image
                source={require('../assets/images/profile.png')}
                style={styles.profileImage}
              />
              <TouchableOpacity style={styles.editButton}>
                <Image
                  source={require('../assets/images/edit.png')}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.profileName}>Jina Simons</Text>
            <Text style={styles.profileInfoBadge}>6000 Pts</Text>
            <Text style={styles.profileInfo}>
              I’m a software developer that has been in the crypto space since
              2012. And I’ve seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
            <View style={styles.profileLogOut}>
              <Icon
                name="sign-out"
                size={18}
                color="#727682"
                style={{marginRight: 9}}
              />
              <Text style={styles.profileInfo}>Logout</Text>
            </View>
          </View>
          {/* card section */}
          <View style={styles?.cardContainer}>
            <View>
              <Text style={styles.cardText}>Under or Over</Text>
              <View style={styles.cardRow}>
                <Avatar
                  size={32}
                  placeholder={require('../assets/images/up.png')}
                  onPress={() => {}}
                />
                <Text style={styles?.cardNumber}>81%</Text>
              </View>
            </View>
            <View>
              <Text style={styles.cardText}>Top 5</Text>
              <View style={styles.cardRow}>
                <Avatar
                  size={32}
                  placeholder={require('../assets/images/down.png')}
                  onPress={() => {}}
                />
                <Text style={styles?.cardNumber}>-51%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <TabView tabs={ProfileTabs} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
    padding: 8,
  },
  editIcon: {
    width: 12,
    height: 12,
    tintColor: 'white',
  },
  profileName: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#333',
  },
  profileInfo: {
    marginTop: 8,
    fontSize: 14,
    color: '#727682',
    fontFamily: 'Montserrat-Medium',
  },
  profileInfoBadge: {
    marginTop: 8,
    fontSize: 12,
    color: '#727682',
    fontFamily: 'Montserrat-Medium',
  },
  profileLogOut: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 20,
    marginBottom: 40,
    fontSize: 14,
    color: '#727682',
    fontFamily: 'Montserrat-Medium',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    padding: 20,
    borderColor: '#EEEAF3',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardText: {
    color: '#727682',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  cardNumber: {
    color: '#4F4F4F',
    marginLeft: 12,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  cardRow: {
    flexDirection: 'row',
    paddingVertical: 14,
  },
  tabContainer: {
    paddingVertical: 4,
    backgroundColor: '#F3F2F7',
  },
});
