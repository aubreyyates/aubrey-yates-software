const code = `
public class Node
{
    // The data held in the node.
    public int Value { get; set; }
    
    // Reference to the next node in the list, null if this is the last node.
    public ListNode Next { get; set; }
    
    // Constructor to create a new node with given value.
    public ListNode(int value)
    {
        Value = value;
    }
}
`;

export default code.substring(1);
