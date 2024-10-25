public class RemoveCharacter {

    // Brute-force approach using loop and StringBuilder
    public static String removeCharBruteForce(String str, char ch) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != ch) {
                result.append(str.charAt(i));
            }
        }
        return result.toString();
    }

    // Optimal approach using recursion
    public static String removeCharOptimal(String str, char ch) {
        if (str.isEmpty()) {
            return "";
        }
        char firstChar = str.charAt(0);
        String remainingString = removeCharOptimal(str.substring(1), ch);
        return (firstChar == ch) ? remainingString : firstChar + remainingString;
    }

    // Best approach using Java Streams
    public static String removeCharBest(String str, char ch) {
        return str.chars()
                  .filter(c -> c != ch)
                  .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                  .toString();
    }

    public static void main(String[] args) {
        String str = "hello world";
        char ch = 'o';

        System.out.println("Brute-force: " + removeCharBruteForce(str, ch));
        System.out.println("Optimal (Recursion): " + removeCharOptimal(str, ch));
        System.out.println("Best (Streams): " + removeCharBest(str, ch));
    }
}

