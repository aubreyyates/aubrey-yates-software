const code = `
public abstract class Vehicle() 
{
    public abstract void Fuel()
    {

    }

    public abstract void Drive()
    {

    }

    public abstract void Fly()
    {

    }
}

public class Plane : Vehicle
{

}

public class Car : Vehicle
{
    public override void Fly()
    {
        throw new Exception("Car's can't fly!");
    }
}
`;

export default code.substring(1);
