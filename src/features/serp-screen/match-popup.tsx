import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Animated } from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Text,
} from '@ui-kitten/components';

import { LinearGradient } from 'expo-linear-gradient';
import { hideMatchPopup } from '@src/redux/slices';
import { ToledoButton } from '@src/components';

import { Ionicons } from '@expo/vector-icons';

export const MatchPopup = () => {
  const dispatch = useDispatch();
  const styles = useStyleSheet(themedStyles);

  const { visible, card } = useSelector((state) => {
    return state?.localState?.matchPopup;
  });
  const currentUserPhotoUri = useSelector((state) => {
    return state.user.data.UserAvatar;
  });

  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
      }).start();
    }
  }, [opacity, visible]);

  const handleButtonPress = useCallback(() => {
    dispatch(hideMatchPopup());
  }, [hideMatchPopup]);

  const handleCallButtonPress = useCallback(() => {
    // Звоним по номеру телефона
    dispatch(hideMatchPopup());
  }, [hideMatchPopup]);

  if (!visible) {
    return null;
  }

  const {
    data: {
      Photos: [firstCardPhoto],
      Phone: phone = '+7 909 665 66 44',
    },
  } = card;

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <LinearGradient
        style={styles.gradientContainer}
        colors={[
          'transparent',
          '#A768FE',
          '#93C6F9',
          '#97B4FA',
          '#A768FE',
          'transparent',
        ]}
        start={[0.5, 0]}
        end={[0.5, 1]}
        location={[0.25, 0.4, 1]}
      >
        <View style={styles.modalContainer}>
          <Text category="h3" style={styles.header}>
            Это Матч!
          </Text>
          <View style={styles.avatars}>
            <Avatar
              source={{ uri: currentUserPhotoUri }}
              size="giant"
              style={styles.avatar}
            />
            <Avatar
              source={{ uri: firstCardPhoto.uri }}
              size="giant"
              style={styles.avatar}
            />
          </View>
          <Text category="h6" style={styles.desc}>
            Теперь можно договориться о просмотре!
          </Text>
          <View style={styles.actions}>
            <View style={styles.action}>
              <ToledoButton onPress={handleButtonPress}>Хорошо</ToledoButton>
            </View>
            <View style={styles.action}>
              <ToledoButton onPress={handleCallButtonPress}>
                <Ionicons name="ios-call" size={16} color={'#fff'} />
                <Text style={styles.phoneText}> {phone}</Text>
              </ToledoButton>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const themedStyles = StyleService.create({
  container: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 9,
  },
  gradientContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    height: 200,
    flexDirection: 'column',
    alignItems: 'center',
    transform: [{ translateY: -100 }],
  },
  header: {
    color: '#fff',
  },
  avatars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
    width: 250,
  },
  avatar: {
    height: 100,
    width: 100,
  },
  desc: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  action: {
    flexDirection: 'column',
    margin: 5,
    height: 50,
  },
  phoneIcon: {
    marginRight: 5,
  },
  phoneText: {
    color: '#fff',
  },
});
