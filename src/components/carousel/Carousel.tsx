import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import Paper from '../../components/notifications/Paper';
import Toast from "../../components/notifications/Toast";
import PinchNZoom from '../images/PinchNZoom';
import ImageManipulator from '../../components/images/ExpoImageManipulator';

export default function Carousel() {
	const [currentPage, setCurrentPage] = useState(3);
  return (
    <View style={styles.viewPager}>
      <PagerView 
	  	style={styles.viewPager} 
		initialPage={currentPage}
		onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
		>
        <View style={styles.page} key="1">
        	<Text style={styles.text}>Resize page</Text>
			<ImageManipulator />
        </View>
        <View style={styles.page} key="2">
        	<Text style={styles.text}>Paper page</Text>
		    <Paper />
        </View>
        <View style={styles.page} key="3">
        	<Text style={styles.text}>Toast page</Text>
		    <Toast />
        </View>
		<View style={styles.page} key="4">
        	<Text style={styles.text}>Pinch n Zoom page</Text>
			<PinchNZoom />
        </View>
      </PagerView>
		<Text style={styles.cta}>
			{currentPage !== 3 && '⬅ Left ⬅'}  
			☝Swipe☝  {currentPage !== 0 && '➡ Right ➡'} 
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
	bottom: 20,
	width: '100%',
	textAlign: 'center',
  },
  image: {
	// width: '75%'
  }
});