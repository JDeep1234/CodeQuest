import java.util.Arrays;
import java.util.Collections;

public class ReverseArray {

    // Brute-force approach: creating a new reversed array
    public static int[] reverseBruteForce(int[] arr) {
        int[] reversed = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            reversed[i] = arr[arr.length - 1 - i];
        }
        return reversed;
    }

    // Optimal approach: in-place swap
    public static void reverseOptimal(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    // Best approach: using Collections for Integer arrays
    public static Integer[] reverseBest(Integer[] arr) {
        Collections.reverse(Arrays.asList(arr));
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        Integer[] arrBoxed = {1, 2, 3, 4, 5};

        System.out.println("Brute-force: " + Arrays.toString(reverseBruteForce(arr)));
        
        reverseOptimal(arr);
        System.out.println("Optimal (In-place): " + Arrays.toString(arr));
        
        System.out.println("Best (Collections): " + Arrays.toString(reverseBest(arrBoxed)));
    }
}

