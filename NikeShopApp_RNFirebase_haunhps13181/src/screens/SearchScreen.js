import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import Page1 from '../components/SettingSreens/Page1';
import Page2 from '../components/SettingSreens/Page2';
import Page3 from '../components/SettingSreens/Page3';
import Page4 from '../components/SettingSreens/Page4';
import Page5 from '../components/SettingSreens/Page5';

const Page_1 = ({title}) => (
    <View style={styles.container}>
      <Page1 />
    </View>
);
const Page_2 = ({title}) => (
    <View style={styles.container}>
      <Page2 />
    </View>
);
const Page_3 = ({title}) => (
    <View style={styles.container}>
      <Page3 />
    </View>
);
const Page_4 = ({title}) => (
    <View style={styles.container}>
      <Page4 />
    </View>
);
const Page_5 = ({title}) => (
    <View style={styles.container}>
      <Page5 />
    </View>
);
 
class example extends Component {
  render() {
    return (
        <View style={[styles.container, {paddingTop: 20}]}>
          <ScrollableTabView
              tabBarUnderlineStyle
              style={styles.headerTabBarList}
              tabBarActiveTextColor="#53ac49"
              renderTabBar={() => <TabBar underlineColor="#53ac49" />}>
            <Page_1 tabLabel={{label: "Shoes"}} title="Page #1" />
            <Page_2 tabLabel={{label: "Clothing", badge: 3}} title="Page #2 aka Long!" />
            <Page_3 tabLabel={{label: "Gear"}} title="Page #3" />
            <Page_4 tabLabel={{label: "Training"}} title="Page #4 aka Page" />
            <Page_5 tabLabel={{label: "Gym Accessories"}} title="Page #5" />
          </ScrollableTabView>
        </View>
    );
  }
}

export default example

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  headerTabBarList: {

  }
})