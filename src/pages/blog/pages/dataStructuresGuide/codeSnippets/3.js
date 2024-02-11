const code = `
public class TreeNode
{
    // The data held in the node.
    public int Value { get; set; }
    
    // Reference to the left child node.
    public TreeNode LeftChild { get; set; }

    // Reference to the right child node.
    public TreeNode RightChild { get; set; }
    
    // Constructor to create a new node with given value.
    public ListNode(int value)
    {
        Value = value;
    }
}
`;

export default code.substring(1);
