public class ColorPoint2 extends Point2 {
    private String color;

    public ColorPoint2(int x, int y, String color) {
        super(x, y);
        this.color = color;
    }

    public void showColorPoint() {
        System.out.print(color + " ");
        showPoint();
    }
}
