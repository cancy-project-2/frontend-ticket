import {
  Card,
  CardContent,
  CardActionArea,
  Stack,
  Typography,
} from "@cancy-project/styleguide";

const TicketCard = ({ ticket }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          {ticket.project ? (
            <Typography color="text.secondary" variant="body2">
              {ticket.project.name}
            </Typography>
          ) : (
            ""
          )}
          <Typography sx={{ mb: 1.5 }} variant="h5">
            {ticket.title}
          </Typography>
          {ticket.techStack ? (
            <Typography
              sx={{
                mb: 1.5,
                textTransform: "capitalize",
              }}
              color="text.secondary"
              variant="body2"
            >
              {ticket.techStack.join(", ")}
            </Typography>
          ) : (
            ""
          )}
          <Stack
            direction="row"
            alignItems="center"
            align="right"
            justifyContent="end"
          >
            <Typography variant="body1" color="secondary">
              {ticket.reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              USD
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TicketCard;
