import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import Paper from '../../components/notifications/Paper';
import Toast from "../../components/notifications/Toast";
import PinchNZoom from '../images/PinchNZoom';
import ImageManipulator from '../../components/images/ExpoImageManipulator';

export default function Carousel() {
	const [currentPage, setCurrentPage] = useState(0);
  return (
    <View style={styles.viewPager}>
      <PagerView 
	  	style={styles.viewPager} 
		initialPage={currentPage}
		onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
		>
        {/* <View style={styles.page} key="1">
			<Text style={styles.text}>Override OS</Text>
			<PinchNZoom />
        </View> */}
        <View style={styles.page} key="1">
        	{/* <Text style={styles.text}>Paper Notifications</Text> */}
		    <Paper />
        </View>
        <View style={styles.page} key="2">
        	{/* <Text style={styles.text}>Toast Notifications</Text> */}
		    <Toast />
        </View>
		<View style={styles.page} key="3">
			<Text style={styles.text}>Resize Image</Text>
			<ImageManipulator />
        </View>
      </PagerView>
		<Text style={[styles.cta, styles.left]}>
			{currentPage !== 2 && '⬅ Left'}
			{/* ☝Swipe☝ */}
		</Text>
		<Text style={[styles.cta, styles.right]}>
			
			{/* ☝Swipe☝ */}
			{currentPage !== 0 && 'Right ➡'} 
		</Text>
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
  text: {
	position: 'absolute',
	top: 50,
	zIndex: 1,
  },
  cta: {
	position: 'absolute',
	bottom: '50%',
	// width: '100%',
	// textAlign: 'center',
  },
  right: {
	right: 0,
  },
  left: {
	left: 0,
  },
  image: {
	// width: '75%'
  }
});