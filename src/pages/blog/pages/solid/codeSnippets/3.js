const code = `
public interface IPaymentStrategy
{
    void Pay(Wallet ownerWallet, Wallet insuranceCompanyWallet, Policy policy, Car car);
}

public class FordExplorerHighDeductablePayment : IPaymentStrategy
{
    public void Pay(Wallet ownerWallet, Wallet insuranceCompanyWallet, Policy policy, Car car)
    {
        ownerWallet.funds -= 500;
        insuranceCompanyWallet.funds += 500;
    }
}

public class FordExplorerLowDeductablePayment : IPaymentStrategy
{
    public void Pay(Wallet ownerWallet, Wallet insuranceCompanyWallet, Policy policy, Car car)
    {
        ownerWallet.funds -= 1000;
        insuranceCompanyWallet.funds += 1000;
    }
}
`;

export default code.substring(1);
