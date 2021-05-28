import React from 'react';

import {View, StyleSheet, } from 'react-native';
import {DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props){

    const[isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme= () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                  size={50}
                />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>Sơn Tùng Phong</Title>
                  <Caption style={styles.caption}>@D13CNPM1</Caption>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    111
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    301
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Trang Chủ"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Tài Khoản"
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="bookmark-outline" color={color} size={size} />
                )}
                label="Dấu Trang"
                onPress={() => {
                  props.navigation.navigate('Bookmark');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="settings-outline" color={color} size={size} />
                )}
                label="Cài Đặt"
                onPress={() => {
                  props.navigation.navigate('Setting');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Trợ Giúp"
                onPress={() => {
                  props.navigation.navigate('Support');
                }}
              />
            </Drawer.Section>
            <Drawer.Section title="Giao Diện">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}
              >
                <View style={styles.preference}>
                  <Text>Giao Diện Tối</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Đăng Xuất"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,  
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

});


