import { useQuery } from "@cancy-project/api";

const ticketsQuery = `
  query {
    tickets {
      id
      project {
        name
      }
      techStack
      title
      reward
      status
    }
  }
`;

export default function MyTicketList() {
  const [result, reexecuteQuery] = useQuery({ query: ticketsQuery });

  const { data, fetching, error } = result;

  return (
    {data.tickets.map(ticket => (
      <p key={ticket.id}>{ticket.id}</p>
    ))}
  );
}
