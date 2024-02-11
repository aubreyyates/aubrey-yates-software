const code = `
LinkedList head = GetLinkedList();

while (head != null)
{
    Console.WriteLine(head.Value);
    head = head.Next;
}
`;

export default code.substring(1);
