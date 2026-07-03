import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [quantumState, setQuantumState] = useState('superposition');
  const [time, setTime] = useState(new Date());
  const [animation] = useState(new Animated.Value(0));

  const apps = [
    { id: '1', name: 'Phone', icon: '📱', color: '#00ff88' },
    { id: '2', name: 'Messages', icon: '💬', color: '#ff44ff' },
    { id: '3', name: 'Camera', icon: '📷', color: '#ffff00' },
    { id: '4', name: 'Browser', icon: '🌐', color: '#00ffff' },
    { id: '5', name: 'Calculator', icon: '🧮', color: '#ff8800' },
    { id: '6', name: 'Calendar', icon: '📅', color: '#ff4444' },
    { id: '7', name: 'AI', icon: '🤖', color: '#ff44ff' },
    { id: '8', name: 'Files', icon: '📁', color: '#ffaa00' },
    { id: '9', name: 'Music', icon: '🎵', color: '#ff6b6b' },
    { id: '10', name: 'Health', icon: '💊', color: '#00ff88' },
    { id: '11', name: 'Finance', icon: '💰', color: '#ffd700' },
    { id: '12', name: 'Games', icon: '🎮', color: '#ff6bff' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const states = ['superposition', 'coherence', 'entanglement'];
    const stateInterval = setInterval(() => {
      setQuantumState(states[Math.floor(Math.random() * states.length)]);
    }, 2000);

    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => {
      clearInterval(timer);
      clearInterval(stateInterval);
    };
  }, []);

  const handleAppPress = (appName) => {
    alert(`⚛ ${appName}\n\nQuantum Processing Activated!\nNeural AI: 95.7%\nQuantum Signature: Q${Math.floor(Math.random() * 1000)}`);
  };

  const getQuantumColor = () => {
    const colors = {
      superposition: '#00ffff',
      coherence: '#00ff88',
      entanglement: '#ff44ff'
    };
    return colors[quantumState] || '#00ffff';
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.timeText}>
            {time.toLocaleTimeString()}
          </Text>
          <Text style={styles.dateText}>
            {time.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Text>
        </View>
        <View style={styles.quantumStatus}>
          <Text style={[styles.quantumDot, { color: getQuantumColor() }]}>●</Text>
          <Text style={styles.quantumText}>
            {quantumState.toUpperCase()}
          </Text>
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>⚛ QUANTUM OS</Text>
        <Text style={styles.subtitle}>v4.5</Text>
      </View>

      {/* Quantum Animation */}
      <Animated.View style={[
        styles.quantumAnimation,
        {
          transform: [
            {
              scale: animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1.1, 1],
              })
            }
          ]
        }
      ]}>
        <View style={styles.quantumRing}>
          <Text style={styles.quantumSymbol}>⚛</Text>
        </View>
      </Animated.View>

      {/* Apps Grid */}
      <ScrollView 
        style={styles.appsContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.appsGrid}
      >
        {apps.map((app) => (
          <TouchableOpacity
            key={app.id}
            style={[styles.appItem, { borderColor: app.color }]}
            onPress={() => handleAppPress(app.name)}
            activeOpacity={0.7}
          >
            <Text style={styles.appIcon}>{app.icon}</Text>
            <Text style={styles.appName}>{app.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created by Saleh Amoo</Text>
        <Text style={styles.footerSubtext}>© 2026 All rights reserved</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 10,
    backgroundColor: '#1a1a1a',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ffff',
  },
  dateText: {
    fontSize: 11,
    color: '#888888',
    marginTop: 2,
  },
  quantumStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  quantumDot: {
    fontSize: 14,
    marginRight: 5,
  },
  quantumText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#0a0a0a',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ffff',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#00ff88',
    marginTop: 2,
  },
  quantumAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    marginVertical: 5,
  },
  quantumRing: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantumSymbol: {
    fontSize: 28,
    color: '#00ffff',
  },
  appsContainer: {
    flex: 1,
  },
  appsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  appItem: {
    width: (width - 60) / 4,
    height: 70,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  appIcon: {
    fontSize: 24,
    marginBottom: 3,
  },
  appName: {
    color: '#ffffff',
    fontSize: 9,
    textAlign: 'center',
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    backgroundColor: '#0a0a0a',
  },
  footerText: {
    color: '#888888',
    fontSize: 11,
  },
  footerSubtext: {
    color: '#666666',
    fontSize: 9,
    marginTop: 2,
  },
});
