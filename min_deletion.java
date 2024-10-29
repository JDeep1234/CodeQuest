import java.util.*;

public class Solution {
    public int minDeletions(String s) {
        // Create a map to store the frequency of each character
        HashMap<Character, Integer> characterFrequency = new HashMap<>();
        int deletions = 0;
        // Set to keep track of frequencies that are already used
        HashSet<Integer> usedFrequencies = new HashSet<>();

        // Count the frequency of each character in the string
        for (char character : s.toCharArray()) {
            characterFrequency.put(character, characterFrequency.getOrDefault(character, 0) + 1);
        }

        // Go through each frequency in the map
        for (int frequency : characterFrequency.values()) {
            // If the frequency is already in the set, keep reducing it until we find an unused one
            while (frequency > 0 && usedFrequencies.contains(frequency)) {
                frequency--;  // Reduce frequency by 1
                deletions++;  // Count this as a deletion
            }
            // Add the new (or unchanged) frequency to the set of used frequencies
            usedFrequencies.add(frequency);
        }

        return deletions;
    }
}
