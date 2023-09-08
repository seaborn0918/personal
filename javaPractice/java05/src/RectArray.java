import java.util.Scanner;

public class RectArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Rect2[] rect = new Rect2[4];
        int cnt = 0;
        int sum = 0;
        for (int i = 0; i < rect.length; i++) {
            cnt++;
            System.out.println(cnt + "너비와 높이 >>");
            rect[i] = new Rect2(sc.nextInt(), sc.nextInt());
            sum += rect[i].getArea();
        }
        System.out.println("사각형 전체 합은 " + sum);
    }
}
