import { useQuery } from "@cancy-project/api";
import { Masonry, Box } from "@cancy-project/styleguide";
import TicketCard from "./card.component";

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
    return <p>{"..."}</p>;
  }

  return (
    <Masonry>
      {data.tickets.map((ticket) => (
        <Box key={ticket.id}>
          <TicketCard ticket={ticket} />
        </Box>
      ))}
    </Masonry>
  );
}
