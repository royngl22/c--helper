using System;

class Program
{
    public static void Main()
    {
        int Total;
        int Product;

        Calculate(10, 20, out Total, out Product);

        Console.WriteLine("Total : {0} & Product : {1}", Total, Product);
    }

    public static void Calculate(int FN, int SN, out int Sum, out int Product)
    {
        Sum = FN + SN;
        Product = FN * SN;
    }


}
