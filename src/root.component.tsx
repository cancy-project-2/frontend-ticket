import { client, Provider } from "@cancy-project/api";
import TicketList from "./tickets.component";

export default function Root(props) {
  return (
    <Provider value={client}>
      <TicketList />
    </Provider>
  );
}
