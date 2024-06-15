import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { LagosMarkets, AbaMarket, AnambraMarket, AbujaMarket } from "./Markets";

const ChipItem = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1a2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const States = () => {
  return (
    <div style={{ width: "100%", padding: 0 }}>
      <Accordion
        elevation={0}
        disableGutters={true}
        expanded
        sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
        slotProps={{transition: {unmountOnExit: true}}}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="states"
          id="states-mart"
          sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
        >
          <Typography sx={{ fontWeight: 600 }}>States</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "& .MuiAccordionDetails-root": { padding: 0 } }}
        >
        <div>
          <Accordion
            elevation={0}
            disableGutters={true}
            expanded
            sx={{ "& .MuiAccordion-root": { padding: 0 }}}
          >
            <AccordionSummary
              sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
              expandIcon={<ExpandMore />}
            >
              <Typography>Lagos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                  <LagosMarkets />
                </Stack>
              </span>
            </AccordionDetails>
          </Accordion>
          </div>
          <div>
          <Accordion
            elevation={0}
            disableGutters={true}
            sx={{
              "& .MuiAccordion-root": {
                padding: 0,
                "::before": { display: "none" },
              },
            }}
          >
            <AccordionSummary
              sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
              expandIcon={<ExpandMore />}
            >
              <Typography>Aba</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                  <AbaMarket />
                </Stack>
              </span>
            </AccordionDetails>
          </Accordion>
          </div>
          <div>
          <Accordion
            elevation={0}
            disableGutters={true}
            sx={{ "& .MuiAccordion-root": { padding: 0 } }}
          >
            <AccordionSummary
              sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
              expandIcon={<ExpandMore />}
            >
              <Typography>Abuja</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                  <AbujaMarket/>
                </Stack>
              </span>
            </AccordionDetails>
          </Accordion>
          </div>
          <div>
          <Accordion
            elevation={0}
            disableGutters={true}
            sx={{ "& .MuiAccordion-root": { padding: 0 } }}
          >
            <AccordionSummary
              sx={{ "& .MuiAccordionSummary-root": { padding: 0 } }}
              expandIcon={<ExpandMore />}
            >
              <Typography>Anambra</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                  <AnambraMarket/>
                </Stack>
              </span>
            </AccordionDetails>
          </Accordion>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default States;
