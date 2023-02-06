import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import Paper from '../../components/notifications/Paper';
import Toast from "../../components/notifications/Toast";
import ImageResize from '../../components/images/ImageResizer';
import ImageManipulator from '../../components/images/ExpoImageManipulator';

export default function Carousel() {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
        	<Text>Resize page</Text>
			<ImageManipulator />

        </View>
        <View style={styles.page} key="2">
        	<Text>Paper page</Text>
		    <Paper />
        </View>
        <View style={styles.page} key="3">
        	<Text>Toast page</Text>
		    <Toast />
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});