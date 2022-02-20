import React from 'react';
import {connect} from 'react-redux';

import styles from './styles';
import * as actions from '../../store/action';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomePage = (props) => {
  if (!props.isLoggedIn) {
    props.navigation.navigate('LoginPage');
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.wrapperStyle}>
          
         
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Groups</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The
                    <Text style={styles.descTextColor}>
                      {' '}
                      CometChatGroupListWithMessages
                    </Text>{' '}
                    component launches a Group list with messaging.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('Group');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

           
          </View>
          
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Group List</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>CometChatGroupList</Text>{' '}
                    component launches Group list.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('GroupComponent');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.componentStyle}>
        
          </View>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => props.dispatch(actions.logout())}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = ({reducer}) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(HomePage);
