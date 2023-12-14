const code = `
public class Car
{
    public string Make { get; set; }
    public string Model { get; set; }

    public void Drive()
    {
        // Drive the car.
    }

    public void Brake()
    {
        // Brake the car.
    }
}

public class PaymentActions
{
    public void PayCarInsurance(Wallet ownerWallet, Wallet insuranceCompanyWallet, Policy policy, Car car)
    {
        if (car.Make == "Ford") 
        {
            if (car.Model == "Explorer")
            {
                if (policy.type == Policy.HIGHDEDUCTABLE)
                {
                    ownerWallet.funds -= 500;
                    insuranceCompanyWallet.funds += 500;
                } 
                else if (policy.type == Policy.LOWDEDUCTABLE)
                {
                    ownerWallet.funds -= 1000;
                    insuranceCompanyWallet.funds += 1000;
                }
                else {
                    throw new Error("Invalid policy");
                }
            }
        }
    }
}
`;

export default code.substring(1);
