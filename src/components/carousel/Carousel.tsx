import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import Paper from '../../components/notifications/Paper';
import Toast from "../../components/notifications/Toast";
import ImageResize from '../../components/images/ImageResizer';
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
        	<Text style={styles.text}>Pdf page</Text>
        </View>
      </PagerView>
		<Text style={styles.cta}>
			{currentPage !== 0 && '⬅⬅'}  ☝ Swipe ☝  {currentPage !== 3 && '➡➡'} 
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
  }
});