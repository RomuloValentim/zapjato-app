import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-brand-dark items-center justify-center p-4">
      <StatusBar barStyle="light-content" backgroundColor="#0B1325" />
      <View className="bg-brand-card p-6 rounded-2xl border border-brand-primary/30 items-center w-full max-w-sm">
        <Text className="text-brand-primary text-2xl font-bold mb-2">ZapJato</Text>
        <Text className="text-brand-muted text-center text-sm">
          Ambiente configurado e pronto para o desenvolvimento!
        </Text>
      </View>
    </View>
  );
}
