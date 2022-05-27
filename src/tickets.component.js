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

export default function TicketList() {
  const [result, reexecuteQuery] = useQuery({ query: ticketsQuery });

  const { data, fetching, error } = result;

  if (fetching) {
    return (<p>{'...'}</p>)
  }

  return (
    <div>
      {data.tickets.map((ticket) => (
        <p key={ticket.id}>{ticket.id}</p>
      ))}
    </div>
  );
}
