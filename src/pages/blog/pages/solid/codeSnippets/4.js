const code = `
public class PaymentActions
{
    private readonly Dictionary<(string make, string model, PolicyType type), IPaymentStrategy> _strategies;

    public PaymentActions()
    {
        _strategies = new Dictionary<(string make, string model, PolicyType type), IPaymentStrategy>();
    }

    public void AddPaymentStrategy(string make, string model, PolicyType type, IPaymentStrategy strategy)
    {
        var key = (make, model, type);
        _strategies[key] = strategy; // This will add or update the strategy
    }

    public void PayCarInsurance(Wallet ownerWallet, Wallet insuranceCompanyWallet, Policy policy, Car car)
    {
        var key = (car.Make, car.Model, policy.type);
        if (!_strategies.TryGetValue(key, out var strategy))
        {
            throw new Exception("Payment strategy not found for the given car make, model, and policy type.");
        }

        strategy.Pay(ownerWallet, insuranceCompanyWallet, policy, car);
    }
}
`;

export default code.substring(1);
