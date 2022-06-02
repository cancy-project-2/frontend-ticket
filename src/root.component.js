import { client, Provider } from "@cancy-project/api";
import { ThemeWithSwitcherProvider } from "@cancy-project/styleguide";
import TicketList from "./tickets.component";

export default function Root(props) {
  return (
    <ThemeWithSwitcherProvider>
      <Provider value={client}>
        <TicketList />
      </Provider>
    </ThemeWithSwitcherProvider>
  );
}
