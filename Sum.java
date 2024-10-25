public class ArraySum {

    // Brute-force approach
    public static int sumBruteForce(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    // Optimal approach using recursion
    public static int sumOptimal(int[] arr, int index) {
        if (index >= arr.length) {
            return 0;
        }
        return arr[index] + sumOptimal(arr, index + 1);
    }

    // Best approach using Java Streams
    public static int sumBest(int[] arr) {
        return java.util.Arrays.stream(arr).sum();
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        System.out.println("Brute-force Sum: " + sumBruteForce(arr));
        System.out.println("Optimal (Recursion) Sum: " + sumOptimal(arr, 0));
        System.out.println("Best (Streams) Sum: " + sumBest(arr));
    }
}

