import Explore from '@/components/Explore';
import FeedScreen from '@/components/Feed';
import ForumScreen from '@/components/Forums';
import NotificationScreen from '@/components/Notifications';
import ProfileScreen from '@/components/Profile';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { icons } from 'lucide-react-native';
import { MotiProps, MotiView } from 'moti';
import { motifySvg } from 'moti/svg';
import { useCallback, useState } from 'react';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import Animated, { FadeInRight, FadeOutLeft, FadeOutRight, LinearTransition } from 'react-native-reanimated';

type IconNames = keyof typeof icons;

type TabItem = {
  icon: IconNames;
  label: string;
}

const Tabs: TabItem[] = [
  { icon: "ChartCandlestick", label: "Feed" },
  { icon: "Search", label: "Search" },
  { icon: "MessageSquareMore", label: "Forums" },
  { icon: "BellDot", label: "Notifications" },
  { icon: "UserRoundPen", label: "Profile" },
];

type IconProp = {
  name: IconNames;
} & MotiProps;

function Icon({ name, ...rest }: IconProp) {
  //@ts-ignore
  const IconComponent = motifySvg(icons[name])();
  return <IconComponent size={16} color={'#ffffff'} {...rest} />
}

export default function TabLayout() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ACTIVE_COLOR = '#ffffff';
  const INACTIVE_COLOR = 'grey';
  const ACTIVE_BACKGROUND_COLOR = '#4CAF50';
  const INACTIVE_BACKGROUND_COLOR = '#353238';
  const _SPACING = 4;
  const WIDTH = Dimensions.get('screen').width;
  const onChange = useCallback((index: number) => {
    setSelectedIndex(index)
  }, []);
  return (
    <ThemedView style={styles.container}>
      {/* <ProfileScreen />
      <NotificationScreen />
      <ForumScreen />
      <FeedScreen /> */}
      <ThemedView style={{
        flexDirection: 'row',
        gap: _SPACING,
        position: 'absolute',
        bottom: 0,
        height: 80,
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH
      }}>
        {Tabs.map((tab, index) => {
          const isSelected = selectedIndex === index;
          return (
            <MotiView
              animate={{
                backgroundColor: isSelected ? ACTIVE_BACKGROUND_COLOR : INACTIVE_BACKGROUND_COLOR,
                borderRadius: 8,
                overflow: 'hidden',
                height: 40
              }}
              layout={LinearTransition.springify().damping(80).stiffness(200)}
              key={index}
            >
              <Pressable
                key={index}
                style={{
                  padding: _SPACING * 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
                onPress={() => onChange(index)}
              >
                <Icon
                  name={tab.icon}
                  animate={{
                    color: isSelected ? ACTIVE_COLOR : INACTIVE_COLOR,
                  }}
                />
                {isSelected &&
                  <Animated.Text
                    entering={FadeInRight.springify().damping(80).stiffness(200)}
                    exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                    style={{
                      color: isSelected ? ACTIVE_COLOR : INACTIVE_COLOR,
                    }}
                  >
                    {tab.label}
                  </Animated.Text>
                }
              </Pressable>
            </MotiView>
          )
        })}
      </ThemedView>

      <ThemedView style={{
        flex: 1
      }}>
        {selectedIndex === 0 ?
          <FeedScreen />
          : selectedIndex === 1 ?
            <Explore />
            : selectedIndex === 2 ?
              <ForumScreen />
              : selectedIndex === 3 ?
                <NotificationScreen />
                : selectedIndex === 4 ?
                  <ProfileScreen />
                  : <ThemedView></ThemedView>
        }
      </ThemedView>
    </ThemedView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
