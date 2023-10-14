import { Dimensions, Platform, PixelRatio } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

/*
 Android => top 24, bottom: 48
 iphone 5 => top: 20, bootom: 0
 iphone 8 => top: 20, bootom: 0
 iphone 11 => top: 44, bootom: 34
 iphone 12 => top: 47, bootom: 34
 iphone 13 => top: 47, bootom: 34
*/

export function getBottomSpace(): number {
    return Platform.OS === 'ios' ? initialWindowMetrics?.insets.bottom || 0 : 0;
}

export function widthPercentageToDP(widthPercent: number): number {
    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
}

export function heightPercentageToDP(heightPercent: number): number {
    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
}
