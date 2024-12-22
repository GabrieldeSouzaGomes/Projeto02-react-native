import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://assets.goal.com/images/v3/blta48e3bbb2f5a960f/GettyImages-1446977379.jpg?auto=webp&format=pjpg&width=3840&quality=60' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Neymar jr</Text>
      <Text style={styles.description}>
      Neymar da Silva Santos Júnior, também conhecido como Neymar Jr., é um jogador de futebol brasileiro que atua como atacante e ponta-esquerda
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
 
