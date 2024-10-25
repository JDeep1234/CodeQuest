public class SortedArrayCheck {

    // Brute-force approach
    public static boolean isSortedBruteForce(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    // Optimal approach using recursion
    public static boolean isSortedOptimal(int[] arr, int index) {
        if (index >= arr.length - 1) {
            return true;
        }
        return arr[index] <= arr[index + 1] && isSortedOptimal(arr, index + 1);
    }

    // Best approach using Java Streams
    public static boolean isSortedBest(int[] arr) {
        return java.util.stream.IntStream.range(0, arr.length - 1)
                                         .allMatch(i -> arr[i] <= arr[i + 1]);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        System.out.println("Brute-force: " + isSortedBruteForce(arr));
        System.out.println("Optimal (Recursion): " + isSortedOptimal(arr, 0));
        System.out.println("Best (Streams): " + isSortedBest(arr));
    }
}

