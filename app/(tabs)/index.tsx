import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>HANDBALL NYC</Text>
        <Text style={styles.headerSub}>Find your next game</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionBtn, styles.primary]}>
          <Text style={styles.actionIcon}>🗺️</Text>
          <Text style={styles.actionText}>Find a Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.secondary]}>
          <Text style={styles.actionIcon}>➕</Text>
          <Text style={styles.actionText}>Create a Game</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Bar */}
      <View style={styles.statsBar}>
        <View style={styles.stat}>
          <Text style={styles.statVal}>12</Text>
          <Text style={styles.statLbl}>Open Games</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statVal}>3</Text>
          <Text style={styles.statLbl}>Tournaments</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statVal}>248</Text>
          <Text style={styles.statLbl}>Players</Text>
        </View>
      </View>

      {/* Recent Games */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Games Near You</Text>

        <View style={styles.gameCard}>
          <View style={styles.gameTop}>
            <Text style={styles.gameCourt}>West 4th Street Courts</Text>
            <Text style={styles.gameTime}>Today 4:30pm</Text>
          </View>
          <Text style={styles.gameType}>Singles · Intermediate · 2 spots left</Text>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.joinBtnText}>Join Game</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameCard}>
          <View style={styles.gameTop}>
            <Text style={styles.gameCourt}>Brighton Beach Courts</Text>
            <Text style={styles.gameTime}>Tomorrow 10am</Text>
          </View>
          <Text style={styles.gameType}>Doubles · Open · 4 spots left</Text>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.joinBtnText}>Join Game</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameCard}>
          <View style={styles.gameTop}>
            <Text style={styles.gameCourt}>Crotona Park Courts</Text>
            <Text style={styles.gameTime}>Sat 11am</Text>
          </View>
          <Text style={styles.gameType}>Singles · Advanced · 1 spot left</Text>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.joinBtnText}>Join Game</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    backgroundColor: '#111',
    paddingTop: 64,
    paddingBottom: 32,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#f0ebe2',
    letterSpacing: 2,
  },
  headerSub: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    letterSpacing: 1,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    padding: 20,
  },
  actionBtn: {
    flex: 1,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    gap: 8,
  },
  primary: {
    backgroundColor: '#d63a2a',
  },
  secondary: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
  },
  actionIcon: {
    fontSize: 24,
  },
  actionText: {
    color: '#f0ebe2',
    fontWeight: '600',
    fontSize: 14,
  },
  statsBar: {
    flexDirection: 'row',
    backgroundColor: '#111',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statVal: {
    fontSize: 24,
    fontWeight: '700',
    color: '#d63a2a',
  },
  statLbl: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f0ebe2',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  gameCard: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#222',
  },
  gameTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  gameCourt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f0ebe2',
    flex: 1,
  },
  gameTime: {
    fontSize: 12,
    color: '#d63a2a',
    fontWeight: '500',
  },
  gameType: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  joinBtn: {
    backgroundColor: '#d63a2a',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  joinBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});