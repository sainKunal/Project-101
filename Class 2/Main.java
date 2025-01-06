import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] h = new int[n];
            
            for (int i = 0; i < n; i++) {
                h[i] = sc.nextInt();
            }
            
            int operations = 0;
            
            for (int i = 1; i < n; i++) {
                if (h[i] < h[i - 1]) {
                    operations += h[i - 1] - h[i];
                    h[i] = h[i - 1];
                }
            }
            
            System.out.println(operations);
        }
        
        sc.close();
    }
}
