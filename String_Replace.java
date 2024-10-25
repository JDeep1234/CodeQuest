public class ReplaceCharacterWithString {

    // Brute-force approach using loop and StringBuilder
    public static String replaceCharBruteForce(String str, char target, String replacement) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == target) {
                result.append(replacement);
            } else {
                result.append(str.charAt(i));
            }
        }
        return result.toString();
    }

    // Optimal approach using recursion
    public static String replaceCharOptimal(String str, char target, String replacement) {
        if (str.isEmpty()) {
            return "";
        }
        char firstChar = str.charAt(0);
        String remainingString = replaceCharOptimal(str.substring(1), target, replacement);
        return (firstChar == target) ? replacement + remainingString : firstChar + remainingString;
    }

    // Best approach using Java's replace method
    public static String replaceCharBest(String str, char target, String replacement) {
        return str.replace(String.valueOf(target), replacement);
    }

    public static void main(String[] args) {
        String str = "hello world";
        char target = 'o';
        String replacement = "XYZ";

        System.out.println("Brute-force: " + replaceCharBruteForce(str, target, replacement));
        System.out.println("Optimal (Recursion): " + replaceCharOptimal(str, target, replacement));
        System.out.println("Best (replace method): " + replaceCharBest(str, target, replacement));
    }
}
